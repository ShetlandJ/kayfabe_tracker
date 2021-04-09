<?php

namespace App\Http\Resources;

use Illuminate\Database\Eloquent\Model;

class PromotionResource extends BaseResource
{
    public function buildResource(Model $promotion, bool $withWrestlers = false): array
    {
        $payload = [
            'id' => $promotion->uuid,
            'name' => $promotion->name,
            'description' => $promotion->description,
            'image_url' => $promotion->image_url,
            'alias' => $promotion->alias,
            'founded' => $promotion->founded,
            'active' => $promotion->active,
        ];

        if ($withWrestlers) {
            foreach ($promotion->wrestlers as $wrestler) {
                $payload['wrestlers'][] = WrestlerResource::create($wrestler);
            }
        }

        return $payload;
    }
}
