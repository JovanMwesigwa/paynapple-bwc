import { Products } from "@/data";
import InnerProductCard from "./product-card";

const AllProductsPage = () => {
  return (
    <div className="flex flex-col gap-y-6">
      {Products.map((product) => (
        <InnerProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default AllProductsPage;
