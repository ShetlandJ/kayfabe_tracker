<?php

namespace App\Http\Controllers\Api\Promotions;

use App\Services\PromotionService;
use App\Http\Controllers\Controller;

abstract class PromotionsController extends Controller
{
    public function __construct(
        PromotionService $promotionService
    ) {
        $this->promotionService = $promotionService;
    }
}
