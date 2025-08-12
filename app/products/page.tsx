import ProductsContainer from "@/components/products/ProductsContainer";

async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ layout?: string; search?: string }>;
}) {
  // const layout = searchParams.layout || "grid";
  // const search = searchParams.search || "";
  const { layout = "grid", search = "" } = await searchParams;
  return (
    <>
      <ProductsContainer layout={layout} search={search} />
    </>
  );
}
export default ProductsPage;
