export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
};

export const products: Product[] = [
  {
    id: "1",
    title: "Contour Plus Diabetes Tiras reactivas",
    description:
      "Tiras reactivas para la medición de glucosa en sangre. Caja con 50 piezas. Marca Contour.",
    price: 332.0,
    category: "tirillas",
    image:
      "https://www.farmaciasanpablo.com.mx/medias/000000000000410042-M-1-1?context=bWFzdGVyfGltYWdlc3wyNDYwOXxpbWFnZS9qcGVnfGltYWdlcy9oNGYvaGVkLzExMTYyNDcwNjgxMTE4LmpwZ3xjNmZhZjM1NDk0MDhlYTIxYzAwZGMzZjEyMjFiMGZjYzEyMDk4ZTFiNmFkNDRlOGIyMzk0NTEwMDNjNmM1MDI4",
    stock: 50,
  },
  {
    id: "2",
    title: "Ozempic 1 Solución Pluma Prellenada",
    description:
      "Semaglutida 1.34 MG. Solución inyectable en pluma prellenada para el tratamiento de la diabetes.",
    price: 4128.0,
    category: "medicamentos",
    image:
      "https://www.farmaciasanpablo.com.mx/medias/000000000006400002-M-1-1?context=bWFzdGVyfGltYWdlc3wxMTM0MnxpbWFnZS9qcGVnfGltYWdlcy9oZTYvaGQ2LzExMTU5OTM0NTY2NDMwLmpwZ3wyZGM2YWNmM2ZjZTU2NjExMWUwOGZhODZiMGJiOGFlMTlhNWQ1MmU3NjQyYjFjZmNlMDdlZThkMmZjZWZjY2E2",
    stock: 20,
  },
  {
    id: "3",
    title: "Dapagliflozina 10 mg 28 Tabs Marca del Ahorro",
    description:
      "Dapagliflozina 10 mg, caja con 28 tabletas. Medicamento para el control de la diabetes.",
    price: 252.67,
    category: "medicamentos-orales",
    image:
      "https://www.fahorro.com/media/catalog/product/7/5/7506472807022_1.jpg",
    stock: 100,
  },
  {
    id: "4",
    title: "Glimepirida 2 mg con 30 tabletas Marca del Ahorro",
    description:
      "Glimepirida 2 mg, caja con 30 tabletas. Tratamiento oral para diabetes tipo 2.",
    price: 66.0,
    category: "medicamentos-orales",
    image:
      "https://www.fahorro.com/media/catalog/product/7/5/7506472802614_1_1.jpg",
    stock: 120,
  },
  {
    id: "5",
    title: "Pioglitazona 15 mg Oral 15 Tabs Marca del Ahorro",
    description:
      "Pioglitazona 15 mg, caja con 15 tabletas. Antidiabético oral.",
    price: 61.0,
    category: "medicamentos-orales",
    image:
      "https://www.fahorro.com/media/catalog/product/7/5/7506472800474_1.jpg",
    stock: 80,
  },
  {
    id: "6",
    title: "Dispositivo de Punción 1 Pieza Marca del Ahorro",
    description:
      "Dispositivo de punción tipo pluma para extraer muestras de sangre capilar. 1 pieza.",
    price: 31.0,
    category: "accesorios",
    image:
      "https://www.fahorro.com/media/catalog/product/7/5/7506472801457_1_1.jpg",
    stock: 200,
  },
  {
    id: "7",
    title: "Lanceta 30 g 100 pz Marca del Ahorro",
    description:
      "Lancetas desechables estériles de 30 G. Caja con 100 piezas. Ideales para pruebas de glucosa.",
    price: 28.67,
    category: "accesorios",
    image:
      "https://www.fahorro.com/media/catalog/product/7/5/7506472801440_1_1.jpg",
    stock: 150,
  },
  {
    id: "8",
    title: "Tiras Prueba Glucosa 25 pz Marca del Ahorro",
    description:
      "Tiras reactivas para la prueba de glucosa en sangre. Caja con 25 piezas.",
    price: 53.0,
    category: "tirillas",
    image:
      "https://www.fahorro.com/media/catalog/product/7/5/7506472801433_1_1.jpg",
    stock: 300,
  },
  {
    id: "9",
    title: "Medidor de Glucosa 1 Pieza Marca del Ahorro",
    description:
      "Glucómetro para monitoreo de glucosa en sangre capilar. 1 pieza.",
    price: 107.67,
    category: "monitores-glucosa",
    image:
      "https://www.fahorro.com/media/catalog/product/7/5/7506472801426_1_1.jpg",
    stock: 60,
  },
  {
    id: "10",
    title: "Glibenclamida 5 mg Oral 50 tabletas Marca del Ahorro",
    description:
      "Glibenclamida 5 mg, caja con 50 tabletas. Antidiabético oral.",
    price: 19.33,
    category: "medicamentos-orales",
    image:
      "https://www.fahorro.com/media/catalog/product/7/5/7506472801648_1_1.jpg",
    stock: 250,
  },
  {
    id: "11",
    title: "Metformina/Glibenclamida 500/5 mg 60 tabletas Marca del Ahorro",
    description:
      "Metformina/Glibenclamida 500/5 mg, caja con 60 tabletas. Medicamento combinado para diabetes tipo 2.",
    price: 26.67,
    category: "medicamentos-orales",
    image:
      "https://www.fahorro.com/media/catalog/product/7/5/7506472801112_1_1.jpg",
    stock: 180,
  },
];

export const categories = [
  { id: "monitores-glucosa", name: "Monitores de Glucosa" },
  { id: "insulina", name: "Insulinas" },
  { id: "tirillas", name: "Tirillas Reactivas" },
  { id: "medicamentos-orales", name: "Medicamentos Orales" },
  { id: "accesorios", name: "Accesorios" },
  { id: "emergencias", name: "Emergencias Hipoglucémicas" },
  { id: "medicamentos", name: "Medicamentos" },
];
