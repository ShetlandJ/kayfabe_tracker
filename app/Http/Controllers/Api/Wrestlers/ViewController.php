<?php

namespace App\Http\Controllers\Api\Wrestlers;

use App\Http\Resources\WrestlerFullResource;

class ViewController extends WrestlersController
{
    public function __invoke(string $slug)
    {
        $wrestler = $this->wrestlerService->getBySlug($slug);

        $payload = WrestlerFullResource::create($wrestler);

        return $this->toJson(['data' => $payload]);
    }
}
