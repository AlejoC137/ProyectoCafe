// Cálculo del costo total de un almuerzo estándar

// Ingredientes y cantidades para el almuerzo estándar (en gramos o unidades según corresponda)
const ingredientes_cantidades = {
    "Sopa de verduras": 15,  // 1 cucharada sopera
    "Crema de zanahoria": 15,  // 1 cucharada sopera
    "Pollo Pechuga Fileteada": 120,  // 120 gramos
    "Arroz Blanco Crudo": 200,  // 1 copa cocida (~50g crudo)
    "Lechuga": 50,  // Asumido (~1 porción estándar)
    "Rúcula": 30,  // Asumido (~1 porción estándar)
    "Tomate encurtido": 50,  // Asumido (~1 porción estándar)
    "Puré de papa": 100,  // Asumido (~media copa)
    "Salsa de vino o pesto": 20  // Asumido (~1 porción)
};

// Precios por unidad (COP por gramo o unidad)
const precios_por_unidad = {
    "Sopa de verduras": 16.8,
    "Crema de zanahoria": 16.8,
    "Pollo Pechuga Fileteada": 32,
    "Arroz Blanco Crudo": 4.578,
    "Lechuga": 0,  // Valor aproximado
    "Rúcula": 0,  // Valor aproximado
    "Tomate encurtido": 0,  // Valor aproximado
    "Puré de papa": 0,  // Valor aproximado
    "Salsa de vino o pesto": 0  // Valor aproximado
};

// Calcular el costo total de los ingredientes
let costo_total = 0;
for (const ingrediente in ingredientes_cantidades) {
    if (precios_por_unidad[ingrediente] !== undefined) {
        costo_total += precios_por_unidad[ingrediente] * ingredientes_cantidades[ingrediente];
    }
}

console.log("Costo total del almuerzo estándar:", costo_total, "COP");
