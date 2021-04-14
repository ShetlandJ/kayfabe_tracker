<?php

namespace App\Http\Controllers\Api\States;

use App\Http\Resources\StateResource;
use App\Http\Resources\WrestlerResource;

class IndexController extends StatesController
{
    public function __invoke()
    {
        $states = $this->statesService->getAll();

        $payload = [];

        foreach ($states as $state) {
            $payload[] = StateResource::create($state);
        }

        return $this->toJson(["data" => $payload]);
    }
}
