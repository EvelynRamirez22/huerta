import Image from "next/image"

export default function SemillasPage() {
  const semillas = [
    {
      nombre: "Tomate",
      tipo: "Hortaliza de verano",
      germinacion: "7 a 14 días",
      cuidado: "Necesita sol directo y riego frecuente sin encharcar.",
      imagen: "/semillas/tomate.jpg"
    },
    {
      nombre: "Lechuga",
      tipo: "Hortaliza de hoja",
      germinacion: "5 a 10 días",
      cuidado: "Prefiere clima fresco y riego constante.",
      imagen: "/semillas/lechuga.jpg"
    },
    {
      nombre: "Zanahoria",
      tipo: "Raíz",
      germinacion: "10 a 20 días",
      cuidado: "Suelo suelto y profundo, riego moderado.",
      imagen: "/semillas/zanahoria.jpg"
    },
    {
      nombre: "Albahaca",
      tipo: "Aromática",
      germinacion: "5 a 10 días",
      cuidado: "Mucho sol y riego regular.",
      imagen: "/semillas/albahaca.jpg"
    },
    {
      nombre: "Pepino",
      tipo: "Hortaliza de verano",
      germinacion: "7 a 12 días",
      cuidado: "Necesita clima cálido, suelo húmedo y buena exposición solar.",
      imagen: "/semillas/pepino.jpg"
    },
    {
      nombre: "Pimiento",
      tipo: "Hortaliza de fruto",
      germinacion: "8 a 15 días",
      cuidado: "Requiere mucho sol, riego moderado y suelo bien drenado.",
      imagen: "/semillas/pimiento.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-stone-50 p-6">
      <div className="max-w-5xl mx-auto space-y-8">

        <h1 className="text-3xl font-bold text-green-800">
          🌾 Semillas Disponibles
        </h1>

        <p className="text-stone-600">
          Aquí puedes ver las semillas disponibles para plantar y sus características.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {semillas.map((semilla) => (
            <div
              key={semilla.nombre}
              className="group bg-white rounded-xl border border-stone-200 overflow-hidden
                         transition-all duration-300 ease-in-out
                         hover:shadow-xl hover:-translate-y-2 hover:border-green-300"
            >
              <div className="flex flex-col md:flex-row">

                <div className="relative w-full md:w-1/3 h-48 md:h-auto overflow-hidden">
                  <Image
                    src={semilla.imagen}
                    alt={semilla.nombre}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 md:w-2/3">
                  <h2 className="text-xl font-semibold text-green-700 mb-2 group-hover:text-green-800 transition-colors">
                    {semilla.nombre}
                  </h2>

                  <p className="text-sm text-stone-600 mb-1">
                    <strong>Tipo:</strong> {semilla.tipo}
                  </p>

                  <p className="text-sm text-stone-600 mb-1">
                    <strong>Tiempo de germinación:</strong> {semilla.germinacion}
                  </p>

                  <p className="text-sm text-stone-600">
                    <strong>Cuidado:</strong> {semilla.cuidado}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}