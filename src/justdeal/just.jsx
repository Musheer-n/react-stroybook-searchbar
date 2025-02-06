import React from "react";
import "./style23.css";

const categories = [
  { name: "Restaurants", icon: "🍽" },
  { name: "Hotels", icon: "🏨" },
  { name: "Beauty Spa", icon: "💆‍♀" },
  { name: "Home Decor", icon: "🛋" },
  { name: "Wedding Planning", icon: "💍", image: "wedding.jpg" },
  { name: "Education", icon: "🎓" },
  { name: "Rent & Hire", icon: "🔧" },
  { name: "Hospitals", icon: "🏥" },
  { name: "Contractors", icon: "👷‍♂" },
  { name: "Pet Shops", icon: "🏠" },
  { name: "PG/Hostels", icon: "🛏" },
  { name: "Estate Agent", icon: "👨‍💼" },
  { name: "Dentists", icon: "🦷" },
  { name: "Gym", icon: "🏋" },
  { name: "Loans", icon: "💰" },
  { name: "Event Organisers", icon: "🎉" },
  { name: "Driving Schools", icon: "🚗" },
  { name: "Packers & Movers", icon: "📦" },
  { name: "Courier Service", icon: "📬" },
  { name: "Popular Categories", icon: "📊" },
];

const Deal = () => {
  return (
    <div className="deal-container">
      {categories.map((category, index) => (
        <div key={index} className="deal-card">
          {category.image ? (
            <img src={category.image} alt={category.name} className="deal-image" />
          ) : (
            <span className="deal-icon">{category.icon}</span>
          )}
          <p className="deal-text">{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Deal;