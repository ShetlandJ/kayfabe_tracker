<?php

namespace App\Services;

use App\Models\Org\User;
use App\Models\Wrestler;
use App\Models\Auth\Ability;
use App\Services\UsersService;
use App\Helpers\Date\DateHelper;
use App\Models\OneToOne\Document;
use App\Models\OneToOne\OneToOne;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use App\Helpers\Pagination\Pagination;
use App\Bundles\Report\FilterAccessTrait;
use App\Helpers\Pagination\PaginatedService;
use App\Models\Promotion;
use Illuminate\Validation\UnauthorizedException;
use App\Repositories\OneToOne\DocumentRepository;
use App\Repositories\OneToOne\OneToOneRepository;

class PromotionService
{
    public function getAll()
    {
        return Promotion::all();
    }

    public function getByAlias(string $alias)
    {
        return Promotion::where('alias', $alias)->first();
    }
}
