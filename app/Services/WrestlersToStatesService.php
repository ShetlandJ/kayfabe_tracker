<?php

namespace App\Services;

use Carbon\Carbon;
use App\Models\Wrestler;
use App\Models\Promotion;
use App\Models\WrestlersToStates;
use Ramsey\Uuid\Uuid;

class WrestlersToStatesService
{
    public function getByUuid(string $uuid): WrestlersToStates
    {
        return WrestlersToStates::where('uuid', $uuid)->first();
    }

    public function createWrestlerState(array $payload): WrestlersToStates
    {
        $wts = new WrestlersToStates();

        $wts->uuid = Uuid::uuid4()->toString();
        $wts->wrestler_id = $payload['wrestler_id'];
        $wts->state_id = $payload['state_id'];
        $wts->title = $payload['title'];
        $wts->description = $payload['description'];
        $wts->start = $this->formatDate($payload['startDate']);

        $wts->save();

        return $wts;
    }

    public function updateWrestlerState(array $payload, WrestlersToStates $wts): WrestlersToStates
    {
        $wts->wrestler_id = $payload['wrestler_id'];
        $wts->state_id = $payload['state_id'];
        $wts->title = $payload['title'];
        $wts->description = $payload['description'];
        $wts->start = $this->formatDate($payload['startDate']);

        $wts->save();

        return $wts;
    }

    protected function formatDate($string, $format = 'Y-m-d\TH:i:s.u')
    {
        if (empty($string)) {
            return null;
        }

        return date($format, strtotime($string));
    }
}
