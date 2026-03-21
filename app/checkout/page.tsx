"use client";

import { useState } from "react";

export default function CheckoutPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg text-center">
          <h2 className="text-3xl font-extrabold text-emerald-600">
            ¡Pago Exitoso!
          </h2>
          <p className="text-gray-600 mt-2">
            Tu pedido ha sido procesado correctamente.
          </p>
          <a
            href="/"
            className="mt-6 inline-block w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700"
          >
            Volver a la tienda
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Pasarela de Pago
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Completa tu información para finalizar la compra.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label htmlFor="card-number" className="sr-only">
                Número de Tarjeta
              </label>
              <input
                id="card-number"
                name="card-number"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                placeholder="Número de Tarjeta"
              />
            </div>
            <div className="flex gap-4 mb-4">
              <div className="w-1/2">
                <label htmlFor="expiry-date" className="sr-only">
                  Fecha de Expiración
                </label>
                <input
                  id="expiry-date"
                  name="expiry-date"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                  placeholder="MM/AA"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="cvc" className="sr-only">
                  CVC
                </label>
                <input
                  id="cvc"
                  name="cvc"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                  placeholder="CVC"
                />
              </div>
            </div>
            <div>
              <label htmlFor="name" className="sr-only">
                Nombre en la tarjeta
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                placeholder="Nombre completo"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isProcessing}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                isProcessing
                  ? "bg-gray-400"
                  : "bg-emerald-600 hover:bg-emerald-700"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500`}
            >
              {isProcessing ? "Procesando..." : "Pagar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
