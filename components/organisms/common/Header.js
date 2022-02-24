import Link from "next/link";
import Logo from "../../atoms/Logo";
import SubscribeInput from "../../molecules/SubscribeInput";
export default function Header({ data }) {
  const MainNav = () => {
    return data.mainNav.map((item, index) => {
      return item.isExternal ? (
        <a
          key={index}
          href={item.href}
          className="link has-underline"
          target={`_blank`}
          rel={`noreferrer`}
        >
          {item.text}
        </a>
      ) : (
        <Link key={index} href={item.href}>
          <a className="link has-underline">{item.text}</a>
        </Link>
      );
    });
  };
  return (
    <header className="the-header is-fixed p-3">
      <div className="container fx fx--ai-c">
        <Logo />
        <nav className="fx fx--ai-c">
          <MainNav />
          <Link href={data.login.href}>
            <a className="btn-outline">
              <span>{data.login.text}</span>
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
