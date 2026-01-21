import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body=await request.json();
    const{email,subject,message}=body;

    if(!email || !subject || !message){
        return Response.json(
            {error:'Tous les champs sont requis'},
            {status:400}
        );
    }
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['rmamytahirisoa@gmail.com'],
      replyTo:email,
      subject:`Nouveau message: ${subject}`,
      html: `
                <h1>${subject}</h1>
                <p><strong>De:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}