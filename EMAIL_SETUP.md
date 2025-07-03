# Email Setup Guide for Contact Form

## Gmail Configuration Steps

### 1. Enable 2-Factor Authentication
- Go to your Google Account settings: https://myaccount.google.com/
- Navigate to **Security** → **2-Step Verification**
- Follow the setup process if not already enabled

### 2. Generate App Password
- In Google Account settings, go to **Security** → **2-Step Verification**
- Scroll down to **App passwords**
- Select app: **Mail**
- Select device: **Other (custom name)** → enter "AENTX Contact Form"
- Copy the 16-character app password (save this securely!)

### 3. Update Environment Variables
Edit your `.env` file and replace the placeholder values:

```env
# Your Gmail email address (both sender and recipient)
GMAIL_USER=your-actual-email@gmail.com

# Gmail App Password (the 16-character password from step 2)
GMAIL_APP_PASSWORD=your-actual-app-password

# Gmail SMTP Configuration (keep these as-is)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587

# Application URL (update for production)
APP_URL=http://localhost:3000
```

### 4. Security Notes
- **Never commit your `.env` file** to version control
- The `.env.example` file shows the structure but contains placeholder values
- App passwords are more secure than using your regular Gmail password
- Emails will be sent FROM your Gmail TO your Gmail (you're both sender and recipient)

### 5. Testing
- Fill out your contact form to test the email functionality
- Check your Gmail inbox for the formatted email
- Check server logs for success/error messages

### 6. Production Deployment
When deploying to production:
- Update `APP_URL` to your production domain
- Set environment variables in your hosting platform
- Consider using a dedicated business email for production

## Email Format
The emails you receive will include:
- Contact person's information (name, email, company)
- Their message
- Submission timestamp
- Reply-to address set to the contact person's email for easy responses 