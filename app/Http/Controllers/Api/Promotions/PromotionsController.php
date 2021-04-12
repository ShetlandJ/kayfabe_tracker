<?php

namespace App\Http\Controllers\Api\Promotions;

use App\Services\PromotionService;
use App\Http\Controllers\Controller;
use App\Services\WrestlerService;

abstract class PromotionsController extends Controller
{
    public function __construct(
        PromotionService $promotionService,
        WrestlerService $wrestlerService
    ) {
        $this->promotionService = $promotionService;
        $this->wrestlerService = $wrestlerService;
    }
}
