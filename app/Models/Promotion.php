<?php

namespace App\Models;

use App\Models\Wrestler;
use App\Models\WrestlersToPromotions;
use Illuminate\Database\Eloquent\Model;

class Promotion extends Model
{
    protected $table = 'wrestling_promotions';

    protected $casts = [
        "active" => 'boolean',
    ];

    public function wrestlers()
    {
        return $this->hasManyThrough(
            Wrestler::class,
            WrestlersToPromotions::class,
            'promotion_id',
            'id',
            'id',
            'wrestler_id'
        );
    }
}

