// importing styles
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="hrefs">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Terms</a>
        <a href="#">Help</a>
        <a href="https://github.com/vayuvyastra">GitHub</a>
      </div>
      <div className="trademark">© {year} Vayuvyastra</div>
    </footer>
  );
};

export default Footer;
