import React, { useState } from "react";

// import search from "./H-Logos/search.png";
// import heart from "./H-Logos/heart.png";
// import cell from "./H-Logos/cell.png";
// import user from "./H-Logos/user.png";
// import pin from "./H-Logos/pin.png";
// import plug from "./H-Logos/plug.png";
import "./design.css";
import "./design2.css";
import "./design3.css";




const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All") ;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("English");

  const languages = ["English", "हिंदी", "தமிழ்", "తెలుగు", "മലയാളം", "ಕನ್ನಡ"];



  return (
    <div className="header">
      <div className="top-header">
      <div className="head">
        <div className="logo">
          <img
            src="https://stimg.cardekho.com/pwa/img/carDekho-RepublicDay.svg"
            alt=""
          />
        </div>
        <div className="searchBar">
          <div className="all-opt">
          <div className={`dropdown ${isOpen ? "open" : ""}`}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        {selectedOption} ▼
      </button>
      <div className="dropdown-content">
        <div onClick={() => selectOption("All")}>All</div>
        <div onClick={() => selectOption("New")}>New</div>
        <div onClick={() => selectOption("Used")}>Used</div>
      </div>
    </div>
            <div className="search-logo">
              {/* <img src={search} alt="" /> */}
            </div>
          </div>
          <input type="text" placeholder="Search or Ask a Question" />
        </div>
        <div className="side-head">
        <div className="dropdown">
      <span className="dropdown-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {currentLanguage} ▼
      </span>
      {menuOpen && (
        <ul className="dropdown-menu">
          {languages.map((lang, index) => (
            <li
              key={index}
              className={lang === currentLanguage ? "selected" : ""}
              onClick={() => {
                setCurrentLanguage(lang);
                setMenuOpen(false);
              }}
            >
              {lang}
            </li>
          ))}
        </ul>
      )}
    </div>
    <FontAwesomeIcon icon="fa-thin fa-heart" />
          <div className="log-reg-but">
            {/* <img src={user} alt="" class="user" /> */}
            <button>Login / Register</button>
          </div>
        </div>
      </div>
      </div>
      <div className="buttom-header">
      <div className="navbar">
        <div className="nav">
          <div className="sec-nav">
            <a href="">NEW CARS
            <span>▼</span>
            </a>
          </div>
          <div className="sec-nav">
            <a href="">
              USED CARS <span>▼</span>
            </a>
          </div>
          <div className="sec-nav">
            <a href="">
              NEWS & REVIEWS <span>▼</span>
            </a>
          </div>
          <div className="sec-nav">
            <a href="">
              VIDEOS <span>▼</span>
            </a>
          </div>
        </div>

        <div className="select-city">
          {/* <img src={pin} alt="" /> */}
          <a href="">
            {" "}
            Select City <span>▼</span>
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Header;