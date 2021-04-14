<?php

namespace App\Http\Controllers\Api\Wrestlers;

use App\Http\Resources\WrestlerResource;

class IndexController extends WrestlersController
{
    public function __invoke()
    {
        $wrestlers = $this->wrestlerService->getAllWrestlers();

        $payload = [];

        foreach ($wrestlers as $wrestler) {
            $payload[] = WrestlerResource::create($wrestler);
        }

        return $this->toJson(['data' => $payload]);
    }
}
