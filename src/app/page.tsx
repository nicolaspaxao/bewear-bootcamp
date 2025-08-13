import Header from "@/components/common/header";
import ProductsList from "@/components/common/products-list";
import { db } from "@/db";
import Image from "next/image";

const Home = async () => {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
  });
  console.log(products);

  return (
    <>
      <Header />

      <div className="space-y-6">
        <div className="px-5">
          <Image
            src="/banner_01.png"
            alt="Leve a vida com estilo"
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>

        <ProductsList products={products} title="Mais vendidos" />
        <div className="px-5">
          <Image
            src="/banner_02.png"
            alt="Leve a vida com estilo"
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
