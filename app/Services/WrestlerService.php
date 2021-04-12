<?php

namespace App\Services;

use App\Models\Promotion;
use App\Models\Wrestler;

class WrestlerService
{
    public function getAllWrestlers()
    {
        return Wrestler::all();
    }

    public function getBySlug(string $slug): Wrestler
    {
        return Wrestler::where('slug', $slug)->first();
    }

    public function getBySlugAndPromotion(string $slug, Promotion $promotion): Wrestler
    {
        return Wrestler::where('slug', $slug)
            ->join('wrestlers_to_promotions', 'wrestlers_to_promotions.wrestler_id', 'wrestlers.id')
            ->join('wrestling_promotions', 'wrestling_promotions.id', 'wrestlers_to_promotions.promotion_id')
            ->where('wrestling_promotions.id', $promotion->id)
            ->first();
    }
}
