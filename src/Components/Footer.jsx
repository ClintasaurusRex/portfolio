import "./footer.css";

const Footer = () => {
  const successLink =
    "link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover";

  return (
    <footer className="footer-container">
      <p className={successLink} id="copywrite">
        © 2024 Clint Arneson-Hiles. All rights reserved.
      </p>
      <div className="footer-links">
        <a href="https://github.com/ClintasaurusRex" className={successLink}>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/clint-arneson-hiles-042bb0321" className={successLink}>
          LinkedIn
        </a>
        <a href="mailto:clinthiles1992@gmail.com" className={successLink}>
          Email Me
        </a>
      </div>
    </footer>
  );
};

export default Footer;
