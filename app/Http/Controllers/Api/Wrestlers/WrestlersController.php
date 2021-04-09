<?php

namespace App\Http\Controllers\Api\Wrestlers;

use App\Services\WrestlerService;
use App\Http\Controllers\Controller;

abstract class WrestlersController extends Controller
{
    public function __construct(
        WrestlerService $wrestlerService
    ) {
        $this->wrestlerService = $wrestlerService;
    }
}
