<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Interaction extends Model
{
    protected $fillable = [
        'contact_id',
        'type',
        'date',
        'description'
    ];

    public function contact()
    {
        return $this->belongsTo(Contact::class);
    }
}
