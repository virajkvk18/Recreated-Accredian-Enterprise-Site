const leads = [];

export async function POST(request) {
  const body = await request.json();
  if (!body.name || !body.email || !body.company) {
    return Response.json({ error: 'Name, work email and company are required.' }, { status: 400 });
  }
  const lead = { id: crypto.randomUUID(), ...body, createdAt: new Date().toISOString() };
  leads.push(lead);
  return Response.json({ message: 'Thank you! Our advisor will contact you shortly.', lead });
}

export async function GET() { return Response.json({ leads }); }
