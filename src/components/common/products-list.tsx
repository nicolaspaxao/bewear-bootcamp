"use client";

import { productTable, productVariantTable } from "@/db/schema";
import React from "react";
import ProductsItem from "./products-item";

interface ProductsListProps {
  title: string;
  products: (typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  })[];
}

const ProductsList = ({ title, products }: ProductsListProps) => {
  return (
    <div className="space-y-6">
      <h3 className="font-semibold px-5">{title}</h3>
      <div className="flex w-full gap-4 px-5 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        {products.map((product) => (
          <ProductsItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
