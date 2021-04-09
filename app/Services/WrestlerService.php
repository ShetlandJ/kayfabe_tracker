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
}
