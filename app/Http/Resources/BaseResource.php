<?php

namespace App\Http\Resources;

use Illuminate\Database\Eloquent\Model;

abstract class BaseResource
{
    abstract public function buildResource(Model $model, bool $withExtras = false);

    public static function create(Model $model, bool $withExtras = false)
    {
        $instance = new static();

        return $instance->buildResource($model, $withExtras);
    }
}
