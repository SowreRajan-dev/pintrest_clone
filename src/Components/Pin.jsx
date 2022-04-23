import React from "react";

function Pin({ pinSize, name, link, imageSrc }) {
  return (
    <div className={`pin ${pinSize}`}>
      <img className="mainPic" src={imageSrc} alt="" />
      <div className="content">
        <h3>{name}</h3>
        <div className="search">
          <a href={link}>
            <img src="/Images/rightArrow.png" alt="search-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Pin;
