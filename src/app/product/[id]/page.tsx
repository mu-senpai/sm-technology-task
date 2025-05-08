/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";  // Mark the component as a client-side component.

import React from "react";
import { notFound } from "next/navigation";
import { Chip, CircularProgress } from "@mui/material";
import { useGetProductByIdQuery, useGetProductsQuery } from "@/lib/features/apiSlice";
import { Product } from "@/app/(home)/components/ProductCard";
import ProductDetails from "./components/ProductDetails";
import RelatedProducts from "./components/RelatedProducts";

interface ProductPageProps {
  params: { id: any };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  // Fetch the product by ID
  const { data: productData, isLoading: productLoading, isError: productError } = useGetProductByIdQuery(params.id);

  // Fetch all products for related products
  const { data: allProducts, isLoading: allLoading, isError: allError } = useGetProductsQuery({});

  // If there’s an error, show the 404 page
  if (productError || allError) return notFound();

  if (productLoading || allLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <CircularProgress />
      </div>
    );

  // Get product details
  const product: Product = productData?.data;
  // Filter related products by categoryId
  const related = allProducts?.data?.filter(
    (p: Product) => p.categoryId === product.categoryId && p.id !== product.id
  );

  return (
    <main className="w-[90%] md:w-[83.33%] mx-auto py-28">
      {/* Display the product details */}
      <ProductDetails product={product} />

      {/* Description and Reviews (placeholder) */}
      <section className="mt-8">
        <div className="flex gap-2 mb-6">
          <Chip label="Description" sx={{ backgroundColor: "#749B3F", color: "white", borderRadius: "6px", cursor: "pointer" }} />
          <Chip label={`Reviews (0)`} sx={{ borderRadius: "6px", backgroundColor: "white", color: "gray", border: "1px solid gray", cursor: "pointer" }} />
        </div>
        <p className="w-full lg:w-[60%] bg-[#F4F6F6] p-6 rounded-lg text-xs md:text-sm xl:text-base leading-relaxed">
          {product?.description ?? "No description available for this product."}
        </p>
      </section>

      {/* Related Products */}
      {related?.length > 0 && <RelatedProducts products={related} />}
    </main>
  );
};

export default ProductPage;