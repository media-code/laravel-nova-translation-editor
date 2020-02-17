<?php
/**
 * Created by PhpStorm.
 * User: mediacode
 * Date: 2020-02-17
 * Time: 13:59
 */

namespace Eboye\LaravelNovaTranslationEditor\Http\Controllers;

use Illuminate\Support\Facades\Lang;
use Illuminate\Http\Request;
use Spatie\TranslationLoader\LanguageLine;

class TranslationController
{
    public function getTranslatables()
    {
        $translatables = config('trans_editor.translatables');
        $response      = [];
        foreach ($translatables as $translatable) {
            $response[$translatable] = Lang::get($translatable);
        }
        return $response;
    }

    public function getLocales()
    {
        return config('trans_editor.supported-locales');
    }

    public function save(Request $request)
    {
        if ($request->has(['group', 'key', 'text', 'locale'])) {
            $line = LanguageLine::where('group', $request->get('group'))->where('key', $request->get('key'))->firstOrCreate(
                [
                    'group' => $request->get('group'),
                    'key'   => $request->get('key'),
                ],
                [
                    'group' => $request->get('group'),
                    'key'   => $request->get('key'),
                    'text'  => [
                        $request->get('locale') => $request->get('text')
                    ],
                ]
            );
            $translationContent = $line->text;
            $translationContent[$request->get('locale')] = $request->get('text');
            $line->text = $translationContent;
            $line->save();
        } else {
            return response(null, 400);
        }
    }

}