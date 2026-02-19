# Easy Deploy Guide - No Git Needed!

## Deploy without Git (Fastest Way)

You can deploy your app directly to Vercel and Render without installing Git locally. Just upload the files!

### Deploy Backend to Render (Free Tier)

1. Go to https://render.com
2. Click **"+ New"**  **"Web Service"**
3. Select **"Deploy from a Git repository"**
4. Click **"Public Git repository"**
5. Paste this in the "Repository" field:
   ```
   https://github.com/rushilburner-create/energy-monitor.git
   ```
   (Don't worry, it doesn't exist yet - you'll create it)
6. Fill in:
   - **Name**: `energy-monitor-api`
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
7. Click **"Create Web Service"**
8. You'll get a URL like: `https://energy-monitor-api.onrender.com`

**Note:** This won't work until you push code to GitHub, so let's do that next...

### Upload Your Code to GitHub (Without Git)

1. Go to https://github.com/new
2. Create a new repository:
   - **Repository name**: `energy-monitor`
   - Click **"Create repository"**
3. On the next page, click **"uploading an existing file"** (or click **"Add file"**  **"Upload files"**)
4. **Drag and drop your project folders** (backend/, frontend/, etc.) into GitHub
5. GitHub will upload everything
6. Click **"Commit changes"**

Once uploaded, Render and Vercel will automatically deploy!

### Deploy Frontend to Vercel (Free Tier)

1. Go to https://vercel.com
2. Click **"New Project"**
3. Click **"Import Git Repository"**
4. Enter: `https://github.com/rushilburner-create/energy-monitor`
5. Under "Project Settings":
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
6. Add Environment Variable:
   - **Name**: `REACT_APP_API_URL`
   - **Value**: `https://energy-monitor-api.onrender.com` (your Render URL)
7. Click **"Deploy"**

You'll get a URL like: `https://energy-monitor.vercel.app`

---

## Summary

1.  Code is ready to deploy
2.  Go to GitHub and upload your files
3.  Deploy backend to Render
4.  Deploy frontend to Vercel
5.  Your app is live!

Your sites will be at:
- **Frontend**: https://yourapp.vercel.app
- **Backend API**: https://energy-monitor-api.onrender.com

