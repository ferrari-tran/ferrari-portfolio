import React from "react";
import { Link } from "gatsby";
import { Title } from "../Core";
// import imgLogo from '../../assets/image/new/personal/Logo-trim-dark.png'

const Logo = ({ color = "front", height, className = "", ...rest }) => {
  return (
    <Link to="/" className={`${className}`} {...rest}>
      <Title color={color} variant="cardLg" className="mb-0">
        ferrari.
      </Title>
      {/* <img src={imgLogo} height={56} alt="Ferrari. Logo" /> */}
    </Link>
  );
};

export default Logo;
