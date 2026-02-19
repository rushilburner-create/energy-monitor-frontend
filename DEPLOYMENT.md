# DEPLOYMENT GUIDE

## Option 1: Using Vercel (Frontend) + Render (Backend) - Recommended

### Step 1: Set up GitHub Repository
1. Create account at https://github.com
2. Create new repository "energy-monitor"
3. In VS Code terminal, run:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/energy-monitor.git
   git push -u origin main
   ```

### Step 2: Deploy Backend to Render
1. Go to https://render.com
2. Sign up with GitHub account
3. Click "New +"  "Web Service"
4. Connect your GitHub repo
5. Fill in:
   - Name: `energy-monitor-api`
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
6. Add environment variables:
   - `NODE_ENV`: production
   - `PORT`: 5000 (auto)
7. Deploy! You'll get a URL like `https://energy-monitor-api.onrender.com`

### Step 3: Deploy Frontend to Vercel
1. Go to https://vercel.com
2. Sign up with GitHub account
3. Click "Import Project"
4. Select your energy-monitor repo
5. Fill in:
   - Framework: React
   - Root Directory: `frontend`
6. Add environment variable:
   - `REACT_APP_API_URL`: https://energy-monitor-api.onrender.com
7. Deploy! Your site is now live!

### Step 4: Update Backend CORS
After getting your Vercel URL (https://something.vercel.app):
1. Edit `backend/server.js`
2. Update CORS:
   ```javascript
   app.use(cors({
     origin: ['https://your-vercel-url.vercel.app', 'http://localhost:3000']
   }));
   ```
3. Push to GitHub - both services auto-redeploy!

## Option 2: Using Netlify (Frontend) + Railway (Backend)

### Frontend: Netlify
1. Go to https://netlify.com
2. Sign up with GitHub
3. Import from Git  select energy-monitor
4. Set build command: `npm run build` (in frontend)
5. Set publish directory: `frontend/build`
6. Add env var: `REACT_APP_API_URL`: [your backend URL]

### Backend: Railway
1. Go to https://railway.app
2. Sign up
3. Create new project from GitHub repo
4. Select backend folder
5. Add PORT env var: 5000
6. Deploy!

## Troubleshooting

**Frontend shows "Cannot reach API":**
- Check backend is running: visit the backend URL in browser
- Verify CORS is enabled in backend/server.js
- Check environment variable is set correctly

**Backend says port already in use:**
- On Render/Railway, PORT is auto-assigned
- Make sure server.js uses: const PORT = process.env.PORT || 5000;

**Local testing before deploy:**
```bash
# Terminal 1 - Backend
cd backend
PORT=5000 npm start

# Terminal 2 - Frontend
cd frontend
REACT_APP_API_URL=http://localhost:5000 npm start
```
