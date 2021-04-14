<?php

namespace App\Http\Resources;

use Illuminate\Database\Eloquent\Model;

class StateResource extends BaseResource
{
    public function buildResource(Model $state, bool $withExtras = false): array
    {
        $payload = [
            'id' => $state->uuid,
            'name' => $state->name,
            'colour' => $state->colour,
        ];

        return $payload;
    }
}
