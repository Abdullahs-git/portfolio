import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: 'Invalid input', issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;

    // Send email via Resend if API key is configured
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey && resendKey !== 're_xxxxxxxxx') {
      const resend = new Resend(resendKey);
      const { error } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>',
        to: [process.env.RESEND_TO_EMAIL || 'abdullahslinkedin@gmail.com'],
        replyTo: email,
        subject: `Portfolio Inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: monospace; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #f5f5f0; padding: 32px; border: 1px solid #262626;">
            <p style="font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: #737373; margin-bottom: 24px;">[PORTFOLIO TRANSMISSION]</p>
            <p style="margin: 0 0 8px;"><strong style="color: #a3a3a3;">FROM:</strong> ${name}</p>
            <p style="margin: 0 0 8px;"><strong style="color: #a3a3a3;">EMAIL:</strong> ${email}</p>
            <hr style="border-color: #262626; margin: 24px 0;" />
            <p style="white-space: pre-wrap; color: #d4d4d4; line-height: 1.6;">${message}</p>
          </div>
        `,
      });

      if (error) {
        console.error('[contact] Resend error:', error);
        return NextResponse.json(
          { success: false, error: 'Email delivery failed. Please use direct email.' },
          { status: 500 }
        );
      }
    } else {
      // Demo mode — log and succeed without sending
      console.log('[contact] Demo mode — no valid RESEND_API_KEY set:', { name, email, message });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[contact] Unexpected error:', error);
    return NextResponse.json(
      { success: false, error: 'Server error. Please try again.' },
      { status: 500 }
    );
  }
}
