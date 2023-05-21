import React from "react";
import '../styles/Footer.scss'
const Footer = () => {
  return (
    <footer>
      <div>
        <h1>TechyStar</h1>
        <p>@all right reserved</p>
      </div>

      <div>
        <h5>Follow Us</h5>
        <div>
          <a href="https://github.com/muskan-batra" target={"blank"}>
           Github
          </a>
          <a href="https://www.linkedin.com/in/muskan-batra-14a8591b2" target={"blank"}>
           Linkedin
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;