<?php

namespace App\Services;

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
}
