

function calcularVFV(porcentajeArbitrario, porciones, ingredientes) {
  // Inicialización de variables
  let costoTotalPreparacion = 0;

  // 1. Calcular el Costo Total de Preparación (CTP) sumando el costo de cada ingrediente
  ingredientes.forEach(ingrediente => {
      costoTotalPreparacion += ingrediente.cantidad * ingrediente.valorPorUnidad;
  });

  // 2. Añadir el 5% de condimentos al CTP
  const costoCondimentos = costoTotalPreparacion * 0.05;
  costoTotalPreparacion += costoCondimentos;

  // 3. Calcular el CTP por porción
  const costoPorcion = costoTotalPreparacion / porciones;

  // 4. Calcular el Precio Potencial de Venta (PPV) usando la regla de tres
  const ppv = costoTotalPreparacion / (porcentajeArbitrario / 100);

  // 5. Añadir el índice inflacionario (supongamos 10% para este ejemplo)
  const indiceInflacionario = 0.10;
  const precioConInflacion = ppv + (ppv * indiceInflacionario);

  // 6. Añadir el impuesto de consumo del 8%
  const impuestoConsumo = 0.08;
  const valorFinalVenta = precioConInflacion + (precioConInflacion * impuestoConsumo);

  // 7. Calcular el porcentaje que representa el CTP dentro del VFV
  const porcentajeCTPenVFV = (costoTotalPreparacion / valorFinalVenta) * 100;

  // Resultado final
  return {
      costoTotalPreparacion,
      ppv,
      valorFinalVenta,
      porcentajeCTPenVFV
  };
}

// Ejemplo de uso
const ingredientes = [

  { id: 1, nombre: "Papa Nativa", cantidad: 250, unidades: "gr", valorPorUnidad: 6 },
  { id: 2, nombre: "Cebolla Blanca", cantidad: 100, unidades: "gr", valorPorUnidad: 4 },
  { id: 3, nombre: "Huevo", cantidad: 6, unidades: "un", valorPorUnidad: 599 },
  { id: 4, nombre: "Chorizo Español", cantidad: 15, unidades: "un", valorPorUnidad: 512 },
  { id: 5, nombre: "Chimichurri", cantidad: 75, unidades: "gr", valorPorUnidad: 102 }


];

// Ejecutar la función
const resultado = calcularVFV(45, 4, ingredientes);

// console.log(resultado);
