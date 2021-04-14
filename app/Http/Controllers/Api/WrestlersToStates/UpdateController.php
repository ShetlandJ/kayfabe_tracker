<?php

namespace App\Http\Controllers\Api\WrestlersToStates;

use Illuminate\Http\Request;

class UpdateController extends WrestlersToStateController
{
    public function __invoke(Request $request, $wrestlerUuid)
    {
        $content = $request->input();

        $wrestler = $this->wrestlerService->getByUuid($wrestlerUuid);
        $wrestlersToState = $this->wtsService->getByUuid($content['state_id']);
        $state = $this->stateService->getByUuid($content['status']);

        $content['wrestler_id'] = $wrestler->id;
        $content['state_id'] = $state->id;

        $this->wtsService->updateWrestlerState($content, $wrestlersToState);

        return $this->toJson(['data' => null]);
    }
}
