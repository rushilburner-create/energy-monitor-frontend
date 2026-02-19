import express from "express";

const router = express.Router();

const mockCompanies = [
  { id: 1, name: "Saudi Aramco", sector: "oil-gas", country: "Saudi Arabia", marketCap: 2500000000000 },
  { id: 2, name: "Tesla", sector: "ev", country: "USA", marketCap: 800000000000 },
  { id: 3, name: "NextEra Energy", sector: "power-utilities", country: "USA", marketCap: 180000000000 },
  { id: 4, name: "Albemarle", sector: "lithium", country: "USA", marketCap: 18000000000 }
];

router.get("/", (req, res) => {
  const { sector } = req.query;
  let companies = mockCompanies;
  if (sector) {
    companies = companies.filter(c => c.sector === sector);
  }
  res.json(companies);
});

router.get("/:id", (req, res) => {
  const company = mockCompanies.find(c => c.id === parseInt(req.params.id));
  if (!company) {
    return res.status(404).json({ error: "Company not found" });
  }
  res.json(company);
});

export { router as companyRoutes };
