<?php

namespace App\Models;

use App\Traits\VideoFilters;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Videos extends Model
{
    use HasFactory;
    use VideoFilters;

    protected $table = 'videos';

    protected $fillable = [ 'courses_id','section_id','title_ar', 'title_en','description_ar', 'description_en',
        'image', 'path','type','size','duration','status'];

    const PAGINATE_NUMBER = 40;

    public function courses()
    {
        return $this->belongsTo(Courses::class);
    }
    public function section()
    {
        return $this->belongsTo(Sections::class);
    }
    public function watching()
    {
        return $this->hasOne(WatchingVideoUser::class, 'video_id', 'id');
    }


}
