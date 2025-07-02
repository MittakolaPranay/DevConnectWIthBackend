import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h3>DevConnect</h3>
        <p>Connecting developers to learn, teach, and grow together.</p>
        <div className="footer-links">
          <a href="/explore">Explore</a>
          <a href="/upload">Upload</a>
          <a href="/reels">Reels</a>
          <a href="/profile">Profile</a>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} DevConnect. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
