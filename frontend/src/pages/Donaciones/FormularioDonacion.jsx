import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const FormularioDonacion = () => {
  const [monto, setMonto] = useState(25);

  return (
    <PayPalScriptProvider options={{ "client-id": "AVqTOrintl2LJeNnq8P9vszJXgaDIM1G0dHCfDbmTMNxvUg4HLU-WdThXBtj6W4AbDuWxF_jCOkdismq" }}>
      <section id="donar" className="max-w-3xl mx-auto bg-white text-gray-900 shadow-2xl rounded-xl p-10 mt-10">
        <h2 className="text-4xl font-bold text-center">Elige tu Monto</h2>

        <div className="flex justify-center mt-6 space-x-4">
          {[10, 25, 50, 100].map((cantidad) => (
            <button
              key={cantidad}
              className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all ${
                monto === cantidad ? "bg-green-500 text-white shadow-md scale-105" : "bg-gray-200 hover:bg-green-200"
              }`}
              onClick={() => setMonto(cantidad)}
            >
              ${cantidad}
            </button>
          ))}
        </div>

        <div className="mt-6">
          <input
            type="number"
            className="w-40 p-3 border rounded-lg text-gray-700 text-center shadow-sm focus:ring-2 focus:ring-green-500"
            placeholder="Otra cantidad"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
          />
        </div>

        <div className="mt-6">
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: monto.toString(),
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                alert(`Gracias, ${details.payer.name.given_name}, por donar $${monto}! 🎉`);
              });
            }}
          />
        </div>

        <p className="text-gray-500 text-sm mt-4">Pagos seguros con PayPal</p>
      </section>
    </PayPalScriptProvider>
  );
};

export default FormularioDonacion;