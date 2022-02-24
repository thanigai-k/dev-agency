export default function SEO({ data }) {
  return (
    <>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords} />
    </>
  );
}
