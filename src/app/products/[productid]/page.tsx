export default async function ProductPage({
  params,
}: {
  params: Promise<{ productid: string }>;
}) {
  const productid = (await params).productid;
  return (
    <>
      <h1>Details about the product {productid}</h1>
    </>
  );
}
