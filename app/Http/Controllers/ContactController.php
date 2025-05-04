<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index(Request $request)
    {
        $query = Contact::query();

        if ($request->has('search')) {
            $search = $request->input('search');
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('email', 'like', "%{$search}%")
                    ->orWhere('company', 'like', "%{$search}%");
            });
        }

        $contacts = $query->latest()->paginate(10);

        return Inertia::render('Contacts/Index', [
            'contacts' => $contacts,
            'filters' => $request->only('search')
        ]);
    }

    public function create()
    {
        return Inertia::render('Contacts/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'company' => 'nullable|string|max:255',
            'email' => 'nullable|email|max:255',
            'phone' => 'nullable|string|max:20',
            'address' => 'nullable|string',
            'notes' => 'nullable|string',
        ]);

        Contact::create($validated);

        return redirect()->route('contacts.index')->with('success', 'Contacto creado correctamente');
    }

    public function show(Contact $contact)
    {
        $contact->load('interactions');

        return Inertia::render('Contacts/Show', [
            'contact' => $contact
        ]);
    }

    public function edit(Contact $contact)
    {
        return Inertia::render('Contacts/Edit', [
            'contact' => $contact
        ]);
    }

    public function update(Request $request, Contact $contact)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'company' => 'nullable|string|max:255',
            'email' => 'nullable|email|max:255',
            'phone' => 'nullable|string|max:20',
            'address' => 'nullable|string',
            'notes' => 'nullable|string',
        ]);

        $contact->update($validated);

        return redirect()->route('contacts.index')->with('success', 'Contacto actualizado correctamente');
    }

    public function destroy(Contact $contact)
    {
        $contact->delete();

        return redirect()->route('contacts.index')->with('success', 'Contacto eliminado correctamente');
    }
}
