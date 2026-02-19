import express from "express";

const router = express.Router();

let alerts = [];

router.post("/", (req, res) => {
  const { userId, keyword, category, email } = req.body;
  const alert = {
    id: alerts.length + 1,
    userId,
    keyword,
    category,
    email,
    createdAt: new Date().toISOString(),
    active: true
  };
  alerts.push(alert);
  res.status(201).json(alert);
});

router.get("/", (req, res) => {
  res.json(alerts);
});

router.delete("/:id", (req, res) => {
  alerts = alerts.filter(a => a.id !== parseInt(req.params.id));
  res.json({ message: "Alert deleted" });
});

export { router as alertRoutes };
