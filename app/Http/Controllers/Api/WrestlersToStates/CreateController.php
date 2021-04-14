<?php

namespace App\Http\Controllers\Api\WrestlersToStates;

use Illuminate\Http\Request;

class CreateController extends WrestlersToStateController
{
    public function __invoke(Request $request, $wrestlerUuid)
    {
        $content = $request->input();

        $wrestler = $this->wrestlerService->getByUuid($wrestlerUuid);
        $state = $this->stateService->getByUuid($content['status']);

        $content['wrestler_id'] = $wrestler->id;
        $content['state_id'] = $state->id;

        $this->wtsService->createWrestlerState($content);

        return $this->toJson(['data' => null]);
    }
}
