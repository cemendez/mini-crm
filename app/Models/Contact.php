<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = [
        'name',
        'company',
        'email',
        'phone',
        'address',
        'notes'
    ];

    public function interactions()
    {
        return $this->hasMany(Interaction::class);
    }
}
