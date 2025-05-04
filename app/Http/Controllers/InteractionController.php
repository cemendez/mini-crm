<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\Interaction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InteractionController extends Controller
{
    public function index(Contact $contact)
    {
        $interactions = $contact->interactions()->latest()->get();

        return Inertia::render('Interactions/Index', [
            'contact' => $contact,
            'interactions' => $interactions
        ]);
    }

    public function store(Request $request, Contact $contact)
    {
        $validated = $request->validate([
            'type' => 'required|string|max:255',
            'date' => 'required|date',
            'description' => 'required|string',
        ]);

        $contact->interactions()->create($validated);

        return back()->with('success', 'Interacción registrada correctamente');
    }

    public function update(Request $request, Interaction $interaction)
    {
        $validated = $request->validate([
            'type' => 'required|string|max:255',
            'date' => 'required|date',
            'description' => 'required|string',
        ]);

        $interaction->update($validated);

        return back()->with('success', 'Interacción actualizada correctamente');
    }

    public function destroy(Interaction $interaction)
    {
        $interaction->delete();

        return back()->with('success', 'Interacción eliminada correctamente');
    }
}
