# TicketHunt Website

*Presented by Expose The North*

A modern, interactive **static website** for the TicketHunt business adventure concept. Local businesses pay to become clue stops, driving new customers to their doors while participants hunt for clues to win local event tickets!

## About Expose The North

TicketHunt is proudly presented by **Expose The North**, a multimedia production company with over 24 years of experience in media production and community engagement. ETN is known for their dedication to the craft and innovation in bringing communities together.

- Reader's Choice Award Winner Diamond Tier 2021
- Twice nominated for Niagara Music Awards
- "We Go There...And BEYOND!"

**Website**: [sharetheshock.ca](https://sharetheshock.ca/)  
**Live Site**: [tickethunt.sharetheshock.ca](https://tickethunt.sharetheshock.ca/)

## Features

- **Modern, Responsive Design**: Beautiful UI that works on all devices
- **Business Registration**: Complete form system with pricing tiers ($50, $100, $150+)
- **Interactive Elements**: Smooth animations and user-friendly interface
- **Email Integration**: Uses `mailto:` links to open email client for business applications
- **Multiple Pricing Tiers**: Bronze, Silver, and Gold packages for different involvement levels
- **Static Site**: No server required - just HTML, CSS, and JavaScript

## Pricing Structure

- **Bronze Clue ($50)**: Basic clue mention, business listing, social media mention
- **Silver Adventure ($100)**: Featured placement, extended profile, photo challenges
- **Gold Experience ($150+)**: Major centerpiece, custom challenges, video content

## Quick Start

Simply open `index.html` in your browser or deploy to any static hosting service like Vercel, Netlify, or GitHub Pages.

### Local Development:
```bash
# No build process required - just open the file
open index.html
# or serve with any static server
python -m http.server 8000
# or
npx serve .
```

### Deployment:
This is a static site that can be deployed anywhere:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the folder
- **GitHub Pages**: Push to a repository and enable Pages

## File Structure

```
/
├── index.html          # Main website file
├── styles.css          # All styling and responsive design
├── script.js           # Interactive functionality and form handling
├── vercel.json         # Vercel deployment configuration
├── package.json        # Project metadata (no dependencies needed)
└── README.md           # Documentation
```

## How It Works

### Business Application Process:
1. Business fills out the registration form
2. Form validation ensures all required fields are completed
3. JavaScript generates a pre-filled email with all application details
4. User's default email client opens with the application ready to send
5. Business sends email to `info@tickethunt.com` to complete application

### Benefits of Static Approach:
- **No server costs** - Deploy anywhere for free
- **No backend maintenance** - No databases, email servers, or APIs to manage
- **100% reliable** - Static files always work
- **Fast loading** - No server processing delays
- **Easy deployment** - Works on any hosting service

## Customization

### Colors & Branding
- Primary color: `#2c5aa0` (blue)
- Accent color: `#ffd700` (gold)
- Update these in `styles.css` to match your branding

### Content
- Edit `index.html` to update text, images, and contact information
- Modify pricing tiers and descriptions
- Update contact email addresses

### Email Templates
- Modify the `createEmailContent()` function in `script.js`
- Customize the email subject line and formatting

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## License

MIT License - feel free to use this for your TicketHunt business!

## Support

For questions about the website or TicketHunt concept:
- Email: info@tickethunt.com
- Phone: (555) 123-HUNT

---

**Built with ❤️ for bringing communities together through adventure!**
