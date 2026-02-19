# Energy Sector Monitor

A real-time monitoring platform for tracking developments in Oil & Gas, Power & Utilities, Electric Vehicles, Power Semiconductors, and Lithium sectors.

## Project Structure

- **backend/** - Node.js/Express API server
  - routes/ - API endpoints for news, companies, alerts
  - server.js - Main server file
  
- **frontend/** - React dashboard application
  - src/components/ - Dashboard, Header, and Card components
  - public/ - Static assets

## Quick Start

### Backend Setup
```bash
cd backend
npm install
npm run dev
```
Runs on `http://localhost:5000`

### Frontend Setup
```bash
cd frontend
npm install
npm start
```
Runs on `http://localhost:3000`

## API Endpoints

- `GET /api/news` - Get latest news (query: category, limit)
- `GET /api/news/:id` - Get specific news item
- `GET /api/companies` - Get companies (query: sector)
- `GET /api/companies/:id` - Get specific company
- `POST /api/alerts` - Create alert
- `GET /api/alerts` - Get all alerts
- `DELETE /api/alerts/:id` - Delete alert

## Features

- Real-time dashboard with sector-based filtering
- News aggregation from multiple sources
- Company tracking and market metrics
- Alert system for price and news changes
- Responsive design with modern UI

## Categories

- oil-gas: Oil and Gas sector
- power-utilities: Power and Utilities
- ev: Electric Vehicles
- power-semiconductors: Power Semiconductors
- lithium: Lithium and battery materials

## Next Steps

1. Configure real data sources (NewsAPI, Bloomberg, etc.)
2. Set up PostgreSQL database for persistence
3. Implement WebSocket for real-time updates
4. Add user authentication
5. Enhance data aggregation and analytics
