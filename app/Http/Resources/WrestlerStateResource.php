<?php

namespace App\Http\Resources;

use Illuminate\Database\Eloquent\Model;

class WrestlerStateResource extends BaseResource
{
    public function buildResource(Model $wrestlerToState, bool $withExtras = false): array
    {
        $state = $wrestlerToState->state;

        $payload = [
            'id' => $wrestlerToState->uuid,
            'title' => $wrestlerToState->title,
            'description' => $wrestlerToState->description,
            'start' => $wrestlerToState->start,
            'end' => $wrestlerToState->end,
            'state_id' => null,
            'name' => null,
            'colour' => null,

        ];

        if ($state) {
            $payload['state_id'] =$wrestlerToState->state->uuid;
            $payload['name'] = $wrestlerToState->state->name;
            $payload['colour'] = $wrestlerToState->state->colour;

        }

        return $payload;
    }
}
