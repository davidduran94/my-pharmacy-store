import { products, categories } from "../data/products";
import { AddToCart } from "components/cart/add-to-cart";
import type { Product as ShopifyProduct } from "lib/shopify/types";

export default function ProductGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-emerald-900">
          Catálogo de Productos
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className="px-6 py-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-900 rounded-full transition-colors"
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-emerald-700 font-bold mb-2">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-xs text-gray-600 line-clamp-2 mb-3">
                  {product.description}
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-emerald-600 font-medium">
                    Stock: {product.stock}
                  </span>
                  <div className="flex-1 ml-4">
                    <AddToCart
                      product={
                        {
                          id: product.id,
                          handle: product.id,
                          availableForSale: product.stock > 0,
                          title: product.title,
                          description: product.description,
                          descriptionHtml: product.description,
                          options: [
                            {
                              id: "1",
                              name: "Title",
                              values: ["Default Title"],
                            },
                          ],
                          priceRange: {
                            maxVariantPrice: {
                              amount: product.price.toString(),
                              currencyCode: "MXN",
                            },
                            minVariantPrice: {
                              amount: product.price.toString(),
                              currencyCode: "MXN",
                            },
                          },
                          variants: [
                            {
                              id: product.id,
                              title: "Default Title",
                              availableForSale: product.stock > 0,
                              selectedOptions: [
                                { name: "Title", value: "Default Title" },
                              ],
                              price: {
                                amount: product.price.toString(),
                                currencyCode: "MXN",
                              },
                            },
                          ],
                          featuredImage: {
                            url: product.image,
                            altText: product.title,
                            width: 500,
                            height: 500,
                          },
                          images: [
                            {
                              url: product.image,
                              altText: product.title,
                              width: 500,
                              height: 500,
                            },
                          ],
                          seo: {
                            title: product.title,
                            description: product.description,
                          },
                          tags: [product.category],
                          updatedAt: new Date().toISOString(),
                        } as ShopifyProduct
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
