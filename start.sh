#!/bin/bash

echo "🎯 Starting TicketHunt Website..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check if npm packages are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Create .env file if it doesn't exist
if [ ! -f ".env" ]; then
    echo "⚙️  Creating environment file..."
    cp .env.example .env
    echo "✏️  Please edit .env file with your email settings before running the server."
    echo ""
fi

echo "🚀 Starting server..."
echo "📱 Website will be available at: http://localhost:3000"
echo "🛑 Press Ctrl+C to stop the server"
echo ""

node server.js
