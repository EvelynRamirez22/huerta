"use client"

import { useState } from "react"

type Zona = {
  nombre: string
  descripcion: string
  plantas: string[]
}

const zonas: Zona[] = [
  {
    nombre: "Zona Soleada",
    descripcion: "Recibe sol directo más de 6 horas al día.",
    plantas: ["Tomate", "Pimiento", "Lechuga", "Albahaca"],
  },
  {
    nombre: "Zona Parcialmente Sombreada",
    descripcion: "Recibe sol entre 3 y 6 horas diarias.",
    plantas: ["Espinaca", "Zanahoria", "Cebolla"],
  },
  {
    nombre: "Zona Húmeda",
    descripcion: "Área con mayor retención de agua.",
    plantas: ["Menta", "Apio", "Acelga"],
  },
]

export default function MapaPage() {
  const [zonaSeleccionada, setZonaSeleccionada] = useState<Zona | null>(null)

  return (
    <div className="min-h-screen bg-stone-50 p-6">
      <div className="max-w-5xl mx-auto space-y-8">

        <h1 className="text-3xl font-bold text-green-800">
          🗺️ Mapa de Zonas de Cultivo
        </h1>

        <p className="text-stone-600">
          Haz clic en una zona para conocer qué plantas se pueden sembrar allí.
        </p>

        {/* ZONAS */}
        <div className="grid md:grid-cols-3 gap-6">
          {zonas.map((zona) => (
            <div
              key={zona.nombre}
              onClick={() => setZonaSeleccionada(zona)}
              className="cursor-pointer bg-green-100 hover:bg-green-200 transition p-6 rounded-xl shadow-sm"
            >
              <h2 className="text-lg font-semibold text-green-900">
                {zona.nombre}
              </h2>
              <p className="text-sm text-green-800 mt-2">
                {zona.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* DETALLE */}
        {zonaSeleccionada && (
          <div className="bg-white p-6 rounded-xl shadow-md border border-green-200">
            <h2 className="text-2xl font-semibold text-green-800 mb-2">
              {zonaSeleccionada.nombre}
            </h2>
            <p className="text-stone-600 mb-4">
              {zonaSeleccionada.descripcion}
            </p>

            <h3 className="font-semibold mb-2">
              🌱 Plantas recomendadas:
            </h3>
            <ul className="list-disc list-inside text-stone-700 space-y-1">
              {zonaSeleccionada.plantas.map((planta) => (
                <li key={planta}>{planta}</li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </div>
  )
}