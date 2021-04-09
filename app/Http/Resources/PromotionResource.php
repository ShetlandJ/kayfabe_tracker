<?php

namespace App\Http\Resources;

use Illuminate\Database\Eloquent\Model;

class PromotionResource extends BaseResource
{
    public function buildResource(Model $promotion): array
    {
        return [
            'id' => $promotion->uuid,
            'name' => $promotion->name,
            'description' => $promotion->description,
            'image_url' => $promotion->image_url,
            'alias' => $promotion->alias,
            'founded' => $promotion->founded,
            'active' => $promotion->active,
        ];
    }
}
