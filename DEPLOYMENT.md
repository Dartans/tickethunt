# TicketHunt Deployment Guide

## 🚀 Quick Deployment Options

### Option 1: Static Website (Free & Easy)
**Best for**: Testing, simple setup, no email functionality needed

**Platforms**: Netlify, Vercel, GitHub Pages, Surge.sh

**Steps**:
1. Upload these files: `index.html`, `styles.css`, `script.js`
2. The form will use email fallback (opens user's email client)
3. Done! Your site is live.

**Netlify Deployment**:
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --dir . --prod
```

### Option 2: Full Server (Advanced)
**Best for**: Professional setup, automatic email handling, database integration

**Platforms**: Heroku, Railway, DigitalOcean, AWS

#### Heroku Deployment:
```bash
# Install Heroku CLI, then:
heroku create tickethunt-yourname
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASS=your-app-password
heroku config:set ADMIN_EMAIL=admin@tickethunt.com
git add .
git commit -m "Initial deployment"
git push heroku main
```

#### Railway Deployment:
1. Connect your GitHub repo to Railway
2. Set environment variables in Railway dashboard
3. Deploy automatically

## 📧 Email Setup (For Server Version)

### Gmail Setup (Recommended):
1. Enable 2-Factor Authentication
2. Generate App Password:
   - Google Account → Security → 2-Step Verification → App passwords
   - Select "Mail" and your device
   - Copy the 16-character password
3. Update `.env`:
   ```
   EMAIL_USER=youremail@gmail.com
   EMAIL_PASS=your-16-char-app-password
   ADMIN_EMAIL=admin@tickethunt.com
   ```

### Other Email Providers:
Edit `server.js` transporter configuration for:
- Outlook/Hotmail
- Yahoo Mail  
- Custom SMTP servers

## 🔧 Customization

### Branding:
- Update colors in `styles.css` (search for `#2c5aa0` and `#ffd700`)
- Replace "River Lions" with your prize/event
- Update contact information

### Pricing:
- Modify tiers in `index.html`
- Update validation in `server.js`

### Features to Add:
- Database storage (MongoDB, PostgreSQL)
- Payment processing (Stripe, PayPal)
- Admin dashboard
- Player registration system
- Hunt tracking

## 🔒 Security Notes

- Never commit `.env` file to version control
- Use HTTPS in production
- Validate all form inputs
- Consider rate limiting for form submissions

## 📱 Testing

1. **Form Validation**: Try submitting empty/invalid forms
2. **Responsive Design**: Test on mobile devices
3. **Email Functionality**: Test with real email addresses
4. **Browser Compatibility**: Test on different browsers

## 🆘 Troubleshooting

**Form not submitting?**
- Check browser console for errors
- Verify server is running (if using server version)
- Check email configuration

**Styling issues?**
- Clear browser cache
- Check for CSS conflicts
- Verify file paths

**Server not starting?**
- Check Node.js version (requires 14+)
- Verify all dependencies installed: `npm install`
- Check port availability

## 📞 Support

Need help with deployment or customization?
- Email: info@tickethunt.com
- Check the README.md for more details
