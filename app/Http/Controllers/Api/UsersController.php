<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Traits\ImageTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;

class UsersController extends Controller
{
    use ImageTrait;
    public function show(){

        $user =Auth::user();

        return  sendResponse(new UserResource($user));

    }
    public function update(Request $request){

        $user = Auth::user();
        $data = $request->all();
        if ($request->has('image')) {
            $image_path = $this->uploadImage('admin', $request->image);
            $data['image'] = $image_path;
        }
        $user->update(array_filter($data));

        return  sendResponse(new UserResource($user));
    }
}
