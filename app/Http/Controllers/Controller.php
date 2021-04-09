<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function toJson($message, $status = Response::HTTP_OK, array $headers = [], $disable_numeric_check = false)
    {
        return $this->toJsonResponse($message, $status, $headers, $disable_numeric_check);
    }

    protected function toJsonResponse($message, $status = Response::HTTP_OK, array $headers = [], $disable_numeric_check = false)
    {
        $options = $disable_numeric_check ? JSON_PRETTY_PRINT : JSON_PRETTY_PRINT | JSON_NUMERIC_CHECK;

        return response()->json($message, $status, $headers, $options);
    }

}
