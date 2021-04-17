<?php

namespace App\Http\Resources;

use App\Services\WrestlersToStatesService;
use Illuminate\Database\Eloquent\Model;

class WrestlerFullResource extends BaseResource
{
    public function buildResource(Model $wrestler, bool $withExtras = false): array
    {
        $payload = [
            'id' => $wrestler->uuid,
            'forename' => $wrestler->forename,
            'middle_names' => $wrestler->middle_names,
            'surname' => $wrestler->surname,
            'ring_name' => $wrestler->ring_name,
            'biography' => $wrestler->biography,
            'slug' => $wrestler->slug,
            'active' => $wrestler->active,
            'date_of_birth' => $wrestler->date_of_birth,
            'date_of_death' => $wrestler->date_of_death,
            'breakdown' => [],
            'states' => []
        ];

        if ($wrestler->states->count() > 0) {
            foreach ($wrestler->states as $state) {
                $payload['states'][] = WrestlerStateResource::create($state);
            }

            $payload['breakdown'] = app(WrestlersToStatesService::class)->getBreakdown($wrestler->states);
            $payload['breakdown_simplified'] = app(WrestlersToStatesService::class)->getBreakdown($wrestler->states, true);
        }

        return $payload;
    }
}
