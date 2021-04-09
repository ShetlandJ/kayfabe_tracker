<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Wrestler extends Model
{
    protected $table = 'wrestlers';

    protected $casts = [
        'active' => 'boolean'
    ];
}
