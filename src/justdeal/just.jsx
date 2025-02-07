import "./style23.css";
import React from "react";

const categories = [
  {
    title: "Wedding Requisites",
    items: [
      { name: "Banquet Halls", img: "path/to/banquet.jpg" },
      { name: "Bridal Requisite", img: "path/to/bridal.jpg" },
      { name: "Caterers", img: "path/to/caterers.jpg" },
    ],
  },
  {
    title: "Beauty & Spa",
    items: [
      { name: "Beauty Parlours", img: "path/to/beauty.jpg" },
      { name: "Spa & Massages", img: "path/to/spa.jpg" },
      { name: "Salons", img: "path/to/salons.jpg" },
    ],
  },
  {
    title: "Repairs & Services",
    items: [
      { name: "AC Service", img: "path/to/ac.jpg" },
      { name: "Car Service", img: "path/to/car.jpg" },
      { name: "Bike Service", img: "path/to/bike.jpg" },
    ],
  },
  {
    title: "Daily Needs",
    items: [
      { name: "Movies", img: "path/to/movies.jpg" },
      { name: "Grocery", img: "path/to/grocery.jpg" },
      { name: "Electricians", img: "path/to/electrician.jpg" },
    ],
  },
];

const CategoryGrid = () => {
  return (
    <div className="category-grid">
      {categories.map((category, index) => (
        <div key={index} className="category">
          <h2>{category.title}</h2>
          <div className="category-items">
            {category.items.map((item, i) => (
              <div key={i} className="category-item">
                <img src={item.img} alt={item.name} className="category-image" />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
