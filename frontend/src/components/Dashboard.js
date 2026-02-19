import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import CompanyCard from "./CompanyCard";

const Dashboard = () => {
  const [news, setNews] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState("");

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

  useEffect(() => {
    fetchData();
  }, [categoryFilter]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const newsRes = await axios.get(API_URL + "/news", {
        params: categoryFilter ? { category: categoryFilter } : {}
      });
      const companiesRes = await axios.get(API_URL + "/companies", {
        params: categoryFilter ? { sector: categoryFilter } : {}
      });
      setNews(newsRes.data);
      setCompanies(companiesRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { value: "", label: "All Categories" },
    { value: "oil-gas", label: "Oil & Gas" },
    { value: "power-utilities", label: "Power & Utilities" },
    { value: "ev", label: "Electric Vehicles" },
    { value: "power-semiconductors", label: "Power Semiconductors" },
    { value: "lithium", label: "Lithium" }
  ];

  return (
    <div className="dashboard-container">
      <div className="filter-bar">
        <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
          {categories.map(cat => (
            <option key={cat.value} value={cat.value}>{cat.label}</option>
          ))}
        </select>
        <button onClick={fetchData}>Refresh</button>
      </div>

      {loading ? (
        <div className="card"><p>Loading...</p></div>
      ) : (
        <div className="dashboard">
          <div className="card">
            <div className="card-title"> Latest News</div>
            <div className="card-content">
              {news.map(item => (
                <NewsCard key={item.id} news={item} />
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-title"> Companies</div>
            <div className="card-content">
              {companies.map(company => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-title"> Market Overview</div>
            <div className="card-content">
              <p><strong>Total News Items:</strong> {news.length}</p>
              <p><strong>Tracked Companies:</strong> {companies.length}</p>
              <p><strong>Active Categories:</strong> {categoryFilter || "All"}</p>
              <p style={{marginTop: "15px", fontSize: "0.85em", opacity: 0.8}}>Last updated: {new Date().toLocaleTimeString()}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

