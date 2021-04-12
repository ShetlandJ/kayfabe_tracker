<?php

namespace App\Http\Controllers\Api\Promotions;

use App\Http\Resources\PromotionResource;
use App\Http\Resources\WrestlerFullResource;
use App\Http\Resources\WrestlerResource;

class PromotionWrestlerController extends PromotionsController
{
    public function __invoke(string $alias, string $slug)
    {
        $lowercaseAlias = strtolower($alias);
        $promotion = $this->promotionService->getByAlias($lowercaseAlias);
        $wrestler = $this->wrestlerService->getBySlugAndPromotion($slug, $promotion);

        $payload = [];

        $payload['promotion'] = PromotionResource::create($promotion);

        $payload['wrestler'] = WrestlerFullResource::create($wrestler);

        return $this->toJson($payload);
    }
}
