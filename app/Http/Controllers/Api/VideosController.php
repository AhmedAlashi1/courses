<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\VideosResource;
use App\Models\Videos;
use App\Models\WatchingVideoUser;
use Illuminate\Http\Request;

class VideosController extends Controller
{
    public function show($id){
        $data = Videos::where('id', $id)->with('watching',function ($q){
            $q->where('user_id', auth()->id());
        })->first();
        $user = auth()->user();

        if (!$data) {
            return sendError('video not found');
        }
        if (!$data->watching){
            WatchingVideoUser::create(
                [
                    'video_id' => $data->id,
                    'user_id' => $user->id
                ]
            );
        }
        $data->refresh();
        return sendResponse(new VideosResource($data));
    }
}
