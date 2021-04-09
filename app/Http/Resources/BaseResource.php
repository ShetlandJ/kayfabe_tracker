<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Support\Facades\URL;
use Illuminate\Database\Eloquent\Model;

abstract class BaseResource
{
    abstract public function buildResource(Model $model);

    public static function create(Model $model)
    {
        $instance = new static();

        return $instance->buildResource($model);
    }
}
