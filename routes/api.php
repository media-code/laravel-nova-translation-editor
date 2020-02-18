<?php

/*
|--------------------------------------------------------------------------
| Tool API Routes
|--------------------------------------------------------------------------
|
| Here is where you may register API routes for your tool. These routes
| are loaded by the ServiceProvider of your tool. They are protected
| by your tool's "Authorize" middleware by default. Now, go build!
|
*/

Route::get('/get-translatables', 'TranslationController@getTranslatables');

Route::get('/get-locales', 'TranslationController@getLocales');

Route::post('/save', 'TranslationController@save');
