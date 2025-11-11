import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} M-App. All rights reserved.</p>
      <div className="footer-links">
        <a href="#">About</a>
        <a href="#">Privacy</a>
        <a href="#">Contact</a>
      </div>
    </footer>
  );
}
