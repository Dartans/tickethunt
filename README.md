# TicketHunt Website

A modern, interactive website for the TicketHunt business adventure concept. Local businesses pay to become clue stops, driving new customers to their doors while participants hunt for clues to win River Lions tickets!

## Features

- **Modern, Responsive Design**: Beautiful UI that works on all devices
- **Business Registration**: Complete form system with pricing tiers ($50, $100, $150+)
- **Interactive Elements**: Smooth animations and user-friendly interface
- **Email Integration**: Automatic notifications for new business applications
- **Multiple Pricing Tiers**: Bronze, Silver, and Gold packages for different involvement levels

## Pricing Structure

- **Bronze Clue ($50)**: Basic clue mention, business listing, social media mention
- **Silver Adventure ($100)**: Featured placement, extended profile, photo challenges
- **Gold Experience ($150+)**: Major centerpiece, custom challenges, video content

## Quick Start

### Option 1: Static Website (HTML Only)
Just open `index.html` in your browser to view the static version.

### Option 2: Full Server (with Email Integration)

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Set up Environment Variables**:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` file with your email configuration:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ADMIN_EMAIL=admin@tickethunt.com
   PORT=3000
   ```

3. **Start the Server**:
   ```bash
   npm start
   ```

4. **Open Your Browser**:
   Visit `http://localhost:3000`

## File Structure

```
tickethunt/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # Frontend JavaScript
├── server.js           # Backend server (Node.js/Express)
├── package.json        # Node.js dependencies
├── .env.example        # Environment variables template
└── README.md           # This file
```

## Email Setup

For the contact form to work properly, you'll need to:

1. **Gmail Setup** (recommended):
   - Enable 2-factor authentication
   - Generate an "App Password" for the website
   - Use this app password in the `.env` file

2. **Other Email Services**:
   - Update the `transporter` configuration in `server.js`
   - Adjust settings for your email provider

## Customization

### Colors & Branding
- Primary color: `#2c5aa0` (blue)
- Accent color: `#ffd700` (gold)
- Update these in `styles.css` to match your branding

### Content
- Edit `index.html` to update text, images, and contact information
- Modify pricing tiers in both HTML and server validation

### Business Logic
- Update pricing validation in `server.js`
- Customize email templates in the server file
- Add database integration for storing applications

## Deployment

### Static Hosting (Netlify, Vercel, GitHub Pages)
Just upload the HTML, CSS, and JS files for a static version.

### Full Server Hosting (Heroku, DigitalOcean, AWS)
1. Set environment variables on your hosting platform
2. Deploy the entire project including `server.js`
3. Ensure Node.js is available on your hosting platform

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this for your TicketHunt business!

## Support

For questions about the website or TicketHunt concept:
- Email: info@tickethunt.com
- Phone: (555) 123-HUNT

---

**Built with ❤️ for bringing communities together through adventure!**
