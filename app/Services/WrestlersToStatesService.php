<?php

namespace App\Services;

use Exception;
use Carbon\Carbon;
use Ramsey\Uuid\Uuid;
use App\Models\WrestlersToStates;
use Illuminate\Database\Eloquent\Collection;

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

    public function getBreakdown(Collection $wrestlerStates): array
    {
        $payload = [];

        $totalDays = 0;
        $firstStateEvent = Carbon::parse($wrestlerStates->first()->start);
        $now = Carbon::now();
        $totalDays = $firstStateEvent->diffInDays($now);

        for ($i = 0; $i < $wrestlerStates->count(); $i++) {
            $currentState = $wrestlerStates[$i];
            $nextState = isset($wrestlerStates[$i + 1]) ? $wrestlerStates[$i + 1] : null;

            $start = Carbon::parse($currentState->start);
            $end = Carbon::now();

            if ($nextState) {
                $end = Carbon::parse($nextState->start);
            }

            $days = $start->diffInDays($end);

            $payload[] = [
                "days" => $days,
                "percent" => $this->percent($days, $totalDays),
                "colour" => $currentState->state->colour,
                "type" => $currentState->state->name,
            ];
        }

        return $payload;
    }

    public function delete(WrestlersToStates $wts): bool
    {
        try {
            $wts->delete();
            return true;
        } catch (Exception $e) {
            throw $e;
            return false;
        }

        return false;
    }

    protected function formatDate($string, $format = 'Y-m-d\TH:i:s.u')
    {
        if (empty($string)) {
            return null;
        }

        return date($format, strtotime($string));
    }

    private function percent(int $dividend, int $divisor)
    {
        return $divisor ? (float) round(($dividend / $divisor) * 100, 1) : null;
    }
}
