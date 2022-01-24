import { getProductsInCollection } from "../lib/shopify";
import ProductList from "../components/ProductList";

const index = ({ products }) => {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default index;

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products },
  };
}
