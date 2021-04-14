<?php

namespace App\Services;

use App\Models\State;
use App\Models\Wrestler;
use App\Models\Promotion;

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
