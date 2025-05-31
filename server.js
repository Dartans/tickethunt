const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname)));

// Email configuration (you'll need to set up environment variables)
const transporter = nodemailer.createTransporter({
    service: 'gmail', // or your email service
    auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS  // your email password or app password
    }
});

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle business registration
app.post('/api/register-business', async (req, res) => {
    try {
        const {
            businessName,
            contactName,
            email,
            phone,
            tier,
            address,
            businessType,
            clueIdea,
            specialOffer,
            additionalNotes
        } = req.body;

        // Validate required fields
        if (!businessName || !contactName || !email || !tier || !address) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields'
            });
        }

        // Create email content
        const emailContent = `
New TicketHunt Business Application

Business Details:
- Name: ${businessName}
- Type: ${businessType || 'Not specified'}
- Address: ${address}

Contact Information:
- Contact Name: ${contactName}
- Email: ${email}
- Phone: ${phone || 'Not provided'}

Investment Level: ${tier}

Clue/Challenge Idea:
${clueIdea || 'None provided'}

Special Offer:
${specialOffer || 'None provided'}

Additional Notes:
${additionalNotes || 'None provided'}

Submitted: ${new Date().toLocaleString()}
        `;

        // Email to admin
        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL || 'admin@tickethunt.com',
            subject: `New Business Application - ${businessName}`,
            text: emailContent,
            html: emailContent.replace(/\n/g, '<br>')
        };

        // Confirmation email to business
        const confirmationMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'TicketHunt Application Received',
            html: `
                <h2>Thank you for your interest in TicketHunt!</h2>
                <p>Dear ${contactName},</p>
                <p>We've received your application for <strong>${businessName}</strong> to join our TicketHunt adventure network.</p>
                
                <h3>Your Application Details:</h3>
                <ul>
                    <li><strong>Investment Level:</strong> ${tier}</li>
                    <li><strong>Business Address:</strong> ${address}</li>
                </ul>
                
                <p>Our team will review your application and contact you within 24 hours to discuss the next steps.</p>
                
                <p>In the meantime, feel free to reach out if you have any questions:</p>
                <ul>
                    <li>Email: info@tickethunt.com</li>
                    <li>Phone: (555) 123-HUNT</li>
                </ul>
                
                <p>We're excited about the possibility of partnering with you!</p>
                
                <p>Best regards,<br>The TicketHunt Team</p>
            `
        };

        // Send emails
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            await transporter.sendMail(adminMailOptions);
            await transporter.sendMail(confirmationMailOptions);
        } else {
            console.log('Email configuration not set up. Application data:');
            console.log(req.body);
        }

        res.json({
            success: true,
            message: 'Application submitted successfully! We\'ll contact you within 24 hours.'
        });

    } catch (error) {
        console.error('Error processing application:', error);
        res.status(500).json({
            success: false,
            message: 'There was an error processing your application. Please try again.'
        });
    }
});

// Handle player registration (for future hunts)
app.post('/api/register-player', async (req, res) => {
    try {
        const { name, email, phone } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                success: false,
                message: 'Name and email are required'
            });
        }

        // Add player to mailing list or database
        console.log('New player registration:', { name, email, phone });

        res.json({
            success: true,
            message: 'Thanks for signing up! We\'ll notify you when the next hunt begins.'
        });

    } catch (error) {
        console.error('Error registering player:', error);
        res.status(500).json({
            success: false,
            message: 'Registration failed. Please try again.'
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`TicketHunt server running on http://localhost:${PORT}`);
    console.log('Open your browser to view the website!');
});
