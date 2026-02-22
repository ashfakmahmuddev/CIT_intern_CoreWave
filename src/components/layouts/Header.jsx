import React from "react";
import Container from "../common/Container";
import Image from "../common/Image";
import logo from "/src/assets/logo.png";
import { Link } from "react-router";
import Button from "../common/Button";

const Header = () => {
  return (
    <div className="pt-6.5">
      <Container>
        <div className="flex items-center justify-between">
          <Image imgSrc={logo} />
          <div className="flex items-center gap-x-35.5">
            <ul className="flex items-center gap-x-11.25">
              <li className="text-[#1B1B1B] text-base font-medium hover:text-primary transition-all duration-400">
                <Link>Home</Link>
              </li>
              <li className="text-[#1B1B1B] text-base font-medium hover:text-primary transition-all duration-400">
                <Link>About</Link>
              </li>
              <li className="text-[#1B1B1B] text-base font-medium hover:text-primary transition-all duration-400">
                <Link>Portfolio</Link>
              </li>
              <li className="text-[#1B1B1B] text-base font-medium hover:text-primary transition-all duration-400">
                <Link>Services</Link>
              </li>
              <li className="text-[#1B1B1B] text-base font-medium hover:text-primary transition-all duration-400">
                <Link>Blog</Link>
              </li>
              <li className="text-[#1B1B1B] text-base font-medium hover:text-primary transition-all duration-400">
                <Link>Testimonial</Link>
              </li>
            </ul>
            <Button btnText={"Register"}/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
