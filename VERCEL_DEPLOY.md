# Vercel Deployment Guide for TicketHunt

## 🚀 Deploy to Vercel

### Prerequisites
- GitHub repository with your code committed
- Vercel account (free at vercel.com)

### Step 1: Connect to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your GitHub repository
4. Select the TicketHunt repository

### Step 2: Configure Environment Variables
In the Vercel dashboard, add these environment variables:

**Required for email functionality:**
- `EMAIL_USER` - Your Gmail address (e.g., your-email@gmail.com)
- `EMAIL_PASS` - Your Gmail app password (not your regular password)
- `ADMIN_EMAIL` - Where business applications should be sent

**Optional:**
- `PORT` - Will be automatically set by Vercel

### Step 3: Deploy
1. Click "Deploy" - Vercel will automatically:
   - Detect it's a Node.js project
   - Install dependencies
   - Deploy your application

### Step 4: Set up Gmail App Password
1. Go to your Google Account settings
2. Enable 2-factor authentication
3. Generate an App Password for "Mail"
4. Use this app password in the `EMAIL_PASS` environment variable

### Step 5: Custom Domain (Optional)
- Add your custom domain in Vercel dashboard
- Update DNS settings as instructed

## 📁 Project Structure for Vercel
```
tickethunt/
├── server.js          # API routes (/api/*)
├── index.html         # Main page
├── styles.css         # Styling
├── script.js          # Frontend JavaScript
├── vercel.json        # Vercel configuration
└── package.json       # Dependencies
```

## 🔧 How it Works on Vercel
- **Static files** (HTML, CSS, JS) are served via CDN
- **API routes** (`/api/*`) are handled by serverless functions
- **Environment variables** are securely managed
- **Automatic HTTPS** and global CDN

## 🌍 Your Live URLs
After deployment:
- **Website**: `https://your-project-name.vercel.app`
- **API**: `https://your-project-name.vercel.app/api/register-business`

## 🔍 Troubleshooting
- Check Vercel logs if deployment fails
- Ensure all environment variables are set
- Test email functionality after deployment
- Check that your GitHub repository is up to date

## 📊 Monitoring
- Vercel provides built-in analytics
- Monitor function execution times
- Track email delivery success rates
