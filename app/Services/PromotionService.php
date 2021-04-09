<?php

namespace App\Services;

use App\Models\Promotion;

class PromotionService
{
    public function getAll()
    {
        return Promotion::all();
    }

    public function getByAlias(string $alias)
    {
        return Promotion::where('alias', $alias)->first();
    }
}
