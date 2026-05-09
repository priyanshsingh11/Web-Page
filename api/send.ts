import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = request.body;

    if (!name || !email || !message) {
      return response.status(400).json({ error: 'Missing required fields' });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // You can update this once you verify a domain
      to: ['priyanshsingh855@gmail.com'], // The email address you want to receive messages at
      subject: `New Contact Message from ${name}`,
      replyTo: email,
      html: `
        <h2>New Message from Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return response.status(400).json({ error });
    }

    return response.status(200).json({ data });
  } catch (error) {
    return response.status(500).json({ error: 'Internal server error' });
  }
}
