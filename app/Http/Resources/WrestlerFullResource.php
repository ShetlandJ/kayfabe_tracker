<?php

namespace App\Http\Resources;

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
        ];

        if ($wrestler->states) {
            foreach ($wrestler->states as $state) {
                $payload['states'][] = WrestlerStateResource::create($state);
            }
        }

        return $payload;
    }
}
