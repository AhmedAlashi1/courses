<?php

namespace App\Http\Controllers\Dashboard;

use App\DataTables\BuyCourseUserDataTable;
use App\Http\Controllers\Controller;
use App\Models\BuyCourseUser;
use App\Models\Courses;
use Illuminate\Http\Request;

class BuyCourseUserController extends Controller
{
    public function index(BuyCourseUserDataTable $dataTable,$id)
    {

        return $dataTable->render('dashboard.buy_course_user.index',compact('id'));
    }
    public function create($id){

        $courses = Courses::with('BuyCourse')

            ->where('status','1')
            ->whereDoesntHave('BuyCourse', function ($query) use ($id) {
                    $query->where('user_id', $id);
                })
            ->orderBy('id','desc')->get();


//        return $courses;
        return view('dashboard.buy_course_user.create',compact('courses','id'));
    }
    public function store(Request $request){
        $courses = Courses::find($request->course_id);
        $courses->BuyCourse()->create([
            'user_id' => $request->user_id,
            'status' => '1',
        ]);
        return redirect()->route('buy_course_user.index',$request->user_id);
    }

    public function destroy($id)
    {

        $buy_course_user = BuyCourseUser::findorFail($id);

        $buy_course_user->delete();
        return response()->json('success');
    }

    public function updateStatus($id)
    {
        try {
            $buy_course_user = BuyCourseUser::findorFail($id);


            $buy_course_user->update(['status' => !$buy_course_user->status]);
            return response()->json('success');
        } catch (\Exception $ex){
            return response()->json(__('messages.There was an error try again'), 400);
        }
    }


}
