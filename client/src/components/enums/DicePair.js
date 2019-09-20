import React from "react";
import oneDie from "../../svgs/dice-six-faces-one.svg";
import twoDie from "../../svgs/dice-six-faces-two.svg";
import threeDie from "../../svgs/dice-six-faces-three.svg";
import fourDie from "../../svgs/dice-six-faces-four.svg";
import fiveDie from "../../svgs/dice-six-faces-five.svg";
import sixDie from "../../svgs/dice-six-faces-six.svg";

const DicePair = props => {
  let roll = props.number;
  let className = ({ className } = "dicePair");
  switch (roll) {
    case 2:
      return (
        <div className={className}>
          <img src={oneDie} alt="one-die" />
          <img src={oneDie} alt="one-die" />
        </div>
      );
    case 3:
      return (
        <div className={className}>
          <img src={oneDie} alt="one-die" />
          <img src={twoDie} alt="two-die" />
        </div>
      );
    case 4:
      return (
        <div className={className}>
          <img src={oneDie} alt="one-die" />
          <img src={threeDie} alt="three-die" />
        </div>
      );
    case 5:
      return (
        <div className={className}>
          <img src={oneDie} alt="one-die" />
          <img src={fourDie} alt="four-die" />
        </div>
      );
    case 6:
      return (
        <div className={className}>
          <img src={oneDie} alt="one-die" />
          <img src={fiveDie} alt="five-die" />
        </div>
      );
    case 7:
      return (
        <div className={className}>
          <img src={oneDie} alt="one-die" />
          <img src={sixDie} alt="six-die" />
        </div>
      );
    case 8:
      return (
        <div className={className}>
          <img src={fourDie} alt="four-die" />
          <img src={fourDie} alt="four-die" />
        </div>
      );
    case 9:
      return (
        <div className={className}>
          <img src={fiveDie} alt="five-die" />
          <img src={fourDie} alt="four-die" />
        </div>
      );
    case 10:
      return (
        <div className={className}>
          <img src={sixDie} alt="six-die" />
          <img src={fourDie} alt="four-die" />
        </div>
      );
    case 11:
      return (
        <div className={className}>
          <img src={sixDie} alt="six-die" />
          <img src={fiveDie} alt="five-die" />
        </div>
      );
    case 12:
      return (
        <div className={className}>
          <img src={sixDie} alt="six-die" />
          <img src={sixDie} alt="six-die" />
        </div>
      );
    default:
      return (
        <div className={className}>
          <img src={oneDie} alt="one-die" />
          <img src={oneDie} alt="one-die" />
        </div>
      );
  }
};

export default DicePair;
