// importing styles
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="hrefs">
        <a href="/">Home</a>
        <a href="https://twitter.com/vayuvyastra?t=os7YGqxfkfxXnUmusfD5BQ&s=09">Twitter</a>
        <a href="https://instagram.com/vayuvyastra_official?igshid=YmMyMTA2M2Y=">Instagram</a>
        <a href="https://www.youtube.com/channel/UCfNK3-rCwDUUitiidx0q9dA">YouTube</a>
        <a href="https://github.com/vayuvyastra">GitHub</a>
      </div>
      <div className="trademark">© {year} Vayuvyastra.</div>
    </footer>
  );
};

export default Footer;
