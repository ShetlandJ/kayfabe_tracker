<?php

namespace App\Models;

use App\Models\WrestlersToPromotions;
use Illuminate\Database\Eloquent\Model;

class Wrestler extends Model
{
    protected $table = 'wrestlers';

    public function states()
    {
        return $this->hasMany(WrestlersToStates::class, 'wrestler_id')->orderBy('start');
    }

    public function promotions()
    {
        return $this->hasMany(WrestlersToPromotions::class, 'wrestler_id');
    }

    public function getMostRecentStateAttribute()
    {
        $sortedStates = $this->states->sortBy(function ($state) {
            return $state->start;
        })->reverse();

        if (0 === $sortedStates->count()) {
            return [];
        }

        return $sortedStates->first();
    }
}
