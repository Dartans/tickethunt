// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling
document.getElementById('businessForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Validate required fields
    const requiredFields = ['businessName', 'contactName', 'email', 'tier', 'address'];
    let isValid = true;
    
    requiredFields.forEach(field => {
        const input = document.getElementById(field);
        if (!data[field] || data[field].trim() === '') {
            input.style.borderColor = '#dc3545';
            isValid = false;
        } else {
            input.style.borderColor = '#28a745';
        }
    });
    
    if (!isValid) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        document.getElementById('email').style.borderColor = '#dc3545';
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Opening Email...';
    submitBtn.disabled = true;
    
    // Create email content and open email client
    const emailBody = createEmailContent(data);
    const mailtoLink = `mailto:info@localtreasure.com?subject=LocalTreasure Business Application - ${data.businessName}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.open(mailtoLink);
    
    showNotification('Your email client will open with the application details. Please send the email to complete your application.', 'success');
    this.reset();
    
    // Reset field colors
    requiredFields.forEach(field => {
        document.getElementById(field).style.borderColor = '#e0e0e0';
    });
    
    // Reset button
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Create email content for business application
function createEmailContent(data) {
    return `
New LocalTreasure Business Application

Business Details:
- Name: ${data.businessName}
- Type: ${data.businessType || 'Not specified'}
- Address: ${data.address}

Contact Information:
- Contact Name: ${data.contactName}
- Email: ${data.email}
- Phone: ${data.phone || 'Not provided'}

Investment Level: ${data.tier}

Clue/Challenge Idea:
${data.clueIdea || 'None provided'}

Special Offer:
${data.specialOffer || 'None provided'}

Additional Notes:
${data.additionalNotes || 'None provided'}

Submitted: ${new Date().toLocaleString()}
    `;
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#2c5aa0'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        max-width: 400px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    `;
    
    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Add close functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.step, .tier, .contact-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Pricing tier selection highlighting
document.querySelectorAll('.tier').forEach(tier => {
    tier.addEventListener('click', () => {
        // Remove previous selections
        document.querySelectorAll('.tier').forEach(t => t.classList.remove('selected'));
        
        // Add selection to clicked tier
        tier.classList.add('selected');
        
        // Update form selection
        const tierValue = tier.querySelector('h3').textContent.toLowerCase().split(' ')[0];
        const selectElement = document.getElementById('tier');
        selectElement.value = tierValue;
        
        // Scroll to form
        document.querySelector('.business-form-container').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Add selected tier styling
const style = document.createElement('style');
style.textContent = `
    .tier.selected {
        border: 3px solid #2c5aa0 !important;
        transform: scale(1.02) !important;
    }
    
    .tier.selected::after {
        content: '✓ Selected';
        position: absolute;
        top: 10px;
        left: 10px;
        background: #2c5aa0;
        color: white;
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 600;
    }
`;
document.head.appendChild(style);
