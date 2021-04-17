<?php

namespace App\Http\Controllers\Api\Wrestlers;

use League\Csv\Reader;
use Illuminate\Http\Request;
use App\Http\Resources\WrestlerResource;

class BulkUploadController extends WrestlersController
{
    public function __invoke(Request $request)
    {
        $content = $request->all();
        $rows = Reader::createFromPath($content['file'], 'r');

        $this->wrestlerService->createManyFromCSV($rows);

        return $this->toJson([]);
    }
}
