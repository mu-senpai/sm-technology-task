"use client";

import React from "react";
import { notFound } from "next/navigation";
import { Chip, CircularProgress } from "@mui/material";
import { useGetProductByIdQuery, useGetProductsQuery } from "@/lib/features/apiSlice";
import { Product } from "@/app/(home)/components/ProductCard";
import ProductDetails from "./components/ProductDetails";
import RelatedProducts from "./components/RelatedProducts";

// Directly access params from the dynamic route
interface Params {
  id: string;
}

interface ProductPageProps {
  params: Params;
}

export default function ProductPage({ params }: ProductPageProps) {
  // Fetch the single product by ID
  const { data: productData, isLoading: productLoading, isError: productError } = useGetProductByIdQuery(params.id);

  // Fetch all products for related products
  const { data: allProducts, isLoading: allLoading, isError: allError } = useGetProductsQuery({});

  // If there's an error fetching data, show 404 page
  if (productError || allError) notFound();

  if (productLoading || allLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <CircularProgress />
      </div>
    );

  const product: Product = productData?.data;
  const related = allProducts?.data?.filter(
    (p: Product) => p.categoryId === product.categoryId && p.id !== product.id
  );

  return (
    <main className="w-[90%] md:w-[83.33%] mx-auto py-28">
      {/* ------- primary product details ------- */}
      <ProductDetails product={product} />

      {/* ------- description / reviews (placeholder) ------- */}
      <section className="mt-8">
        <div className="flex gap-2 mb-6">
          <Chip label="Description" sx={{ backgroundColor: "#749B3F", color: "white", borderRadius: "6px", cursor: "pointer" }} />
          <Chip label={`Reviews (0)`} sx={{ borderRadius: "6px", backgroundColor: "white", color: "gray", border: "1px solid gray", cursor: "pointer" }} />
        </div>
        <p className="w-full lg:w-[60%] bg-[#F4F6F6] p-6 rounded-lg text-xs md:text-sm xl:text-base leading-relaxed">
          {product?.description ?? "No description available for this product."}
        </p>
      </section>

      {/* ------- related products ------- */}
      {related?.length > 0 && <RelatedProducts products={related} />}
    </main>
  );
}