import React from "react";
import { BsFillSuitDiamondFill } from "react-icons/bs";
import { GoPrimitiveSquare } from "react-icons/go";

function NavigationDots({ active }) {
  console.log(active);
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "contact"].map((item, index) => (
        // eslint-disable-next-line
        <a href={`#${item}`} key={item + index} className="app__navigation-dot">
          {active === item ? <GoPrimitiveSquare /> : <BsFillSuitDiamondFill />}
        </a>
      ))}
    </div>
  );
}

export default NavigationDots;
