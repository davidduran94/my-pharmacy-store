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
    title: "Monitores de Glucosa Accu-Chek Guide",
    description: "Monitor de glucosa con 100 mediciones, memoria incorporada y control de calidad avanzado. Incluye 100 tirillas reactivas.",
    price: 899.00,
    category: "monitores-glucosa",
    image: "/images/monitor-glucosa.jpg",
    stock: 45,
  },
  {
    id: "2",
    title: "Insulina Humalog 100 UI/mL",
    description: "Insulina rápida de acción para控制 de diabetes tipo 1 y 2. Vida útil extendida, fácil de administrar con pluma dosificadora.",
    price: 249.00,
    category: "insulina",
    image: "/images/insulina.jpg",
    stock: 120,
  },
  {
    id: "3",
    title: "Test strip Diastech 50 unidosis",
    description: "Tirillas reactivas para monitor de glucosa Diastech. Envase hermético de 50 unidades para máxima precisión.",
    price: 450.00,
    category: "tirillas",
    image: "/images/tirillas.jpg",
    stock: 200,
  },
  {
    id: "4",
    title: "Pluma de Insulina Toujeo 300 UI/mL",
    description: "Insulina长效 con duración de hasta 24 horas. Dosis ajustable en pasos de 1 UI. Envase de 5 plumas prellenadas.",
    price: 680.00,
    category: "insulina",
    image: "/images/pluma-insulina.jpg",
    stock: 75,
  },
  {
    id: "5",
    title: "Metformina 500 mg - 60 tabletas",
    description: "Medicamento oral para controlar la glucosa en sangre. Ideal para diabetes tipo 2. Presentación en tableta de liberación prolongada.",
    price: 180.00,
    category: "medicamentos-orales",
    image: "/images/metformina.jpg",
    stock: 300,
  },
  {
    id: "6",
    title: "Lancetas Accu-Chek Multicutter",
    description: "Lancetas estériles con 100 unidades. Diseño de 3 corte para menor dolor y mayor precisión en la toma de muestra.",
    price: 95.00,
    category: "accesorios",
    image: "/images/lancetas.jpg",
    stock: 500,
  },
  {
    id: "7",
    title: "Brazalete GlucoKing Pro",
    description: "Brazalete inteligente para monitoreo continuo de glucosa. Conexión Bluetooth y app móvil incluida.",
    price: 1299.00,
    category: "monitores-glucosa",
    image: "/images/brazalete.jpg",
    stock: 25,
  },
  {
    id: "8",
    title: "Insulina NovoRapid 100 UI/mL",
    description: "Insulina rápida de acción para control postprandial. Envase de 5 plumas de 3 mL cada una.",
    price: 265.00,
    category: "insulina",
    image: "/images/novorapid.jpg",
    stock: 90,
  },
  {
    id: "9",
    title: "Glucosa Oral 500 mg - 20 pastillas",
    description: "Suplemento de glucosa para hypoglycemia. Presentación en pastillas efervescentes con sabor a cítricos.",
    price: 120.00,
    category: "emergencias",
    image: "/images/glucosa-oral.jpg",
    stock: 150,
  },
  {
    id: "10",
    title: "Libreta de Registro Glucemia",
    description: "Cuaderno de registro para control diario de glucosa. Incluye tablas de referencia y consejos nutricionales.",
    price: 85.00,
    category: "accesorios",
    image: "/images/libreta.jpg",
    stock: 80,
  },
];

export const categories = [
  { id: "monitores-glucosa", name: "Monitores de Glucosa" },
  { id: "insulina", name: "Insulinas" },
  { id: "tirillas", name: "Tirillas Reactivas" },
  { id: "medicamentos-orales", name: "Medicamentos Orales" },
  { id: "accesorios", name: "Accesorios" },
  { id: "emergencias", name: "Emergencias Hipoglucémicas" },
];
