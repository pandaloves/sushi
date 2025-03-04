import "@/app/globals.css";
import { ProductsView } from "@/views/products-view";
import { ShopInfo } from "@/components/ShopInfo";
import { Hero } from "@/components/Hero";
import { SearchInput } from "@/components/SearchInput";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Hero />
      <SearchInput />
      <ProductsView />
      <ShopInfo />
      <Footer />
    </>
  );
}
