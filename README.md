# Susanta Gorai - Personal Portfolio Website

A modern, responsive portfolio website highlighting robotics, embedded systems, drone automation, AI/ML, and IoT projects.

---

## 🚀 How to Host Your Portfolio Online

### Option 1: GitHub Pages (Recommended & Free Forever)

Your GitHub username is **`TechnicalSusanta`**. You can host your portfolio for free with GitHub Pages:

1. **Create a new repository on GitHub**:
   - Go to [https://github.com/new](https://github.com/new)
   - Set the repository name to: **`TechnicalSusanta.github.io`** (or `portfolio`)
   - Keep it **Public** and do not initialize with README (we already have one)
   - Click **Create repository**

2. **Push your code from this folder**:
   Run the following commands in your terminal:
   ```bash
   git branch -M main
   git remote add origin https://github.com/TechnicalSusanta/TechnicalSusanta.github.io.git
   git push -u origin main
   ```
   *(If you named your repo `portfolio`, replace the URL with `https://github.com/TechnicalSusanta/portfolio.git`)*

3. **Your Live Website**:
   - If named `TechnicalSusanta.github.io`: **`https://technicalsusanta.github.io`**
   - If named `portfolio`: In your repository on GitHub, go to **Settings** -> **Pages** -> Select branch **`main`** -> Click **Save**. Your site will be live at: **`https://technicalsusanta.github.io/portfolio`**

---

### Option 2: Netlify (Instant 1-Click Drag & Drop)

1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop this `portfolio` folder directly onto the browser window.
3. Your site will be live instantly with a free `.netlify.app` URL and free SSL!

---

### Option 3: Vercel

1. Install Vercel CLI or link with GitHub:
   ```bash
   npx vercel
   ```
2. Follow the 2-second prompt to deploy.

---

## 🛠 Local Development & Testing

To test locally:
```bash
python -m http.server 8080
```
Then visit `http://localhost:8080` in your web browser.
