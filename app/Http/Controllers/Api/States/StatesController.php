<?php

namespace App\Http\Controllers\Api\States;

use App\Services\StateService;
use App\Http\Controllers\Controller;

abstract class StatesController extends Controller
{
    public function __construct(
        StateService $statesService
    ) {
        $this->statesService = $statesService;
    }
}
