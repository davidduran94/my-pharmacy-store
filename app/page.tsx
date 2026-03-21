import { Carousel } from "components/carousel";
import { ThreeItemGrid } from "components/grid/three-items";
import Footer from "components/layout/footer";
import ProductGrid from "components/product-grid";

export const metadata = {
  title: "Diabetes Care - Tu Farmacia de Confianza",
  description:
    "Tienda especializada en productos para el control de la diabetes. Monitores, insulina, tirillas y más.",
  openGraph: {
    type: "website",
    title: "Diabetes Care - Tu Farmacia de Confianza",
    description:
      "Productos especializados para el control de la diabetes con envío a todo México.",
  },
};

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-emerald-50 to-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
            Controla tu Diabetes con Confianza
          </h1>
          <p className="text-lg md:text-xl text-emerald-700 max-w-2xl mx-auto mb-8">
            Tu tienda especializada en productos para el control de la diabetes.
            Monitores de glucosa, insulina, tirillas reactivas y más.
          </p>
        </div>
      </section>

      <ThreeItemGrid />
      <ProductGrid />
      <Carousel />
      <Footer />
    </>
  );
}
