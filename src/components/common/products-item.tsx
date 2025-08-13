"use client";

import { productTable, productVariantTable } from "@/db/schema";
import { formartCentsToBRL } from "@/helpers/money";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductsItemProps {
  product: typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  };
}

const ProductsItem = ({ product }: ProductsItemProps) => {
  const firstVariant = product.variants[0];
  return (
    <Link href="/" className="flex flex-col gap-4">
      <Image
        src={firstVariant.imageUrl}
        alt={firstVariant.name}
        width={200}
        height={200}
        className="rounded-3xl"
      />
      <div className="flex flex-col gap-1 max-w-[200px]">
        <p className="truncate text-sm font-medium">{product.name}</p>
        <p className="text-muted-foreground truncate text-xs font-medium">
          {product.description}
        </p>

        <p className="truncate text-sm font-semibold">
          {formartCentsToBRL(firstVariant.priceInCents)}
        </p>
      </div>
    </Link>
  );
};

export default ProductsItem;
