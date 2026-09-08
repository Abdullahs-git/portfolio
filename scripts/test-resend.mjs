// Quick test script for Resend API
// To run: node scripts/test-resend.mjs
import { Resend } from 'resend';

// Replace 're_xxxxxxxxx' with your real API key or set RESEND_API_KEY environment variable
const apiKey = process.env.RESEND_API_KEY || 're_xxxxxxxxx';

if (apiKey === 're_xxxxxxxxx') {
  console.error('\n⚠️  Please replace "re_xxxxxxxxx" with your real Resend API key or set RESEND_API_KEY in .env.local\n');
  process.exit(1);
}

const resend = new Resend(apiKey);

async function sendTestEmail() {
  console.log('Sending test email via Resend...');
  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'abdullahslinkedin@gmail.com',
    subject: 'Hello World',
    html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
  });

  if (error) {
    console.error('❌ Failed to send email:', error);
  } else {
    console.log('✅ Email sent successfully! Data:', data);
  }
}

sendTestEmail();
