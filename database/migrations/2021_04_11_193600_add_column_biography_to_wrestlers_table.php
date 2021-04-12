<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnBiographyToWrestlersTable extends Migration
{
    const TABLE = 'wrestlers';
    public function up()
    {
        Schema::table(self::TABLE, function (Blueprint $table) {
            $table->text('biography')->after('ring_name')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table(self::TABLE, function (Blueprint $table) {
            $table->dropColumn('biography');
        });
    }
}
