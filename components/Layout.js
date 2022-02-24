import Link from "next/link";
import Footer from "./organisms/common/Footer";
import Header from "./organisms/common/Header";
import SEO from "./organisms/common/SEO";

export default function Layout({ children, seo, header, footer }) {
  return (
    <>
      <SEO data={seo} />
      <Header data={header} />
      <main className="pt-11">{children}</main>
      <Footer data={footer} />
    </>
  );
}
