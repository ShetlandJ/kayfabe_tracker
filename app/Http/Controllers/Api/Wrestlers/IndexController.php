<?php

namespace App\Http\Controllers\Api\Wrestlers;

use App\Http\Resources\WrestlerResource;
use App\Models\Wrestler;
use Psr\Http\Message\ServerRequestInterface;

class IndexController extends WrestlersController
{
    public function __invoke(ServerRequestInterface $request)
    {
        $wrestlers = $this->wrestlerService->getAllWrestlers();

        $payload = [];

        foreach ($wrestlers as $wrestler) {
            $payload[] = WrestlerResource::create($wrestler);
        }

        dd($payload);
    }
}
