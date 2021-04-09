<?php

namespace App\Http\Controllers\Api\Promotions;

use App\Http\Resources\PromotionResource;

class IndexController extends PromotionsController
{
    public function __invoke()
    {
        $promotions = $this->promotionService->getAll();

        $payload = [];

        foreach ($promotions as $promotion) {
            $payload[] = PromotionResource::create($promotion);
        }

        return $this->toJson($payload);
    }
}
