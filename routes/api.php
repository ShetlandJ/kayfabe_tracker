<?php


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::name('api.')->namespace('Api')->group(function () {
    // Unprotected routes
    Route::group(['middleware' => 'guest:api'], function () {
        Route::namespace('Auth')->group(function () {
            Route::post('login', 'LoginController')->name('login');
            Route::post('register', 'RegisterController')->name('register');

            // Password Reset Routes...
            Route::post('password/email', 'ForgotPasswordController@sendResetLinkEmail');
            Route::post('password/reset', 'ResetPasswordController@reset');
        });
    });

    Route::namespace('Promotions')->prefix('promotions')->group(function () {
        Route::get('/', 'IndexController')->name('promotions.index');
        Route::get('/{alias}/wrestlers', 'PromotionWrestlersController')->name('promotions.wrestlers.index');
        Route::get('/{alias}/{slug}', 'PromotionWrestlerController')->name('promotions.wrestlers.index');
    });

    Route::namespace('Wrestlers')->prefix('wrestlers')->group(function () {
        Route::get('/', 'IndexController')->name('wrestlers.index');
        Route::get('/slug/{slug}', 'ViewController')->name('wrestlers.view');
    });

    // Protected routes
    Route::middleware('auth:api')->group(function () {
        Route::namespace('Auth')->group(function () {
            Route::get('me', 'MeController@me')->name('me');
            Route::post('logout', 'LogoutController@logout')->name('logout');
        });
    });
});
