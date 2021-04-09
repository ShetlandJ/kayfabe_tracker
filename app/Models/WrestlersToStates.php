<?php

namespace App\Models;

use App\Models\State;
use Illuminate\Database\Eloquent\Model;

class WrestlersToStates extends Model
{
    protected $table = 'wrestlers_to_states';

    protected $casts = [
        'wrestler_id' => 'integer',
        'state_id' => 'integer',
    ];

    public function state()
    {
        return $this->hasOne(State::class, 'id', 'state_id');
    }
}
