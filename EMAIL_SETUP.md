# Email Setup Guide for Contact Form using Resend

## Resend Configuration Steps

### 1. Create Resend Account
- Go to https://resend.com
- Sign up for a free account (generous free tier available)
- Verify your account

### 2. Get API Key
- In your Resend dashboard, go to **API Keys**
- Click **Create API Key**
- Give it a name like "AENTX Contact Form"
- Select **Full access** permissions
- Copy the API key (starts with `re_`) and save it securely

### 3. Set Up Domain (Optional for Testing)
For testing, you can use Resend's default domain `onboarding@resend.dev`.

For production:
- In Resend dashboard, go to **Domains**
- Add your domain (e.g., `yourdomain.com`)
- Follow DNS verification steps
- Use emails like `noreply@yourdomain.com` as your FROM address

### 4. Update Environment Variables
Edit your `.env` file and replace the placeholder values:

```env
# Resend API Key (get from https://resend.com/api-keys)
RESEND_API_KEY=re_your_actual_api_key_here

# From email address (must be verified domain with Resend)
# For testing: onboarding@resend.dev
# For production: noreply@yourdomain.com
FROM_EMAIL=onboarding@resend.dev

# Email address to receive contact form submissions (your personal email)
TO_EMAIL=your-actual-email@gmail.com

# Application URL (update for production)
APP_URL=http://localhost:3000
```

### 5. Security Notes
- **Never commit your `.env` file** to version control
- The `.env.example` file shows the structure but contains placeholder values
- API keys are more secure than SMTP credentials
- Resend provides excellent deliverability and analytics

### 6. Testing
- Fill out your contact form to test the email functionality
- Check your email inbox for the formatted email
- Check server logs for success/error messages
- Monitor your Resend dashboard for email analytics

### 7. Production Deployment
When deploying to production:
- Set up your own verified domain in Resend
- Update `FROM_EMAIL` to use your domain
- Update `APP_URL` to your production domain
- Set environment variables in your hosting platform
- Monitor email delivery in Resend dashboard

## Advantages of Resend
- **Better deliverability** than SMTP
- **Built-in analytics** and delivery tracking
- **API-based** - more reliable than SMTP
- **Generous free tier** - 3,000 emails/month free
- **Easy setup** - no complex SMTP configuration
- **Modern developer experience**

## Email Format
The emails you receive will include:
- Contact person's information (name, email, company)
- Their message
- Submission timestamp
- Reply-to address set to the contact person's email for easy responses
- Professional HTML formatting with AENTX branding

## Troubleshooting
- **API Key Issues**: Make sure your API key starts with `re_` and has full access
- **Domain Issues**: For production, ensure your domain is verified in Resend
- **Rate Limits**: Free tier allows 3,000 emails/month, 100 emails/day
- **Check Logs**: Server logs will show detailed error messages 