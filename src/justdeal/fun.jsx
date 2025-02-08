import React from "react";
import "./Fun.css";
import banquet from './banque.avif'
import bangle from './bangles.webp'
import glass from './glass.webp'
import nails from './handcare.avif'
import spa from './spa.webp'
import salon from './salons.webp'
import ac from './ac.avif'
import cars from './car.webp'
import bike from './bike.webp'
import movie from './movies.webp'
import grocery from './grocery.avif'
import electric from './electrician.webp'

const categories = [
  {
    title: "Wedding Requisites",
    items: [
      { name: "Banquet Halls", image: banquet },
      { name: "Bridal Requisite", image: bangle },
      { name: "Caterers", image: glass },
    ],
  },
  {
    title: "Beauty & Spa",
    items: [
      { name: "Beauty Parlours", image: nails },
      { name: "Spa & Massages", image: spa },
      { name: "Salons", image: salon },
    ],
  },
  {
    title: "Repairs & Services",
    items: [
      { name: "AC Service", image: ac },
      { name: "Car Service", image: cars },
      { name: "Bike Service", image: bike },
    ],
  },
  {
    title: "Daily Needs",
    items: [
      { name: "Movies", image: movie },
      { name: "Grocery", image: grocery },
      { name: "Electricians", image: electric },
    ],
  },
];

const fun = () => {
  return (
    <div className="container">
      {categories.map((category, index) => (
        <div key={index} className="category">
          <h2 className="category-title">{category.title}</h2>
          <div className="items">
            {category.items.map((item, idx) => (
              <div key={idx} className="item">
                <img src={item.image} alt={item.name} className="item-image" />
                <p className="item-name">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default fun;
