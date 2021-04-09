<?php

namespace App\Http\Controllers\Api\Promotions;

use App\Http\Resources\PromotionResource;
use App\Http\Resources\WrestlerFullResource;
use App\Http\Resources\WrestlerResource;

class PromotionWrestlersController extends PromotionsController
{
    public function __invoke(string $alias)
    {
        $lowercaseAlias = strtolower($alias);
        $promotion = $this->promotionService->getByAlias($lowercaseAlias);

        $payload = [];

        $payload['promotion'] = PromotionResource::create($promotion);

        foreach ($promotion->wrestlers as $wrestler) {
            $payload['wrestlers'][] = WrestlerResource::create($wrestler);
        }

        dd($payload);

        return $this->toJson($payload);
    }
}
