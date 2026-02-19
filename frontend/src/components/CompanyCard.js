import React from "react";

const CompanyCard = ({ company }) => {
  const formatMarketCap = (value) => {
    if (value >= 1e12) return (value / 1e12).toFixed(2) + "T";
    if (value >= 1e9) return (value / 1e9).toFixed(2) + "B";
    if (value >= 1e6) return (value / 1e6).toFixed(2) + "M";
    return value;
  };

  return (
    <div className="company-item">
      <strong>{company.name}</strong>
      <p style={{fontSize: "0.85em", margin: "8px 0", opacity: 0.8}}>
        {company.country}  {company.sector.toUpperCase()}
      </p>
      <p style={{margin: "8px 0"}}>
        <strong>Market Cap:</strong> ${formatMarketCap(company.marketCap)}
      </p>
    </div>
  );
};

export default CompanyCard;
