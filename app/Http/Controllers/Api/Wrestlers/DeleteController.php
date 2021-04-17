<?php

namespace App\Http\Controllers\Api\Wrestlers;

use Illuminate\Http\Request;

class DeleteController extends WrestlersController
{
    public function __invoke(Request $request, string $wrestlerId)
    {
        $wrestlersToState = $this->wrestlerService->getByUuid($wrestlerId);
        $this->wrestlerService->delete($wrestlersToState);

        return $this->toJson(['data' => null]);
    }
}
