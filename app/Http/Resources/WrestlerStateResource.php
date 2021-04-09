<?php

namespace App\Http\Resources;

use Illuminate\Database\Eloquent\Model;

class WrestlerStateResource extends BaseResource
{
    public function buildResource(Model $wrestlerToState, bool $withExtras = false): array
    {
        $payload = [
            'id' => $wrestlerToState->uuid,
            'title' => $wrestlerToState->title,
            'description' => $wrestlerToState->description,
            'start' => $wrestlerToState->start,
            'end' => $wrestlerToState->end,
            'state_id' => $wrestlerToState->state->uuid,
            'name' => $wrestlerToState->state->name,
            'colour' => $wrestlerToState->state->colour,
        ];

        return $payload;
    }
}
