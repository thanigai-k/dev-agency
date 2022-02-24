import Layout from "../components/Layout";
import HappyClients from "../components/organisms/common/HappyClients";
import Services from "../components/organisms/common/Services";
import Subscribe from "../components/organisms/common/Subscribe";
import TeamMembers from "../components/organisms/common/TeamMembers";
// import Hero from "../components/organisms/common/Hero";
import Hero from "../components/organisms/home/Hero";

export async function getStaticProps() {
  const res1 = await fetch("http://localhost:3000/data/common/header.json");
  const res2 = await fetch("http://localhost:3000/data/common/footer.json");
  const res3 = await fetch("http://localhost:3000/data/home.json");

  const data1 = await res1.json();
  const data2 = await res2.json();
  const data3 = await res3.json();
  const data = await { ...data1, ...data2, ...data3 };
  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
export default function index({ data }) {
  const seo = data.seo;
  const header = data.header;
  const footer = data.footer;
  const content = data.content;
  return (
    <Layout seo={seo} header={header} footer={footer}>
      <Hero data={content.hero} />
      <Services className={`pt-10 pb-10`} data={content.services}>
        <h2 className="text-lg mb-12">Our Powerful Features</h2>
      </Services>
      <HappyClients />
      <TeamMembers className={`pt-10 pb-10`} data={content.team}>
        <h2 className="text-lg mb-12">Meet The Team</h2>
      </TeamMembers>
      <Subscribe />
    </Layout>
  );
}
