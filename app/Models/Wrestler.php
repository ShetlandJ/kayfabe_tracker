<?php

namespace App\Models;

use App\Models\State;
use App\Models\WrestlersToStates;
use Illuminate\Database\Eloquent\Model;

class Wrestler extends Model
{
    protected $table = 'wrestlers';

    public function states()
    {
        return $this->hasMany(WrestlersToStates::class, 'wrestler_id', 'id');
    }

    public function getMostRecentStateAttribute()
    {
        $sortedStates = $this->states->sortBy(function ($state) {
            return $state->start;
        });

        return $sortedStates->first();
    }
}
