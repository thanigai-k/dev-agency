export default function Hero({ children, data }) {
  return (
    <section className="the-hero pt-15 pb-15 is-dark is-common">
      <div className="container">
        <div className="maxw-md m-auto">
          <h1 className="text-xl mb-2">{data.title}</h1>
          <p className="text-md">{data.desc}</p>
        </div>
      </div>
    </section>
  );
}
