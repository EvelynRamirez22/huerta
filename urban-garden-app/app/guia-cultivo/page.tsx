export default function GuiaCultivo() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 p-6">
      <div className="max-w-4xl mx-auto space-y-10">

        <header>
          <h1 className="text-3xl font-bold text-green-700 mb-2">
            🌱 Guía de Cultivo
          </h1>
          <p className="text-stone-600">
            Aprende a preparar composta para mejorar la calidad de tus cultivos.
          </p>
        </header>

        {/* SECCIÓN COMPOSTA */}
        <section className="bg-white p-6 rounded-xl shadow-sm space-y-6">
          <h2 className="text-2xl font-semibold text-green-800">
            Cómo preparar composta
          </h2>

          {/* Materiales */}
          <div>
            <h3 className="font-semibold text-lg mb-2">🧺 Materiales necesarios</h3>
            <ul className="list-disc list-inside text-stone-700 space-y-1">
              <li>Restos de frutas y verduras</li>
              <li>Hojas secas</li>
              <li>Ramas pequeñas</li>
              <li>Tierra</li>
              <li>Agua</li>
              <li>Un recipiente o espacio en el suelo</li>
            </ul>
          </div>

          {/* Pasos */}
          <div>
            <h3 className="font-semibold text-lg mb-2">📝 Pasos detallados</h3>
            <ol className="list-decimal list-inside text-stone-700 space-y-2">
              <li>
                Coloca una capa de materiales secos (hojas, ramas pequeñas).
              </li>
              <li>
                Agrega una capa de restos orgánicos (frutas y verduras).
              </li>
              <li>
                Añade un poco de tierra para activar los microorganismos.
              </li>
              <li>
                Humedece ligeramente la mezcla (sin encharcar).
              </li>
              <li>
                Repite las capas hasta llenar el recipiente.
              </li>
              <li>
                Revuelve la mezcla cada 1 o 2 semanas.
              </li>
              <li>
                En 2-3 meses tendrás composta lista para usar.
              </li>
            </ol>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-green-800 font-medium">
              💡 Consejo: Evita agregar carne, lácteos o aceites para prevenir malos olores.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}