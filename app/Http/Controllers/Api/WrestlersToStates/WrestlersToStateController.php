<?php

namespace App\Http\Controllers\Api\WrestlersToStates;

use App\Services\WrestlerService;
use App\Http\Controllers\Controller;
use App\Services\StateService;
use App\Services\WrestlersToStatesService;

abstract class WrestlersToStateController extends Controller
{
    public function __construct(
        WrestlerService $wrestlerService,
        WrestlersToStatesService $wtsService,
        StateService $stateService
    ) {
        $this->wrestlerService = $wrestlerService;
        $this->wtsService = $wtsService;
        $this->stateService = $stateService;
    }
}
