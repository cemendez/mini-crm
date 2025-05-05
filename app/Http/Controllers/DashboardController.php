<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\Interaction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $contactCount = Contact::count();
        $recentInteractions = Interaction::with('contact')
            ->latest()
            ->take(5)
            ->get();

        return Inertia::render('Dashboard', [
            'contactCount' => $contactCount,
            'recentInteractions' => $recentInteractions
        ]);
    }
}
