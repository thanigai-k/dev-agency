import Link from "next/link";
import Logo from "../../atoms/Logo";
import SocialNav from "../../molecules/SocialNav";

export default function Footer({ data }) {
  const CurveTop = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        fill="#070d18"
        className="footer-curve-top"
      >
        <path
          fillOpacity="1"
          d="M0,96L120,128C240,160,480,224,720,234.7C960,245,1200,203,1320,181.3L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    );
  };
  const List = ({ count = 5 }) => {
    return (
      <ul>
        {new Array(count).fill(0).map((i) => {
          return (
            <li key={i}>
              <Link href="/">
                <a className="link">Lorem</a>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <footer className="the-footer text-white mt-15 pb-10">
      <CurveTop />
      <div className="container fx">
        <div className="logo-wrap">
          <Logo />
          <p className="mt-2 mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, id!
          </p>
          <SocialNav />
        </div>
        <nav className="main-nav fx">
          <List />
          <List />
          <List />
          <List count={4} />
        </nav>
      </div>
    </footer>
  );
}
