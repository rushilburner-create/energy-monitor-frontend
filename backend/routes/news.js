import express from "express";
import NodeCache from "node-cache";

const router = express.Router();
const cache = new NodeCache({ stdTTL: 600 });

// Mock data for demo
const mockNews = [
  {
    id: 1,
    title: "Oil prices surge amid geopolitical tensions",
    source: "Energy News Daily",
    category: "oil-gas",
    date: new Date().toISOString(),
    summary: "Global oil prices increased by 3.5% following recent developments",
    url: "https://example.com/news/1"
  },
  {
    id: 2,
    title: "EV battery demand outpaces lithium supply",
    source: "Tech Industry Report",
    category: "lithium",
    date: new Date().toISOString(),
    summary: "Lithium shortage continues to impact EV production timelines",
    url: "https://example.com/news/2"
  },
  {
    id: 3,
    title: "Renewable energy capacity reaches new milestone",
    source: "Power & Utilities",
    category: "power-utilities",
    date: new Date().toISOString(),
    summary: "Global renewable energy capacity exceeds 4000 GW",
    url: "https://example.com/news/3"
  }
];

router.get("/", (req, res) => {
  const cached = cache.get("allNews");
  if (cached) {
    return res.json(cached);
  }
  
  const { category, limit = 20 } = req.query;
  let news = mockNews;
  
  if (category) {
    news = news.filter(n => n.category === category);
  }
  
  news = news.slice(0, parseInt(limit));
  cache.set("allNews", news);
  
  res.json(news);
});

router.get("/:id", (req, res) => {
  const news = mockNews.find(n => n.id === parseInt(req.params.id));
  if (!news) {
    return res.status(404).json({ error: "News not found" });
  }
  res.json(news);
});

export { router as newsRoutes };
