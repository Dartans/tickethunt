# TicketHunt - Vercel Serverless Function Migration

## What Changed

The project has been refactored to work with Vercel's serverless functions:

### Old Structure (Express Server):
- `server.js` - Single Express server file
- All routes handled in one file
- Requires a running server instance

### New Structure (Vercel Functions):
- `api/health.js` - Health check endpoint
- `api/register-business.js` - Business registration endpoint  
- `api/register-player.js` - Player registration endpoint
- Each API route is a separate serverless function

## Benefits:
1. **Auto-scaling**: Functions scale automatically based on demand
2. **Cost-effective**: Only pay for actual usage
3. **Global deployment**: Functions run at edge locations worldwide
4. **Zero maintenance**: No server management required
5. **Faster cold starts**: Individual functions start faster

## API Endpoints:
- `GET /api/health` - Health check
- `POST /api/register-business` - Business application submission
- `POST /api/register-player` - Player registration

## Frontend Compatibility:
- No changes needed to frontend code
- All existing API calls work the same way
- Form submissions work identically

## Environment Variables:
Same as before:
- `EMAIL_USER` - Gmail address
- `EMAIL_PASS` - Gmail app password  
- `ADMIN_EMAIL` - Admin email address

The website functionality remains exactly the same for end users!
