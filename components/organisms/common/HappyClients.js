const data = [
  {
    number: "40",
    label: "Happy Clients",
  },
  {
    number: "160",
    label: "Completed Projects",
  },
  {
    number: "10M",
    label: "Transactions",
  },
  {
    number: "10000+",
    label: "Customers",
  },
];
export default function HappyClients() {
  const Lists = () => {
    return data.map((item, index) => {
      return (
        <h2 key={index}>
          <span className="number">{item.number}</span>
          <span className="label">{item.label}</span>
        </h2>
      );
    });
  };
  return (
    <section className="happy-clients pt-15 pb-15">
      <div className="container fx">
        <Lists />
      </div>
    </section>
  );
}
