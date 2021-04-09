<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Promotion extends Model
{
    protected $table = 'wrestling_promotions';

    protected $casts = [
        "active" => 'boolean',
    ];
}

