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
        <a
          className={successLink}
          href="https://github.com/ClintasaurusRex"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className={successLink}
          href="https://www.linkedin.com/in/clint-arneson-hiles-042bb0321"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className={successLink}
          href="mailto:clinthiles1992@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email Me
        </a>
      </div>
    </footer>
  );
};

export default Footer;
