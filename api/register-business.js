const nodemailer = require('nodemailer');

// Email configuration
const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

module.exports = async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

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

        res.status(200).json({
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
}
