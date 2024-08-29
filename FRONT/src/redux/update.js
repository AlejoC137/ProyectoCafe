// falta americano cafe perteneceA:"6626fcc1e87e472d29434595",
// falta prensa francesa perteneceA:"66270f2ee87e472d29451924",
// falta coldbrew clasico perteneceA:"66271c9467d65f8eda078149",
// falta coldbrew leche perteneceA:"662720275aedf05c8b9831da",
// falta limonada perteneceA:"662720275aedf05c8b9831da",
// 
// function printRecipesInJSON() {


const recipesPROD =  [
    {
    nombre: "Espuma de Café",
    rendimiento_cantidad: "NaN",
    rendimiento_unidades: "NaN",
    rendimiento_porcion: "NaN",
    ingredientes: [
        { id: "66c6e75be722b9191cb1899a", nombre: "CAFE LIOFILIZADO", cantidad: "½", unidades: "copa" },
        { id: "NaN", nombre: "Agua", cantidad: "½", unidades: "copa" },
        { id: "66c6e75be722b9191cb18921", nombre: "Azucar blanca", cantidad: "½", unidades: "copa" }
    ],
    preparacion: [
        {
            orden: 0,
            proceso: "Según el rendimiento deseado, agregar de todos los ingredientes la misma cantidad al bowl de vidrio."
        },
        {
            orden: 1,
            proceso: "Batir con movimientos envolventes usando la batidora de mano e integrar bien la mezcla."
        },
        {
            orden: 2,
            proceso: "Finalizar cuando la espuma haya aumentado considerablemente su volumen, sea firme y se generen picos rectos en la punta de la batidora."
        },
        {
            orden: 3,
            proceso: "Embazar en un recipiente, marcar y guardar en la nevera de café."
        }
    ],
    emplatado: "Coca con tapa.",
    notas: [
        "Tener cuidado con las cantidades iniciales de ingredientes, ya que la espuma puede quintuplicar su tamaño."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"
},
{
    nombre: "Jarabe de Vainilla",
    rendimiento_cantidad: 1000,
    rendimiento_unidades: "ml",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "NaN", nombre: "Agua", cantidad: 1000, unidades: "ml" },
        { id: "66c6e75be722b9191cb18921", nombre: "Azucar blanca", cantidad: 250, unidades: "g" },
        { id: "66c6e75be722b9191cb1893b", nombre: "Esencia vainilla", cantidad: 50, unidades: "ml" }
    ],
    preparacion: [
        {
            orden: 0,
            proceso: "Juntar todos los ingredientes en una olla."
        },
        {
            orden: 1,
            proceso: "Integrarlos primero en frío para lograr una base más estable."
        },
        {
            orden: 2,
            proceso: "Llevarlos al fuego hasta que la mezcla comience a llegar a punto de ebullición."
        },
        {
            orden: 3,
            proceso: "Una vez en ebullición, bajar el fuego al mínimo durante 15 minutos."
        },
        {
            orden: 4,
            proceso: "Dejar enfriar, envasar y marcar."
        }
    ],
    emplatado: "Botella grande de vidrio y una botella pequeña para uso frecuente.",
    notas: [
        "El almacenamiento del jarabe se realiza en botellas de vidrio previamente limpias y secas."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"
},
{
    nombre: "Jarabe de Chai",
    rendimiento_cantidad: 1000,
    rendimiento_unidades: "ml",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "NaN", nombre: "Agua", cantidad: 1000, unidades: "ml" },
        { id: "66c6e75be722b9191cb18921", nombre: "Azucar blanca", cantidad: 400, unidades: "g" },
        { id: "66c6e75be722b9191cb1899b", nombre: "TE CHAI", cantidad: 250, unidades: "g" },
        { id: "66c6e75be722b9191cb1892e", nombre: "Canela Molida Tarro", cantidad: 2.5, unidades: "g" }
    ],
    preparacion: [
        {
            orden: 0,
            proceso: "Juntar todos los ingredientes en una olla."
        },
        {
            orden: 1,
            proceso: "Agregar los ingredientes en seco (chai, canela y azúcar)."
        },
        {
            orden: 2,
            proceso: "Añadir agua caliente a los ingredientes secos."
        },
        {
            orden: 3,
            proceso: "Llevar al fuego hasta que la mezcla llegue al punto de ebullición."
        },
        {
            orden: 4,
            proceso: "Una vez en ebullición, bajar el fuego al mínimo y dejar durante 15 minutos."
        }
    ],
    filtrado: [
        {
            orden: 0,
            proceso: "El jarabe debe filtrarse dos veces utilizando una servilleta de tela como filtro, empleando un V60 como base."
        }
    ],
    emplatado: "Botella grande de vidrio para almacenamiento en el enfriador, y una más pequeña para uso inmediato.",
    notas: [
        "El almacenamiento del jarabe se realiza en botellas de vidrio limpias y secas."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"
},
{
    nombre: "Jarabe de Chai Alternativo",
    rendimiento_cantidad: 1000,
    rendimiento_unidades: "ml",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "NaN", nombre: "Agua", cantidad: 900, unidades: "ml" },
        { id: "66c6e75be722b9191cb18921", nombre: "Azucar blanca", cantidad: 300, unidades: "g" },
        { id: "66c6e75be722b9191cb189ca", nombre: "Anis estrellado", cantidad: 9, unidades: "g" },
        { id: "66c6e75be722b9191cb189cb", nombre: "Clavo olor", cantidad: 1.5, unidades: "g" },
        { id: "66c6e75be722b9191cb1899b", nombre: "TE CHAI", cantidad: 25, unidades: "g" }
    ],
    preparacion: [
        {
            orden: 0,
            proceso: "Juntar todos los ingredientes en una olla."
        },
        {
            orden: 1,
            proceso: "Agregar los ingredientes en seco (anís estrellado, clavo, chai y azúcar)."
        },
        {
            orden: 2,
            proceso: "Añadir agua caliente a los ingredientes secos."
        },
        {
            orden: 3,
            proceso: "Llevar al fuego hasta que la mezcla llegue al punto de ebullición."
        },
        {
            orden: 4,
            proceso: "Una vez en ebullición, bajar el fuego al mínimo y dejar durante 15 minutos."
        }
    ],
    filtrado: [
        {
            orden: 0,
            proceso: "El jarabe debe filtrarse dos veces utilizando una servilleta de tela como filtro, empleando un V60 como base."
        }
    ],
    emplatado: "Botella grande de vidrio para almacenamiento en el enfriador, y una más pequeña para uso inmediato.",
    notas: [
        "El almacenamiento del jarabe se realiza en botellas de vidrio limpias y secas."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"
},
{
    nombre: "Jarabe Naranja-Panela",
    rendimiento_cantidad: 1000,
    rendimiento_unidades: "ml",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "66c6e75be722b9191cb189b0", nombre: "Jugo de naranja", cantidad: 200, unidades: "ml" },
        { id: "66c6e75be722b9191cb18982", nombre: "Panela Pulverizada", cantidad: 500, unidades: "g" },
        { id: "NaN", nombre: "Agua Caliente", cantidad: 800, unidades: "ml" },
        { id: "NaN", nombre: "Piel de Naranja", cantidad: 6, unidades: "unidades" }
    ],
    preparacion: [
        {
            orden: 0,
            proceso: "Verter en una olla las cantidades indicadas de agua caliente y panela."
        },
        {
            orden: 1,
            proceso: "Dejar reducir la mezcla a fuego medio-alto durante 15 minutos."
        },
        {
            orden: 2,
            proceso: "Bajar el fuego y dejar durante otros 15 minutos."
        },
        {
            orden: 3,
            proceso: "Retirar del fuego y dejar reposar hasta temperatura ambiente."
        },
        {
            orden: 4,
            proceso: "Agregar el zumo de naranja y revolver para integrar."
        },
        {
            orden: 5,
            proceso: "Sumergir las cáscaras de naranja en el jarabe."
        },
        {
            orden: 6,
            proceso: "Dejar reposar el jarabe con las cáscaras durante 15 minutos."
        },
        {
            orden: 7,
            proceso: "Filtrar con coladores metálicos, usando primero el de malla menos fina y luego el más fino."
        }
    ],
    emplatado: "Botella grande de vidrio etiquetada y guardada en el refrigerador.",
    notas: [],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"
},
{
    nombre: "Jarabe Romero y Limón Tahití",
    rendimiento_cantidad: 1000,
    rendimiento_unidades: "ml",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "NaN", nombre: "Agua", cantidad: 1000, unidades: "ml" },
        { id: "66c6e75be722b9191cb18921", nombre: "Azucar blanca", cantidad: 500, unidades: "g" },
        { id: "66c6e75be722b9191cb189b1", nombre: "Jugo de Limon", cantidad: 500, unidades: "ml" },
        { id: "66c6e75be722b9191cb1899f", nombre: "Romero", cantidad: 250, unidades: "g" }
    ],
    preparacion: [
        {
            orden: 0,
            proceso: "Verter en una olla las cantidades indicadas de agua, azúcar y romero."
        },
        {
            orden: 1,
            proceso: "Dejar reducir la mezcla a fuego medio-alto durante 15 minutos."
        },
        {
            orden: 2,
            proceso: "Bajar el fuego y dejar otros 15 minutos."
        },
        {
            orden: 3,
            proceso: "Retirar del fuego y dejar reposar hasta que llegue a temperatura ambiente."
        },
        {
            orden: 4,
            proceso: "Agregar el zumo de limón e integrar revolviendo."
        },
        {
            orden: 5,
            proceso: "Filtrar usando coladores metálicos, primero el de malla menos fina y luego el más fino."
        }
    ],
    emplatado: "Botella grande de vidrio etiquetada y guardada en el refrigerador.",
    notas: [],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"
},
{
    nombre: "Jarabe Flor de Jamaica",
    rendimiento_cantidad: 1000,
    rendimiento_unidades: "ml",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "66c6e75be722b9191cb1898c", nombre: "Flor de jamaica", cantidad: 40, unidades: "g" },
        { id: "66c6e75be722b9191cb18921", nombre: "Azucar blanca", cantidad: 250, unidades: "g" },
        { id: "NaN", nombre: "Agua caliente", cantidad: 1000, unidades: "ml" }
    ],
    preparacion: [
        {
            orden: 0,
            proceso: "Juntar todos los ingredientes en una olla."
        },
        {
            orden: 1,
            proceso: "Agregar primero los ingredientes en seco (Flor de Jamaica y azúcar)."
        },
        {
            orden: 2,
            proceso: "Agregar agua caliente para infusionar la Flor de Jamaica."
        },
        {
            orden: 3,
            proceso: "Llevar al fuego hasta que la mezcla llegue a ebullición."
        },
        {
            orden: 4,
            proceso: "Una vez en ebullición, bajar el fuego y mantenerlo durante 15 minutos."
        },
        {
            orden: 5,
            proceso: "Colar la Flor de Jamaica del líquido y repetir el proceso de nuevo."
        },

        {
            orden: 6,
            proceso: "Reservar la Flor de Jamaica para una segunda extracción después del primer filtrado."
        },
        {
            orden: 7,
            proceso: "Usar un colador de malla fina para filtrar."
        }
    ],
    emplatado: "Embotellar, etiquetar y almacenar en una botella de vidrio grande para el enfriador y una más pequeña para uso inmediato.",
    notas: [
        "El almacenamiento se realiza en botellas de vidrio limpias y secas."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"
},
{
    nombre: "Jarabe de Jengibre",
    rendimiento_cantidad: 1000,
    rendimiento_unidades: "ml",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "NaN", nombre: "Jengibre", cantidad: 200, unidades: "g" },
        { id: "66c6e75be722b9191cb18921", nombre: "Azucar blanca", cantidad: 400, unidades: "g" },
        { id: "NaN", nombre: "Agua caliente", cantidad: 1000, unidades: "ml" }
    ],
    preparacion: [
        {
            orden: 0,
            proceso: "Pelar y cortar el jengibre en pequeños trozos."
        },
        {
            orden: 1,
            proceso: "Dejar reposar el jengibre en un litro de agua caliente durante 15 minutos."
        },
        {
            orden: 2,
            proceso: "Agregar el agua infusionada con jengibre, el jengibre y el azúcar a la licuadora."
        },
        {
            orden: 3,
            proceso: "Licuar todos los ingredientes durante 5 minutos."
        },
        {
            orden: 4,
            proceso: "Colar toda la mezcla con un colador de malla fina."
        },
        {
            orden: 5,
            proceso: "Almacenar en un recipiente seco y limpio, y etiquetar."
        }
    ],
    emplatado: "Botella grande de vidrio.",
    notas: [
        "El almacenamiento del jarabe se realiza en botellas de vidrio previamente limpias y secas."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"
},
{
    nombre: "Prep Cold Brew",
    rendimiento_cantidad: 2000,
    rendimiento_unidades: "ml",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "66c6e75be722b9191cb18998", nombre: "CAFE VEGA", cantidad: 180, unidades: "g" },
        { id: "NaN", nombre: "Agua", cantidad: 2000, unidades: "ml" }
    ],
    preparacion: [
        { fase: "1", proceso: "Moler el café y hacer una preinfusión con 400 ml de agua caliente durante 20 minutos." },
        { fase: "2", proceso: "Añadir el resto del agua fría y dejar reposar 24h en un lugar seco." }
    ],
    emplatado: "Vaso de vidrio alto octogonal con hielo hasta el tope, verter 160 ml de Cold Brew.",
    notas: [
        "Antes de agregar el café a la canasta del portafiltros, este debe estar limpio y seco.",
        "Al momento de tampear, adoptar una postura óptima, con la muñeca recta y el codo formando 90 grados.",
        "La caída del espresso debe ser lenta y constante, asemejándose a una cola de ratón, delgada y larga.",
        "La crema debe ser sedosa, ligera y brillante, con sabores balanceados y un aroma suave y dulce."
    ],
 
     escrito: "Alejandro",
     revisado: "Melisa",
     actualizacion: "2024-08-24"
}








]


const recipesSERV =  [


    {
      
        nombre: "Espresso Sencillo",
        perteneceA: "6626facb67d65f8eda043ba9",
        rendimiento_cantidad: 30,
        rendimiento_unidades: "ml",
        rendimiento_porcion: 1,
        ingredientes: [
            { id: "66c6e75be722b9191cb18999", nombre: "CAFE LUCUS", cantidad: 16, unidades: "gr" },
        ],
        preparacion: [
            {
                orden: 0,
                proceso: "Buscar el portafiltros sencillo y tarar hasta tener 8-9 g en la cesta."
            },
            {
                orden: 1,
                proceso: "Tampear de manera uniforme el café, obteniendo una superficie plana y uniforme."
            },
            {
                orden: 2,
                proceso: "Purgar la ducha del grupo de la máquina, para evitar extracción de café viejo."
            },
            {
                orden: 3,
                proceso: "Extraer el espresso durante 20 segundos, obteniendo 30ml."
            }
        ],
        emplatado: "Pocillo pequeño blanco",
        notas: [
            "Antes de agregar el café a la canasta del portafiltros, este debe estar limpio y seco.",
            "Al momento de tampear, adoptar una postura óptima, con la muñeca recta y el codo formando 90 grados.",
            "La caída del espresso debe ser lenta y constante, asemejándose a una cola de ratón, delgada y larga.",
            "La crema debe ser sedosa, ligera y brillante, con sabores balanceados y un aroma suave y dulce."
        ],
     
         escrito: "Alejandro",
         revisado: "Melisa",
         actualizacion: "2024-08-24"
    },
    
    
    
    
    {
        nombre: "Cappuccino",
        perteneceA:"6621894f9a1f9b2725a83a11",
        rendimiento_cantidad: 190,
        rendimiento_unidades: "ml",
        rendimiento_porcion: 1,
        ingredientes: [
            { id: "66c6e75be722b9191cb18999", nombre: "CAFE LUCUS", cantidad: 16, unidades: "gr" },
            { id: "66c6e75be722b9191cb18948", nombre: "Leche entera", cantidad: 140, unidades: "ml" }
        ],
        preparacion: [
            {
                orden: 0,
                proceso: "Purgar la taza con un poco de agua y en caso de querer un cappuccino extra caliente, llenar toda la taza con agua y descartar posteriormente."
            },
            {
                orden: 1,
                proceso: "Extraer el espresso doble en una taza pequeña."
            },
            {
                orden: 2,
                proceso: "En la jarra espumadora verter 140ml de leche y texturizar con buena cantidad de aire, asegurándose de que esté homogénea."
            },
            {
                orden: 3,
                proceso: "Verter delicadamente la leche en el café, manteniendo un buen color en el vertido. Arte latte opcional."
            }
        ],
        emplatado: "Taza amarilla o azul con plato.",
        notas: [
            "Antes de agregar el café a la canasta del portafiltros, el portafiltros debe estar limpio y seco.",
            "Al tampear, adoptar una postura óptima, con la muñeca recta y el codo formando 90 grados.",
            "La caída del espresso debe ser lenta y constante, asemejándose a una cola de ratón.",
            "La crema debe ser sedosa, ligera y brillante, con sabores balanceados y aroma suave y dulce."
        ],
     
         escrito: "Alejandro",
         revisado: "Melisa",
         actualizacion: "2024-08-24"
    },
    {
        nombre: "Latte",
        perteneceA:"6626e70328ff431503adf5e1",
        rendimiento_cantidad: 260,
        rendimiento_unidades: "ml",
        rendimiento_porcion: 1,
        ingredientes: [
            { id: "66c6e75be722b9191cb18999", nombre: "CAFE LUCUS", cantidad: 16, unidades: "gr" },
            { id: "66c6e75be722b9191cb18948", nombre: "Leche entera", cantidad: 210, unidades: "ml" }
        ],
        preparacion: [
            {
                orden: 0,
                proceso: "Extraer el espresso doble en la taza grande."
            },
            {
                orden: 1,
                proceso: "Texturizar con poco aire 160 ml de leche, manteniendo muy homogénea la leche."
            },
            {
                orden: 2,
                proceso: "Mantener homogénea la leche y el café durante el vertido. Arte latte opcional."
            }
        ],
        emplatado: "Taza alta cóncava beige.",
        notas: [
            "Antes de agregar el café a la canasta del portafiltros, el portafiltros debe estar limpio y seco.",
            "Al tampear, adoptar una postura óptima, con la muñeca recta y el codo formando 90 grados.",
            "La caída del espresso debe asemejarse a una cola de ratón.",
            "La crema debe ser sedosa, ligera y brillante, con sabores balanceados y aroma suave y dulce."
        ],
     
         escrito: "Alejandro",
         revisado: "Melisa",
         actualizacion: "2024-08-24"
    },
    {
        nombre: "Chai-Latte",
        perteneceA: "663156efee36f4bbdd9e0bb7",
        rendimiento_cantidad: 260,
        rendimiento_unidades: "ml",
        rendimiento_porcion: 1,
        ingredientes: [
            { id: "66c6e75be722b9191cb189d9", nombre: "SIROPE DE CHAI", cantidad: 35, unidades: "ml" },
            { id: "66c6e75be722b9191cb18948", nombre: "Leche entera", cantidad: 210, unidades: "ml" },
            { id: "66c6e75be722b9191cb1892e", nombre: "Canela Molida Tarro", cantidad: 1, unidades: "pizca" }
        ],
        preparacion: [
            {
                orden: 0,
                proceso: "Purgar la taza con agua caliente si se desea un capuchino extra caliente."
            },
            {
                orden: 1,
                proceso: "Agregar 30 ml de agua caliente y 25 ml de sirope de chai, mezclar bien."
            },
            {
                orden: 2,
                proceso: "Medir 210 ml de leche en la jarra espumadora, agregar 10 ml de sirope de chai y texturizar."
            },
            {
                orden: 3,
                proceso: "Servir sobre la mezcla y decorar con una pizca de canela."
            }
        ],
        emplatado: "Taza alta cóncava beige.",
        notas: [
            "Mezclar el jarabe de chai con agua caliente para reactivar el sabor y ajustar la temperatura."
        ],
        escrito: "Alejandro",
         revisado: "Melisa",
         actualizacion: "2024-08-24"
    },
    {
        nombre: "Macchiato",
        perteneceA: "662d3438e59a957ac11670e9",
        rendimiento_cantidad: 45,
        rendimiento_unidades: "ml",
        rendimiento_porcion: 1,
        ingredientes: [
            { id: "66c6e75be722b9191cb18999", nombre: "CAFE LUCUS", cantidad: 16, unidades: "gr" },
            { id: "66c6e75be722b9191cb18948", nombre: "Leche entera", cantidad: 10, unidades: "ml" }
        ],
        preparacion: [
            {
                orden: 0,
                proceso: "Extraer el espresso doble en el vaso de cristal pequeño."
            },
            {
                orden: 1,
                proceso: "Verter cuidadosamente la espuma de leche sobre el espresso, asegurándose que la espuma quede en la superficie."
            }
        ],
        emplatado: "Vaso de cristal pequeño de doble pared.",
        notas: [
            "Antes de agregar el café a la canasta del portafiltros, el portafiltros debe estar limpio y seco.",
            "Al tampear, adoptar una postura óptima, con la muñeca recta y el codo formando 90 grados.",
            "La crema debe ser sedosa, ligera y brillante, con sabores balanceados y aroma suave y dulce."
        ],
     
         escrito: "Alejandro",
         revisado: "Melisa",
         actualizacion: "2024-08-24"
    },
    {
        nombre: "Espresso Cubano",
        rendimiento_cantidad: 60,
        rendimiento_unidades: "ml",
        rendimiento_porcion: 1,
        ingredientes: [
            { id: "66c6e75be722b9191cb18999", nombre: "CAFE LUCUS", cantidad: 16, unidades: "gr" },
            { id: "66c6e75be722b9191cb18982", nombre: "Panela Pulverizada", cantidad: 5, unidades: "gr" },
            { id: "66c6e75be722b9191cb1892e", nombre: "Canela Molida Tarro", cantidad: 1, unidades: "pizca" }
        ],
        preparacion: [
            {
                orden: 0,
                proceso: "Agregar 5 g de panela a una taza blanca cuadrada."
            },
            {
                orden: 1,
                proceso: "Mientras se extrae el espresso, revolver vigorosamente con una cucharita."
            },
            {
                orden: 2,
                proceso: "Una vez extraído el espresso, continuar revolviendo hasta disolver toda la panela."
            },
            {
                orden: 3,
                proceso: "Adicionar una pizca de canela en polvo en el tope de la bebida y servir."
            }
        ],
        emplatado: "Taza blanca cuadrada.",
        notas: [
            "Antes de agregar el café a la canasta del portafiltros, el portafiltros debe estar limpio y seco.",
            "Al tampear, adoptar una postura óptima, con la muñeca recta y el codo formando 90 grados.",
            "La caída del espresso debe ser lenta y constante, asemejándose a una cola de ratón."
        ],
     
         escrito: "Alejandro",
         revisado: "Melisa",
         actualizacion: "2024-08-24"
    },
    {
        nombre: "Latte Vainilla",
        rendimiento_cantidad: 220,
        rendimiento_unidades: "ml",
        rendimiento_porcion: 1,
        ingredientes: [
            { id: "66c6e75be722b9191cb18999", nombre: "CAFE LUCUS", cantidad: 16, unidades: "gr" },
            { id: "66c6e75be722b9191cb18948", nombre: "Leche entera", cantidad: 160, unidades: "ml" },
            { id: "66c6e75be722b9191cb189d8", nombre: "SIROPE DE VAINILLA", cantidad: 15, unidades: "ml" }
        ],
        preparacion: [
            {
                orden: 0,
                proceso: "Extraer el espresso doble en la taza grande."
            },
            {
                orden: 1,
                proceso: "Agregar 15 ml de jarabe de vainilla al espresso doble y mezclar hasta obtener una base lisa y uniforme."
            },
            {
                orden: 2,
                proceso: "Texturizar con poco aire 160 ml de leche, manteniéndola homogénea."
            },
            {
                orden: 3,
                proceso: "Verter la leche homogénea sobre la mezcla de café, arte latte opcional."
            }
        ],
        emplatado: "Taza alta beige.",
        notas: [
            "Antes de agregar el café a la canasta del portafiltros, este debe estar limpio y seco.",
            "Al tampear, adoptar una postura óptima, con la muñeca recta y el codo formando 90 grados.",
            "La caída del espresso debe ser lenta y constante, asemejándose a una cola de ratón.",
            "La crema debe ser sedosa, ligera y brillante, con sabores balanceados y aroma suave y dulce."
        ],
     
         escrito: "Alejandro",
         revisado: "Melisa",
         actualizacion: "2024-08-24"
    },
    {
        nombre: "Chai-Chino",
        perteneceA:"662705ed67d65f8eda054a3a",
        rendimiento_cantidad: 190,
        rendimiento_unidades: "ml",
        rendimiento_porcion: 1,
        ingredientes: [
            { id: "66c6e75be722b9191cb18999", nombre: "CAFE LUCUS", cantidad: 16, unidades: "gr" },
            { id: "66c6e75be722b9191cb189d9", nombre: "SIROPE DE CHAI", cantidad: 20, unidades: "ml" },
            { id: "66c6e75be722b9191cb18948", nombre: "Leche entera", cantidad: 140, unidades: "ml" },
            { id: "66c6e75be722b9191cb1892e", nombre: "Canela Molida Tarro", cantidad: 1, unidades: "pizca" }
        ],
        preparacion: [
            {
                orden: 0,
                proceso: "Extraer el espresso doble en la taza alta beige."
            },
            {
                orden: 1,
                proceso: "Verter 20 ml de jarabe de chai en el espresso y mezclar hasta obtener una base homogénea."
            },
            {
                orden: 2,
                proceso: "Añadir una pizca de canela sobre la mezcla, revolver para integrarla."
            },
            {
                orden: 3,
                proceso: "Texturizar 140 ml de leche y verter sobre la mezcla."
            }
        ],
        emplatado: "Taza alta beige.",
        notas: [
            "Antes de agregar el café, el portafiltros debe estar limpio y seco.",
            "Al tampear, adoptar una postura óptima con la muñeca recta y el codo formando 90 grados."
        ],
     
         escrito: "Alejandro",
         revisado: "Melisa",
         actualizacion: "2024-08-24"
    },
    {
        nombre: "Caro-Chino",
        perteneceA: "6627079367d65f8eda057a79",
        rendimiento_cantidad: 190,
        rendimiento_unidades: "ml",
        rendimiento_porcion: 1,
        ingredientes: [
            { id: "66c6e75be722b9191cb18999", nombre: "CAFE LUCUS", cantidad: 16, unidades: "gr" },
            { id: "66c6e75be722b9191cb189d1", nombre: "Salsa de caramelo", cantidad: 20, unidades: "ml" },
            { id: "66c6e75be722b9191cb18948", nombre: "Leche entera", cantidad: 140, unidades: "ml" }
        ],
        preparacion: [
            {
                orden: 0,
                proceso: "Extraer el espresso doble en la taza alta beige."
            },
            {
                orden: 1,
                proceso: "Añadir 10 ml de salsa de caramelo al espresso y mezclar."
            },
            {
                orden: 2,
                proceso: "Texturizar la leche con los 10 ml restantes de caramelo y verter."
            }
        ],
        emplatado: "Taza alta beige.",
        notas: [
            "Antes de agregar el café, el portafiltros debe estar limpio y seco.",
            "Al tampear, adoptar una postura óptima con la muñeca recta y el codo formando 90 grados."
        ],
     
         escrito: "Alejandro",
         revisado: "Melisa",
         actualizacion: "2024-08-24"
    },
    {
        nombre: "Moca-Chino",
        perteneceA:"662701c467d65f8eda04e152",
        rendimiento_cantidad: 190,
        rendimiento_unidades: "ml",
        rendimiento_porcion: 1,
        ingredientes: [
            { id: "66c6e75be722b9191cb18999", nombre: "CAFE LUCUS", cantidad: 16, unidades: "gr" },
            { id: "66c6e75be722b9191cb18930", nombre: "Chocolate cobertura", cantidad: 5, unidades: "gr" },
            { id: "66c6e75be722b9191cb1892f", nombre: "Cocoa en polvo", cantidad: 2.5, unidades: "gr" },
            { id: "66c6e75be722b9191cb18948", nombre: "Leche entera", cantidad: 130, unidades: "ml" }
        ],
        preparacion: [
            {
                orden: 0,
                proceso: "Extraer el espresso doble en la taza alta beige."
            },
            {
                orden: 1,
                proceso: "Añadir cocoa y salsa de chocolate a la leche y mezclar."
            },
            {
                orden: 2,
                proceso: "Añadir chuncks de chocolate al espresso sin revolver."
            },
            {
                orden: 3,
                proceso: "Texturizar la leche y verter sobre el espresso."
            },
            {
                orden: 4,
                proceso: "Decorar con salsa de chocolate."
            }
        ],
        emplatado: "Taza alta beige con bordes decorados con salsa de chocolate.",
        notas: [
            "Verter primero la leche condensada para lograr la división de densidades."
        ],
         escrito: "Alejandro",
         revisado: "Melisa",
         actualizacion: "2024-08-24"
    },
    {
        nombre: "Bombom",
        perteneceA:"6627097e28ff431503b26bdc",
        rendimiento_cantidad: 80,
        rendimiento_unidades: "ml",
        rendimiento_porcion: 1,
        ingredientes: [
            { id: "66c6e75be722b9191cb18999", nombre: "CAFE LUCUS", cantidad: 16, unidades: "gr" },
            { id: "66c6e75be722b9191cb1894c", nombre: "Leche Condenzada", cantidad: 30, unidades: "gr" }
        ],
        preparacion: [
            {
                orden: 0,
                proceso: "Verter la leche condensada en el vaso de cristal de doble pared."
            },
            {
                orden: 1,
                proceso: "Extraer el espresso doble encima de la leche condensada."
            }
        ],
        emplatado: "Vaso cristal pequeño de doble pared.",
        notas: [
            "Verter primero la leche condensada para lograr la división de densidades."
        ],
        escrito: "Alejandro",
        revisado: "Melisa",
        actualizacion: "2024-08-24"
    },
    {
        nombre: "Aeropress",
        perteneceA: "6627184867d65f8eda07221f",
        rendimiento_cantidad: 200,
        rendimiento_unidades: "ml",
        rendimiento_porcion: 1,
        ingredientes: [
            { id: "66c6e75be722b9191cb18999", nombre: "CAFE LUCUS", cantidad: 16, unidades: "gr" },
            { id: "NaN", nombre: "Agua", cantidad: 240, unidades: "ml" }
        ],
        preparacion: [
            {
                orden: 0,
                proceso: "Poner el filtro de papel en la tapa negra con agujeros, luego ajustarla en el receptor."
            },
            {
                orden: 1,
                proceso: "Colocar el conjunto sobre la taza deseada, purgar la taza con agua caliente, luego descartar dicha agua."
            },
            {
                orden: 2,
                proceso: "Verter el café y hacer pre-infusión con el doble del peso en agua. Esperar 30-40 segundos."
            }
        ],
        emplatado: "Taza amarilla o azul con plato.",
        notas: [
            "Limpiar bien el método y no dejarlo húmedo antes de guardarlo.",
            "Usar una molienda fina o media-fina."
        ],
        escrito: "Gustavo",
        revisado: "Alejandro",
        actualizacion: "2024-08-24"
    },
    
    {
        nombre: "V60",
        perteneceA:"66270b0d5aedf05c8b961ecb",
        rendimiento_cantidad: 200,
        rendimiento_unidades: "ml",
        rendimiento_porcion: 1,
        ingredientes: [
            { id: "66c6e75be722b9191cb18999", nombre: "CAFE LUCUS", cantidad: 16, unidades: "gr" },
            { id: "NaN", nombre: "Agua", cantidad: 240, unidades: "ml" }
        ],
        preparacion: [
            {
                orden: 0,
                proceso: "Doblar el filtro de papel adecuadamente para formar el cono óptimo para extraer el V60."
            },
            {
                orden: 1,
                proceso: "Purgar el filtro de papel con agua caliente, eliminando impurezas del papel."
            },
            {
                orden: 2,
                proceso: "Verter el café y hacer pre-infusión con el doble del peso en agua. Esperar 30-40 segundos."
            },
            {
                orden: 3,
                proceso: "Realizar dos vertidos adicionales: 80 ml hasta 1:30 min y luego hasta 200 ml."
            }
        ],
        emplatado: "Taza amarilla o azul con plato.",
        notas: [
            "El agua no debe superar una temperatura de 85 grados.",
            "La molienda utilizada es media."
        ],
        escrito: "Gustavo",
        revisado: "NaN",
        actualizacion: "2024-08-24"
    },
    {
        nombre: "Espresso Escarchado",
        perteneceA: "66271b5ce87e472d29465a70",
        rendimiento_cantidad: "NaN",
        rendimiento_unidades: "ml",
        rendimiento_porcion: 1,
        ingredientes: [
            { id: "NaN", nombre: "Hielo espresso", cantidad: 3, unidades: "unidades" },
            { id: "NaN", nombre: "Espresso Sencillo", cantidad: 30, unidades: "ml" }
        ],
        preparacion: [
            {
                orden: 0,
                proceso: "Agregar 3 cubos de hielo de espresso en la licuadora junto con el espresso sencillo."
            },
            {
                orden: 1,
                proceso: "Licuar a velocidad baja hasta integrar los hielos y el espresso."
            }
        ],
        emplatado: "Vaso cristal grande doble pared.",
        notas: [
            "La consistencia debe ser homogénea y sin trozos grandes de hielo."
        ],
        escrito: "NaN",
        revisado: "NaN",
        actualizacion: "2024-08-24"
    },
    {
        nombre: "Americano Frío",
        perteneceA:"6626ffe55aedf05c8b950b6c",
        rendimiento_cantidad: 380,
        rendimiento_unidades: "ml",
        rendimiento_porcion: 1,
        ingredientes: [
            { id: "NaN", nombre: "Espresso doble", cantidad: 50, unidades: "ml" },
            { id: "66c6e75be722b9191cb18945", nombre: "Hielo", cantidad: "Tope del vaso", unidades: "NaN" },
            { id: "NaN", nombre: "Agua", cantidad: 240, unidades: "ml" }
        ],
        preparacion: [
            {
                orden: 0,
                proceso: "Llenar el vaso con hielo hasta el tope."
            },
            {
                orden: 1,
                proceso: "Agregar el agua fría al vaso con hielo."
            },
            {
                orden: 2,
                proceso: "Añadir el espresso doble."
            }
        ],
        emplatado: "Vaso de vidrio alto con base octogonal.",
        notas: [
            "El orden de los ingredientes es crucial para lograr una bebida fría con buenos aromas y lípidos de café."
        ],
        escrito: "NaN",
        revisado: "NaN",
        actualizacion: "2024-08-24"
    },

    {
    nombre: "Latte en Hielo de Espresso",
    perteneceA:"6622f2df5aedf05c8bfcda2b",
    rendimiento_cantidad: 300,
    rendimiento_unidades: "ml",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "NaN", nombre: "Hielo de espresso", cantidad: 6, unidades: "unidades" },
        { id: "66c6e75be722b9191cb18948", nombre: "Leche entera", cantidad: 200, unidades: "ml" }
    ],
    preparacion: [
        {
            orden: 0,
            proceso: "Verter 6 cubos de hielo en un vaso de vidrio liso."
        },
        {
            orden: 1,
            proceso: "Agregar 200 ml de leche fría y espumarla en una prensa francesa."
        },
        {
            orden: 2,
            proceso: "Servir la leche espumada en el vaso con hielo."
        }
    ],
    emplatado: "Vaso de vidrio largo y liso.",
    notas: [
        "La leche utilizada debe estar fría o ser sobrante de la texturización previa."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"
},

{
    nombre: "Latte Espuma de Café",
    perteneceA:"6622e42767d65f8eda68e812",
    rendimiento_cantidad: 300,
    rendimiento_unidades: "ml",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "NaN", nombre: "Hielos", cantidad: "Tope del vaso", unidades: "NaN" },
        { id: "66c6e75be722b9191cb18948", nombre: "Leche entera", cantidad: 220, unidades: "ml" },
        { id: "66c6e75be722b9191cb189da", nombre: "ESPUMA DE CAFE", cantidad: 35, unidades: "gr" }
    ],
    preparacion: [
        {
            orden: 0,
            proceso: "Cubrir las paredes del vaso con espuma de café utilizando una batidora manual."
        },
        {
            orden: 1,
            proceso: "Añadir hielo sin remover la decoración."
        },
        {
            orden: 2,
            proceso: "Agregar 200 ml de leche fría."
        },
        {
            orden: 3,
            proceso: "Añadir 35 gr de espuma de café encima y decorar con espresso en polvo."
        }
    ],
    emplatado: "Vaso de vidrio largo y liso.",
    notas: [
        "Reactivar la emulsión de la espuma de café antes de usarla para obtener una textura cremosa."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"
},
{
    nombre: "Cold Brew Naranja-Panela",
    rendimiento_cantidad: "NaN",
    rendimiento_unidades: "ml",
    rendimiento_porcion: "1",
    ingredientes: [
        { id: "66c6e75be722b9191cb189db", nombre: "COLD BREW BASE", cantidad: 150, unidades: "ml" },
        { id: "66c82603feaf7182c4c6da29", nombre: "Jarabe panela naranja", cantidad: 50, unidades: "ml" },
        { id: "66c6e75be722b9191cb18945", nombre: "Hielo", cantidad: 200, unidades: "gr" }
    ],
    preparacion: [
        {
            orden: 0,
            proceso: "Llenar el vaso octogonal con hielo hasta el tope."
        },
        {
            orden: 1,
            proceso: "Verter 150 ml de Cold Brew en el vaso con hielo."
        },
        {
            orden: 2,
            proceso: "Verter 50 ml de jarabe de panela-naranja en el vaso."
        },
        {
            orden: 3,
            proceso: "Verter el jarabe con una cuchara para crear capas de densidades."
        },
        {
            orden: 4,
            proceso: "Decorar con cítricos deshidratados."
        }
    ],
    emplatado: "Vaso de vidrio octogonal.",
    notas: [
        "El orden es importante: primero el hielo, luego el Cold Brew, y al final el jarabe de panela-naranja."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"
},
{
    nombre: "Cold Brew Té Verde",
    perteneceA: "66271d3267d65f8eda079428",
    rendimiento_cantidad: "NaN",
    rendimiento_unidades: "ml",
    rendimiento_porcion: "1",
    ingredientes: [
        { id: "66c6e75be722b9191cb189db", nombre: "COLD BREW BASE", cantidad: 150, unidades: "ml" },
        { id: "66c6e75be722b9191cb18977", nombre: "Te Limón Helado", cantidad: 50, unidades: "ml" },
        { id: "66c6e75be722b9191cb18945", nombre: "Hielo", cantidad: 200, unidades: "gr" }
    ],
    preparacion: [
        {
            orden: 0,
            proceso: "Llenar el vaso octogonal con hielo hasta el tope."
        },
        {
            orden: 1,
            proceso: "Verter 150 ml de Cold Brew en el vaso con hielo."
        },
        {
            orden: 2,
            proceso: "Preparar el té verde instantáneo: 25 gr de té verde instantáneo con 50 ml de agua caliente."
        },
        {
            orden: 3,
            proceso: "Verter 50 ml de té verde instantáneo en el vaso."
        },
        {
            orden: 4,
            proceso: "Verter el té con una cuchara para crear capas de densidades."
        },
        {
            orden: 5,
            proceso: "Decorar con cítricos deshidratados."
        }
    ],
    emplatado: "Vaso de vidrio octogonal.",
    notas: [
        "El orden es importante: primero el hielo, luego el Cold Brew, y al final el té verde instantáneo."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"
},
{
    nombre: "Malteada de Café",
    perteneceA: "6627387f67d65f8eda0aef11",
    rendimiento_cantidad: 380,
    rendimiento_unidades: "ml",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "66c6e75be722b9191cb1899a", nombre: "CAFE LIOFILIZADO", cantidad: 5, unidades: "g" },
        { id: "66c6e75be722b9191cb18986", nombre: "Helado", cantidad: 280, unidades: "g" },
        { id: "66c6e75be722b9191cb18948 ", nombre: "Leche entera", cantidad: 80, unidades: "ml" }
    ],
    preparacion: [
        {
            orden: 0,
            proceso: "Buscar la licuadora y agregar los 280 g de helado de vainilla."
        },
        {
            orden: 1,
            proceso: "Agregar los 80 ml de leche fría y licuar un poco para obtener una base uniforme."
        },
        {
            orden: 2,
            proceso: "Añadir los 5 g de café instantáneo a la mezcla y continuar licuando hasta obtener la bebida final."
        }
    ],
    emplatado: "Vaso de vidrio alto octogonal con un contraste de salsa de chocolate en las paredes internas.",
    notas: [
        "Calentar la cuchara con agua caliente para facilitar la extracción del helado.",
        "La leche debe ser fría o a temperatura ambiente.",
        "Licuar a velocidad baja para obtener una textura cremosa."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"
},
{
    nombre: "Affogato espuma de café",
    perteneceA: "6627313f67d65f8eda0a52ef",
    rendimiento_cantidad: "NaN",
    rendimiento_unidades: "NaN",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "66c6e75be722b9191cb189da", nombre: "ESPUMA DE CAFE", cantidad: 1, unidades: "cucharada generosa" },
        { id: "NaN", nombre: "Espresso doble", cantidad: 50, unidades: "ml" },
        { id: "66c6e75be722b9191cb18986", nombre: "Helado", cantidad: 100, unidades: "g" },
    ],
    preparacion: [
        {
            orden: 0,
            proceso: "Agregar 100 g de helado de vainilla al vaso."
        },
        {
            orden: 1,
            proceso: "Dejar un pequeño agujero en el centro del helado."
        },
        {
            orden: 2,
            proceso: "Extraer un espresso doble (PREPARACIÓN PREVIA)."
        },
        {
            orden: 3,
            proceso: "Verter el espresso doble, la espuma de café o el vino de café sobre el helado."
        }
    ],
    emplatado: "Vaso de vidrio grande doble pared.",
    notas: [
        "Primero debe servirse el helado en el vaso, de manera que el espresso derrita el helado.",
        "En caso de usar espuma de café o vino de café, el procedimiento es el mismo."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"
},
{
    nombre: "Affogato vino de café",
    perteneceA: "662733235aedf05c8b9a892b",
    rendimiento_cantidad: "NaN",
    rendimiento_unidades: "NaN",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "NaN", nombre: "Espresso doble", cantidad: 50, unidades: "ml" },
        { id: "66c6e75be722b9191cb18986", nombre: "Helado", cantidad: 100, unidades: "g" },
        { id: "66c6e75be722b9191cb1894e", nombre: "Licor - Vino de Café", cantidad: 35, unidades: "ml" }
    ],
    preparacion: [
        {
            orden: 0,
            proceso: "Agregar 100 g de helado de vainilla al vaso."
        },
        {
            orden: 1,
            proceso: "Dejar un pequeño agujero en el centro del helado."
        },
        {
            orden: 2,
            proceso: "Extraer un espresso doble (PREPARACIÓN PREVIA)."
        },
        {
            orden: 3,
            proceso: "Verter el espresso doble, la espuma de café o el vino de café sobre el helado."
        }
    ],
    emplatado: "Vaso de vidrio grande doble pared.",
    notas: [
        "Primero debe servirse el helado en el vaso, de manera que el espresso derrita el helado.",
        "En caso de usar espuma de café o vino de café, el procedimiento es el mismo."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"
},
{
    nombre: "Café Ópera",
    perteneceA: "6627370a28ff431503b791c2",
    rendimiento_cantidad: "NaN",
    rendimiento_unidades: "ml",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "66c6e75be722b9191cb1894e", nombre: "Licor - Vino de Café", cantidad: 60, unidades: "ml" },
        { id: "66c6e75be722b9191cb18986", nombre: "Helado", cantidad: 80, unidades: "ml" },
        { id: "66c6e75be722b9191cb18931", nombre: "Chocolate Salsa", cantidad: 20, unidades: "g" },
        { id: "NaN", nombre: "Espresso doble", cantidad: 50, unidades: "ml" }
    ],
    preparacion: [
        {
            orden: 0,
            proceso: "Verter todos los ingredientes (vino de café, helado, salsa de chocolate y espresso doble) en la licuadora."
        },
        {
            orden: 1,
            proceso: "Licuar todos los ingredientes a velocidad baja."
        },
        {
            orden: 2,
            proceso: "Licuar hasta obtener una textura densa y lisa."
        },
        {
            orden: 3,
            proceso: "Decorar el vaso con salsa de chocolate."
        },
        {
            orden: 4,
            proceso: "Servir la bebida y colocar una pequeña bola de helado encima."
        },
        {
            orden: 5,
            proceso: "Espolvorear chocolate rallado y agregar un poco de salsa de chocolate."
        }
    ],
    emplatado: "Vaso de vidrio alto octogonal.",
    notas: [
        "El proceso de mezcla debe realizarse a velocidad baja para lograr una textura espesa y uniforme."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"
},
{
    nombre: "Milo (Frío)",
    rendimiento_cantidad: 380,
    rendimiento_unidades: "ml",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "66c6e75be722b9191cb18952", nombre: "Milo", cantidad: 30, unidades: "g" },
        { id: "66c6e75be722b9191cb18948", nombre: "Leche entera", cantidad: 80, unidades: "ml" },
        { id: "66c6e75be722b9191cb1894d", nombre: "Leche en polvo", cantidad: 20, unidades: "g" },
        { id: "66c6e75be722b9191cb18945", nombre: "Hielo", cantidad: 100, unidades: "g" }
    ],
    preparacion: [
        {
            orden: 0,
            proceso: "Verter 35 g de Milo, 5 g de azúcar y la leche en la licuadora."
        },
        {
            orden: 1,
            proceso: "Mezclar todos los ingredientes en la licuadora a velocidad baja durante 3 minutos."
        },
        {
            orden: 2,
            proceso: "Verter la mezcla de Milo en el vaso indicado."
        },
        {
            orden: 3,
            proceso: "Agregar hielos en el vaso y rellenar con leche o bebida vegetal."
        }
    ],
    emplatado: "Vaso de vidrio alto octogonal.",
    notas: [
        "Usar una velocidad baja en la licuadora para obtener la base, mezclando alrededor de 3 minutos."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"
},
{
    nombre: "Soda Saborizada - Clasica",
    perteneceA:"662d4ef73aff3391b46bc3fd",
    rendimiento_cantidad: 380,
    rendimiento_unidades: "ml",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "66c82603feaf7182c4c6da56", nombre: "Mermelada de Frutos Rojos", cantidad: 30, unidades: "g" },
        { id: "66c6e75be722b9191cb1899c", nombre: "Soda", cantidad: 200, unidades: "ml" },
        { id: "66c6e75be722b9191cb18945", nombre: "Hielo", cantidad: 180, unidades: "g" }
    ],
    preparacion: [
        {
            orden: 0,
            proceso: "Agregar 10 g de saborizante de frutos rojos en el fondo del vaso."
        },
        {
            orden: 1,
            proceso: "Con una cuchara, esparcir el saborizante por las paredes internas del vaso."
        },
        {
            orden: 2,
            proceso: "Verter hielo hasta el tope del vaso."
        },
        {
            orden: 3,
            proceso: "Verter la cantidad de soda indicada, asegurando que no se rebase el vaso."
        },
        {
            orden: 4,
            proceso: "Agregar los 20 g restantes del saborizante de frutos rojos."
        }
,
        {
            orden: 5,
            proceso: "Untar el borde del vaso con mermelada de frutos rojos y micelar con azúcar."
        }
    ],
    emplatado: "Vaso de vidrio alto octogonal.",
    notas: [
        "La soda michelada puede prepararse exprimiendo 1 limón, michelando el borde con sal y luego agregando hielo, soda y una rodaja de limón fresco."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"
},
{
    nombre: "Soda Saborizada - Frutos Rojos",
    perteneceA:"66218af927333769bbeac7d8",
    rendimiento_cantidad: 380,
    rendimiento_unidades: "ml",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "66c82603feaf7182c4c6da56", nombre: "Mermelada de Frutos Rojos", cantidad: 30, unidades: "g" },
        { id: "66c6e75be722b9191cb1899c", nombre: "Soda", cantidad: 200, unidades: "ml" },
        { id: "66c6e75be722b9191cb18945", nombre: "Hielo", cantidad: 180, unidades: "g" }
    ],
    preparacion: [
        {
            orden: 0,
            proceso: "Agregar 10 g de saborizante de frutos rojos en el fondo del vaso."
        },
        {
            orden: 1,
            proceso: "Con una cuchara, esparcir el saborizante por las paredes internas del vaso."
        },
        {
            orden: 2,
            proceso: "Verter hielo hasta el tope del vaso."
        },
        {
            orden: 3,
            proceso: "Verter la cantidad de soda indicada, asegurando que no se rebase el vaso."
        },
        {
            orden: 4,
            proceso: "Agregar los 20 g restantes del saborizante de frutos rojos."
        }
,
        {
            orden: 5,
            proceso: "Untar el borde del vaso con mermelada de frutos rojos y micelar con azúcar."
        }
    ],
    emplatado: "Vaso de vidrio alto octogonal.",
    notas: [
        "La soda michelada puede prepararse exprimiendo 1 limón, michelando el borde con sal y luego agregando hielo, soda y una rodaja de limón fresco."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"
},
{
    nombre: "Soda Saborizada - Limón Romero",
    rendimiento_cantidad: 380,
    rendimiento_unidades: "ml",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "NaN", nombre: "Saborizante de Limón-Romero", cantidad: 30, unidades: "g" },
        { id: "66c6e75be722b9191cb1899c", nombre: "Soda", cantidad: 200, unidades: "ml" },
        { id: "66c6e75be722b9191cb18945", nombre: "Hielo", cantidad: 180, unidades: "g" }
    ],
    preparacion: [
        {
            orden: 0,
            proceso: "Agregar 10 g de saborizante de limón-romero en el fondo del vaso."
        },
        {
            orden: 1,
            proceso: "Con una cuchara, esparcir el saborizante por las paredes internas del vaso."
        },
        {
            orden: 2,
            proceso: "Verter hielo hasta el tope del vaso."
        },
        {
            orden: 3,
            proceso: "Verter la cantidad de soda indicada, asegurando que no se rebase el vaso."
        },
        {
            orden: 4,
            proceso: "Agregar los 20 g restantes del saborizante de limón-romero."
        },

        {
            orden: 5,
            proceso: "Flamear una ramita de romero y colocar en el vaso junto con una rodaja de limón deshidratado."
        }
    ],
    emplatado: "Vaso de vidrio alto octogonal.",
    notas: [
        "La soda michelada puede prepararse exprimiendo 1 limón, michelando el borde con sal y luego agregando hielo, soda y una rodaja de limón fresco."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"
},
{
    nombre: "Soda Saborizada - Naranja Panela",
    perteneceA: "6628262b28ff431503d69e55",
    rendimiento_cantidad: 380,
    rendimiento_unidades: "ml",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "66c82603feaf7182c4c6da29", nombre: "Jarabe Panela Naranja", cantidad: 30, unidades: "g" },
        { id: "66c6e75be722b9191cb1899c", nombre: "Soda", cantidad: 200, unidades: "ml" },
        { id: "66c6e75be722b9191cb18945", nombre: "Hielo", cantidad: 180, unidades: "g" }
    ],
    preparacion: [
        {
            orden: 0,
            proceso: "Agregar 10 g de saborizante de naranja-panela en el fondo del vaso."
        },
        {
            orden: 1,
            proceso: "Con una cuchara, esparcir el saborizante por las paredes internas del vaso."
        },
        {
            orden: 2,
            proceso: "Verter hielo hasta el tope del vaso."
        },
        {
            orden: 3,
            proceso: "Verter la cantidad de soda indicada, asegurando que no se rebase el vaso."
        },
        {
            orden: 4,
            proceso: "Agregar los 20 g restantes del saborizante de naranja-panela."
        },

        {
            orden: 5,
            proceso: "Decorar con una rodaja de naranja deshidratada."
        }
    ],
    emplatado: "Vaso de vidrio alto octogonal.",
    notas: [
        "La soda michelada puede prepararse exprimiendo 1 limón, michelando el borde con sal y luego agregando hielo, soda y una rodaja de limón fresco."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"
},
{
    nombre: "Guandolo - Clasico",
    perteneceA: "6628283f67d65f8eda2a1f61",
    rendimiento_cantidad: 380,
    rendimiento_unidades: "ml",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "66c6e75be722b9191cb18982", nombre: "Panela Pulverizada", cantidad: 30, unidades: "g" },
        { id: "NaN", nombre: "Agua caliente", cantidad: 90, unidades: "ml" },
        { id: "66c6e75be722b9191cb189b1", nombre: "Jugo de Limon", cantidad: 10, unidades: "ml" },
        { id: "66c6e75be722b9191cb189b0", nombre: "Jugo de naranja", cantidad: 20, unidades: "ml" },
        { id: "66c6e75be722b9191cb18945", nombre: "Hielo", cantidad: 180, unidades: "g" },
        { id: "66c6e75be722b9191cb189dc", nombre: "JARABE FLOR DE JAMAICA", cantidad: 30, unidades: "ml" }
    ],
    preparacion: [
        {
            orden: 0,
            proceso: "Agregar panela, zumo de naranja, zumo de limón y agua caliente a la licuadora."
        },
        {
            orden: 1,
            proceso: "Licuar durante 3 minutos a velocidad baja."
        },
        {
            orden: 2,
            proceso: "Llenar el vaso con hielo hasta el tope."
        },
        {
            orden: 3,
            proceso: "Verter la mezcla y agregar 30 ml de jarabe de flor de Jamaica."
        },
        {
            orden: 4,
            proceso: "Decorar con flores de Jamaica y cítricos deshidratados."
        }
    ],
    emplatado: "Vaso de vidrio alto octogonal.",
    notas: [
        "Al agregar el jarabe, usar una cuchara para verterlo suavemente y generar un contraste de colores."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"
},
{
    nombre: "Guandolo - Flor de Jamaica",
    perteneceA: "662828e75aedf05c8bb99d31",
    rendimiento_cantidad: 380,
    rendimiento_unidades: "ml",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "66c6e75be722b9191cb18982", nombre: "Panela Pulverizada", cantidad: 30, unidades: "g" },
        { id: "NaN", nombre: "Agua caliente", cantidad: 90, unidades: "ml" },
        { id: "66c6e75be722b9191cb189b1", nombre: "Jugo de Limon", cantidad: 10, unidades: "ml" },
        { id: "66c6e75be722b9191cb189b0", nombre: "Jugo de naranja", cantidad: 20, unidades: "ml" },
        { id: "66c6e75be722b9191cb18945", nombre: "Hielo", cantidad: 180, unidades: "g" },
        { id: "66c6e75be722b9191cb189dc", nombre: "JARABE FLOR DE JAMAICA", cantidad: 30, unidades: "ml" }
    ],
    preparacion: [
        {
            orden: 0,
            proceso: "Agregar panela, zumo de naranja, zumo de limón y agua caliente a la licuadora."
        },
        {
            orden: 1,
            proceso: "Licuar durante 3 minutos a velocidad baja."
        },
        {
            orden: 2,
            proceso: "Llenar el vaso con hielo hasta el tope."
        },
        {
            orden: 3,
            proceso: "Verter la mezcla y agregar 30 ml de jarabe de flor de Jamaica."
        },
        {
            orden: 4,
            proceso: "Decorar con flores de Jamaica y cítricos deshidratados."
        }
    ],
    emplatado: "Vaso de vidrio alto octogonal.",
    notas: [
        "Al agregar el jarabe, usar una cuchara para verterlo suavemente y generar un contraste de colores."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"
},
{
    nombre: "Guandolo - Jengibre",
    perteneceA: "662d1661262f5d8da175f77f",
    rendimiento_cantidad: 380,
    rendimiento_unidades: "ml",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "66c6e75be722b9191cb18982", nombre: "Panela Pulverizada", cantidad: 30, unidades: "g" },
        { id: "NaN", nombre: "Agua caliente", cantidad: 90, unidades: "ml" },
        { id: "66c6e75be722b9191cb189b1", nombre: "Jugo de Limon", cantidad: 10, unidades: "ml" },
        { id: "66c6e75be722b9191cb189b0", nombre: "Jugo de naranja", cantidad: 20, unidades: "ml" },
        { id: "66c6e75be722b9191cb18945", nombre: "Hielo", cantidad: 180, unidades: "g" },
        { id: "NaN", nombre: "Jarabe de Jengibre", cantidad: 30, unidades: "ml" }
    ],
    preparacion: [
        {
            orden: 0,
            proceso: "Agregar panela, zumo de naranja, zumo de limón y agua caliente a la licuadora."
        },
        {
            orden: 1,
            proceso: "Licuar durante 3 minutos a velocidad baja."
        },
        {
            orden: 2,
            proceso: "Llenar el vaso con hielo hasta el tope."
        },
        {
            orden: 3,
            proceso: "Verter la mezcla y agregar 30 ml de jarabe de Jengibre."
        },

        {
            orden: 4,
            proceso: "Decorar con jengibre rallado y cítricos deshidratados."
        }
    ],
    emplatado: "Vaso de vidrio alto octogonal.",
    notas: [
        "Si hay mezcla prehecha de jengibre, preguntar si está disponible antes de usarla."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"
},

{
    nombre: "Kombucha Per Té",
    perteneceA: "66302683be4a7f555d3757be",
    rendimiento_cantidad: 380,
    rendimiento_unidades: "ml",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "66c6e75be722b9191cb189bb", nombre: "Kombucha per te", cantidad: 170, unidades: "ml" },
        { id: "66c6e75be722b9191cb18945", nombre: "Hielo", cantidad: 180, unidades: "g" }
    ],
    preparacion: [
        {
            orden: 0,
            proceso: "Filtrar el scoby de la kombucha usando un colador de malla pequeño."
        },
        {
            orden: 1,
            proceso: "Llenar el vaso liso con hielo."
        },
        {
            orden: 2,
            proceso: "Servir la kombucha filtrada en el vaso."
        }
    ],
    emplatado: "Vaso de vidrio alto liso.",
    notas: [
        "Es importante retirar el scoby, ya que puede no ser agradable para algunos clientes. Se puede preguntar al cliente si desea conservarlo."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"
}
,
{
    nombre: "Jugos",
    perteneceA: "6630278c4ae404d1e44c3c44",
    rendimiento_cantidad: 380,
    rendimiento_unidades: "ml",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "NaN", nombre: "Pulpas de frutas (preparación previa)", cantidad: 2, unidades: "unidades" },
        { id: "NaN", nombre: "Agua", cantidad: 180, unidades: "ml" },
        { id: "66c6e75be722b9191cb18921", nombre: "Azucar blanca", cantidad: 20, unidades: "g" },
        { id: "66c6e75be722b9191cb18945", nombre: "Hielo", cantidad: 180, unidades: "g" }
    ],
    preparacion: [
        {
            orden: 0,
            proceso: "Tomar 2 unidades de la pulpa de fruta seleccionada."
        },
        {
            orden: 1,
            proceso: "Agregar el agua y licuar."
        },
        {
            orden: 2,
            proceso: "Colar el jugo para retirar impurezas."
        },
        {
            orden: 3,
            proceso: "Servir el jugo en un vaso con hielo hasta la mitad."
        }
    ],
    emplatado: "Vaso de vidrio alto octogonal.",
    notas: [
        "Preguntar al cliente si desea azúcar o endulzante antes de preparar el jugo."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"
}
,
{
    nombre: "Té Negro Arándanos & Miel",
    perteneceA: "6631550183285c04458ca3fd",
    rendimiento_cantidad: 280,
    rendimiento_unidades: "ml",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "66c6e75be722b9191cb18977", nombre: "Te Limon Helado", cantidad: 30, unidades: "g" },
        { id: "66c6e75be722b9191cb18920", nombre: "Arandanos Azules", cantidad: 10, unidades: "und" },
        { id: "66c82603feaf7182c4c6da4e", nombre: "Miel de abeja", cantidad: 15, unidades: "g" },
        { id: "NaN", nombre: "Agua caliente", cantidad: 150, unidades: "ml" },
        { id: "66c6e75be722b9191cb18945", nombre: "Hielo", cantidad: 180, unidades: "g" }
    ],
    preparacion: [
        {
            orden: 0,
            proceso: "En la jarra espumadora pequeña, agregar el té instantáneo, el agua caliente y 8 arándanos."
        },
        {
            orden: 1,
            proceso: "Macerar los arándanos y revolver la mezcla."
        },
        {
            orden: 2,
            proceso: "Dejar reposar la mezcla durante 3 minutos para extraer los sabores."
        },
        {
            orden: 3,
            proceso: "Filtrar la mezcla con un colador de tela, asegurándose de escurrir bien los arándanos."
        },
        {
            orden: 4,
            proceso: "Decorar el vaso con miel, llenarlo con hielo y verter la mezcla."
        },
        {
            orden: 5,
            proceso: "Completar con agua si es necesario y decorar con los arándanos restantes."
        }
    ],
    emplatado: "Vaso de vidrio alto liso.",
    notas: [
        "Para la versión caliente, agregar la miel a la mezcla, revolver y completar con más agua caliente. Servir en una taza alta recta beige con borde dorado."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"
},
{
    nombre: "Té Verde Limón & Miel",
    perteneceA: "663035922ac20d79532ac029",
    rendimiento_cantidad: 280,
    rendimiento_unidades: "ml",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "66c6e75be722b9191cb18977", nombre: "Te Limon Helado", cantidad: 30, unidades: "g" },
        { id: "NaN", nombre: "Ralladura de limón", cantidad: 1, unidades: "cucharadita" },
        { id: "66c82603feaf7182c4c6da4e", nombre: "Miel de abeja", cantidad: 20, unidades: "g" },
        { id: "66c6e75be722b9191cb18945", nombre: "Hielo", cantidad: 180, unidades: "g" }
    ],
    preparacion: [
        {
            orden: 0,
            proceso: "En la jarra espumadora pequeña, agregar el té instantáneo, el agua caliente y la miel."
        },
        {
            orden: 1,
            proceso: "Dejar reposar durante 3 minutos mientras se revuelve para integrar bien la miel."
        },
        {
            orden: 2,
            proceso: "Llenar el vaso de vidrio con hielo, agregando la ralladura de limón de a poquitos mientras se intercala con la mezcla."
        },
        {
            orden: 3,
            proceso: "Completar con agua si es necesario y decorar con cítricos deshidratados."
        }
    ],
    emplatado: "Vaso de vidrio alto liso.",
    notas: [
        "Para la versión caliente, agregar más agua caliente a la mezcla y servir en una taza alta recta beige con borde dorado."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"
},
{
    nombre: "Aromáticas",
    perteneceA: "66315934ee36f4bbdd9e32ea",
    rendimiento_cantidad: "NaN",
    rendimiento_unidades: "ml",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "66c6e75be722b9191cb189bc", nombre: "Bolsa de aromática", cantidad: 1, unidades: "unidad" },
        { id: "NaN", nombre: "Agua", cantidad: 150, unidades: "ml" }
    ],
    preparacion: [
        { orden: 0, proceso: "Poner la bolsa de aromática en la taza." },
        { orden: 1, proceso: "Agregar agua caliente y subir y bajar la bolsa." },
        { orden: 2, proceso: "Dejar extrayendo por 3 minutos, luego exprimir la bolsa y retirarla." }
    ],
    emplatado: "Taza amarilla o azul con plato.",
    notas: [
        "Para la versión caliente, agregar más agua caliente a la mezcla y servir en una taza alta recta beige con borde dorado."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"

},
{
    nombre: "Infusiones",
    perteneceA: "663186b9fc740a611699dd30",
    rendimiento_cantidad: "NaN",
    rendimiento_unidades: "ml",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "66c6e75be722b9191cb189bc", nombre: "Bolsa de aromática", cantidad: 1, unidades: "unidad" },
        { id: "NaN", nombre: "Agua", cantidad: 200, unidades: "ml" }
    ],
    preparacion: [
        { orden: 0, proceso: "Poner la bolsa de aromática en la taza y agregar el agua caliente." },
        { orden: 1, proceso: "Subir y bajar la bolsa de aromática." }
    ],
    sabores: [
        { nombre: "Frutos rojos", proceso: "Agregar una cucharada de mermelada de frutos rojos y dejar extrayendo por 3 minutos." },
        { nombre: "Frutos amarillos", proceso: "Agregar 10g de mango, uchuva, maracuyá y miel, dejar extrayendo por 3 minutos." },
        { nombre: "Frutos verdes", proceso: "Agregar 10g de lulo, piña y manzana, dejar extrayendo por 3 minutos." }
    ],
    emplatado: "Taza alta recta beige, con una cucharita.",
    notas: [
        "Para la versión caliente, agregar más agua caliente a la mezcla y servir en una taza alta recta beige con borde dorado."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"

},
{
    nombre: "Milo (Caliente)",
    rendimiento_cantidad: 260,
    rendimiento_unidades: "ml",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "66c6e75be722b9191cb18952", nombre: "Milo", cantidad: 30, unidades: "g" },
        { id: "NaN", nombre: "Leche texturizada", cantidad: 200, unidades: "ml" },
        { id: "NaN", nombre: "Agua", cantidad: 30, unidades: "ml" }
    ],
    preparacion: [
        { orden: 0, proceso: "En la jarra espumadora pequeña, integrar el milo con el agua caliente." },
        { orden: 1, proceso: "Agregar la mezcla a la leche y espumar." }
    ],
    emplatado: "Taza grande cóncava beige.",
    notas: [
        "Para la versión caliente, agregar más agua caliente a la mezcla y servir en una taza alta recta beige con borde dorado."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"
},
{
    nombre: "Chocolate Caliente",
    perteneceA:"6621f5e5e87e472d29755dbc",
    rendimiento_cantidad: 260,
    rendimiento_unidades: "ml",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "66c6e75be722b9191cb1892f", nombre: "Cocoa en polvo", cantidad: 5, unidades: "g" },
        { id: "66c6e75be722b9191cb18931", nombre: "Chocolate Salsa", cantidad: 15, unidades: "ml" },
        { id: "NaN", nombre: "Agua", cantidad: 20, unidades: "ml" },
        { id: "NaN", nombre: "Leche texturizada", cantidad: 220, unidades: "ml" },
        { id: "66c6e75be722b9191cb1892e", nombre: "Canela Molida Tarro", cantidad: "una pizca", unidades: "NaN" },
        { id: "66c6e75be722b9191cb189d9", nombre: "SIROPE DE CHAI", cantidad: "una pizca", unidades: "NaN" }
    ],
    preparacion: [
        { orden: 0, proceso: "Mezclar salsa de chocolate, cocoa y agua caliente en una jarra." },
        { orden: 1, proceso: "Echar la base de chocolate en la taza y espumar la leche con canela." }
    ],
    emplatado: "Taza grande cóncava beige.",
    notas: [
        "Para la versión caliente, agregar más agua caliente a la mezcla y servir en una taza alta recta beige con borde dorado."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"



},
{
    nombre: "Frappé Café y de Sabores",
    perteneceA: "66273558e87e472d29496465",
    rendimiento_cantidad: 380,
    rendimiento_unidades: "ml",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "66c6e75be722b9191cb1899a", nombre: "CAFE LIOFILIZADO", cantidad: 6, unidades: "g" },
        { id: "66c6e75be722b9191cb18948", nombre: "Leche entera", cantidad: 80, unidades: "ml" },
        { id: "66c6e75be722b9191cb18921", nombre: "Azucar blanca", cantidad: 20, unidades: "g" },
        { id: "66c6e75be722b9191cb18945", nombre: "Hielo", cantidad: 200, unidades: "g" }
    ],
    preparacion: [
        { orden: 0, proceso: "Agregar hielo, azúcar, café y leche a la licuadora." },
        { orden: 1, proceso: "Licuar a baja velocidad hasta obtener la consistencia deseada." }
    ],
    emplatado: "Vaso de vidrio base octogonal.",
    notas: [
        "Para la versión caliente, agregar más agua caliente a la mezcla y servir en una taza alta recta beige con borde dorado."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"

},
{
    nombre: "Cortado",
    rendimiento_cantidad: 120,
    rendimiento_unidades: "ml",
    rendimiento_porcion: 1,
    ingredientes: [
        { id: "NaN", nombre: "Espresso doble", cantidad: 45, unidades: "ml" },
        { id: "66c6e75be722b9191cb18948", nombre: "Leche entera", cantidad: 70, unidades: "ml" }
    ],
    preparacion: [
        { orden: 0, proceso: "Extraer el espresso doble en una taza pequeña blanca cuadrada." },
        { orden: 1, proceso: "Texturizar la leche con un poco de aire y verterla en la taza." }
    ],
    emplatado: "Taza pequeña blanca cuadrada.",
    notas: [
        "Para la versión caliente, agregar más agua caliente a la mezcla y servir en una taza alta recta beige con borde dorado."
    ],
    escrito: "NaN",
    revisado: "NaN",
    actualizacion: "2024-08-24"
}
 
    

];

// import axios from "axios";
// const axios = require('axios');

// // Función para filtrar recetas que no tienen 'perteneceA'
// const filterRecipes = (recipes) => {
//     return recipes.filter(recipe => recipe.perteneceA);
// };

// // Función para hacer el llamado al endpoint con Axios, pasando los arrays como parámetros
// const updateRecetas = async (recipes) => {
//     const filteredRecipes = filterRecipes(recipes);

//     try {
//         const response = await axios.post('/updateReceta', {
//             recipes: filteredRecipes
//         });
//         console.log('Respuesta del servidor:', response.data);
//     } catch (error) {
//         console.error('Error al hacer la petición:', error);
//     }
// };



// // Llamada a la función con los datos del array de recetas como parámetro
// updateRecetas(recipesSERV);




    console.log("recipesPROD:", JSON.stringify(recipesPROD, null, 2));
    console.log("recipesSERV:", JSON.stringify(recipesSERV, null, 2));
