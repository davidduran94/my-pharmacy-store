import Link from "next/link";
import { GridTileImage } from "./grid/tile";

const carouselProducts = [
  {
    title: "Monitor de Glucosa",
    price: 899.00,
    image: "/images/monitor-glucosa.jpg",
    description: "Control preciso de tu diabetes",
  },
  {
    title: "Insulina Humalog",
    price: 249.00,
    image: "/images/insulina.jpg",
    description: "Insulina rápida de acción",
  },
  {
    title: "Tirillas Diastech",
    price: 450.00,
    image: "/images/tirillas.jpg",
    description: "100 tirillas reactivas herméticas",
  },
  {
    title: "Pluma de Insulina",
    price: 680.00,
    image: "/images/pluma-insulina.jpg",
    description: "Dosis ajustable y fácil de usar",
  },
  {
    title: "Brazalete GlucoKing",
    price: 1299.00,
    image: "/images/brazalete.jpg",
    description: "Monitoreo continuo inteligente",
  },
];

export function Carousel() {
  return (
    <div className="w-full overflow-x-auto pb-6 pt-1">
      <ul className="flex animate-carousel gap-4">
        {carouselProducts.map((product, i) => (
          <li
            key={`${i}`}
            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
          >
            <Link href="#" className="relative h-full w-full">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
