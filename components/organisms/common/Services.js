export default function Services({ children, className, data }) {
  const Cards = () => {
    return data.list.map((item, count) => {
      return (
        <li key={count}>
          <figure
            className="mb-3"
            dangerouslySetInnerHTML={{ __html: item.icon }}
          ></figure>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </li>
      );
    });
  };
  return (
    <section className={`services text-center ${className}`}>
      <div className="container">
        {children}
        <ul className="card grid col-3">
          <Cards />
        </ul>
      </div>
    </section>
  );
}
