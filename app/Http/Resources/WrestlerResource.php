<?php

namespace App\Http\Resources;

use Illuminate\Database\Eloquent\Model;

class WrestlerResource extends BaseResource
{
    public function buildResource(Model $wrestler): array
    {
        return [
            'id' => $wrestler->uuid,
            'forename' => $wrestler->forename,
            'middle_names' => $wrestler->middle_names,
            'surname' => $wrestler->surname,
            'ring_name' => $wrestler->ring_name,
            'slug' => $wrestler->slug,
            'active' => $wrestler->active,
            'date_of_birth' => $wrestler->date_of_birth,
            'date_of_death' => $wrestler->date_of_death,
        ];
    }
}
