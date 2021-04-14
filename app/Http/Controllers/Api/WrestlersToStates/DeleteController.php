<?php

namespace App\Http\Controllers\Api\WrestlersToStates;

use Illuminate\Http\Request;

class DeleteController extends WrestlersToStateController
{
    public function __invoke(Request $request, string $stateId)
    {
        $wrestlersToState = $this->wtsService->getByUuid($stateId);
        $this->wtsService->delete($wrestlersToState);

        return $this->toJson(['data' => null]);
    }
}
