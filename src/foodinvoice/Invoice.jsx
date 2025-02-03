import React from "react";
import './design.css';
import vegburger from './veg burger.png';
import meat from './meatburger.png';
import cheese from './cheese.png';
import visa from './visa.png';
import paytem from './paytem.png';
import hdfc from './hdfc.png';
import fly from './bksah.png';




const Invoice = () => {
  return (
    <div className="right-sidebar p-4 bg-gray-100 rounded-lg shadow-lg w-80">
      <div className="invoice">
        <div className="invoice-heading mb-4">
          <h2 className="text-xl font-bold">Invoice</h2>
        </div>
        <div className="burger-section space-y-4">
          {[
            { img: vegburger, name: "Vegetable Burger", price: "$25" },
            { img: meat, name: "Meat Burger", price: "$28" },
            { img: cheese, name: "Cheese Burger", price: "$32" },
          ].map((burger, index) => (
            <div key={index} className="variety-burger flex items-center space-x-3">
              <img src={burger.img} alt={burger.name} className="w-12 h-12 rounded" />
              <div className="burger-heading">
                <h2 className="text-lg font-semibold">{burger.name}</h2>
                <span className="text-gray-700">{burger.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="payment mt-6">
        <div className="payment-summary mb-4">
          <h2 className="text-lg font-bold">Payment Summary</h2>
          <div className="sub-total flex justify-between">
            <span>Sub Total</span>
            <span><b>$85</b></span>
          </div>
          <div className="sub-total flex justify-between">
            <span>Tax</span>
            <span>-$6</span>
          </div>
        </div>
        <div className="tot-payment">
          <div className="total-payment flex justify-between font-bold">
            <span><b>Total Payment</b></span>
            <span><b>$79</b></span>
          </div>
          <div className="payment-method mt-2">
            <span className="text-gray-700">Payment Method</span>
          </div>
        </div>
        <div className="payment-logo grid grid-cols-2 gap-2 mt-4">
          {[{img:fly ,name:fly},{img:paytem},{img:visa},{img:hdfc}] .map((img, index) => (
            <div key={index} className="flex justify-center">
              <img src={'visa.png'} alt="Payment Method" className="w-12 h-8" />
            </div>
          ))}
        </div>
      </div>
      
      <div className="place-order mt-6">
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg shadow-lg hover:bg-blue-600">
          Place An Order Now
        </button>
      </div>
    </div>
  );
};

export default Invoice;