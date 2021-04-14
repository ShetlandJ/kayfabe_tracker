<?php

namespace App\Services;

use App\Models\State;

class StateService
{
    public function getAll()
    {
        return State::all();
    }

    public function getByUuid(string $uuid): State
    {
        return State::where('uuid', $uuid)->first();
    }
}
