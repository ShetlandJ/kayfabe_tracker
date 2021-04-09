<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WrestlersToPromotions extends Model
{
    protected $table = 'wrestlers_to_promotions';

    protected $casts = [
        'wrestler_id' => 'integer',
        'promotion_id' => 'integer',
    ];
}
