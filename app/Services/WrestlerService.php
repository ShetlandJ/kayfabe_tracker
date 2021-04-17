<?php

namespace App\Services;

use App\Models\Promotion;
use App\Models\Wrestler;
use App\Models\WrestlersToPromotions;
use League\Csv\Reader;
use Ramsey\Uuid\Uuid;

class WrestlerService
{
    public function getAllWrestlers()
    {
        return Wrestler::all();
    }

    public function getByUuid(string $uuid): Wrestler
    {
        return Wrestler::where('uuid', $uuid)->first();
    }

    public function getBySlug(string $slug): ?Wrestler
    {
        return Wrestler::where('slug', $slug)->first();
    }

    public function getBySlugAndPromotion(string $slug, Promotion $promotion): Wrestler
    {
        return Wrestler::select('wrestlers.*')
            ->where('slug', $slug)
            ->join('wrestlers_to_promotions', 'wrestlers_to_promotions.wrestler_id', 'wrestlers.id')
            ->join('wrestling_promotions', 'wrestling_promotions.id', 'wrestlers_to_promotions.promotion_id')
            ->where('wrestling_promotions.id', $promotion->id)
            ->first();
    }

    public function create(array $payload): Wrestler
    {
        $wrestler = new Wrestler();

        $wrestler->uuid = Uuid::uuid4()->toString();
        $wrestler->forename = $payload['forename'] ?? null;
        $wrestler->middle_names = $payload['middle_names'] ?? null;
        $wrestler->surname = $payload['surname'] ?? null;
        $wrestler->biography = $payload['biography'] ?? null;
        $wrestler->slug = $payload['slug'] ?? null;
        $wrestler->ring_name = $payload['ring_name'] ?? null;
        $wrestler->active = $payload['active'] ?? null;
        $wrestler->date_of_birth = $payload['date_of_birth'] ?? null;
        $wrestler->date_of_death = $payload['date_of_death'] ?? null;

        $wrestler->save();

        return $wrestler;
    }

    public function createManyFromCSV(Reader $rows)
    {
        $colMap = [
            'forename',
            'middle_names',
            'surname',
            'ring_name',
            'biography',
            'slug',
            'active',
            'date_of_birth',
            'date_of_death',
            'wwe',
            'aew',
        ];

        $headerRow = 0;
        $slugCol = 5;

        foreach ($rows as $index => $row) {
            if ($index === $headerRow) {
                continue;
            }

            if ($this->getBySlug($row[$slugCol])) {
                continue;
            }

            $wrestlerPayload = [];
            foreach ($row as $index => $data) {
                if (is_numeric($data)) {
                    $wrestlerPayload[$colMap[$index]] = (bool) $data;
                } else {
                    $wrestlerPayload[$colMap[$index]] = $data;
                }
            }

            $wrestler = $this->create($wrestlerPayload);
            if ($wrestlerPayload['wwe']) {
                $promotion = app(PromotionService::class)->getByAlias('WWE');

                $this->attachWrestlerToPromotion($wrestler, $promotion);
            }
        }
    }

    public function attachWrestlerToPromotion(Wrestler $wrestler, Promotion $promotion): WrestlersToPromotions
    {
        $wtp = new WrestlersToPromotions();

        $wtp->uuid = Uuid::uuid4()->toString();
        $wtp->wrestler_id = $wrestler->id;
        $wtp->promotion_id = $promotion->id;

        $wtp->save();

        return $wtp;
    }
}
