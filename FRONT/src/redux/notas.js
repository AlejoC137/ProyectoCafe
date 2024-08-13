import axios from "axios"
import React from "react"
function convertToJSON(array) {
  return JSON.stringify(array, null, 2); // El parámetro `null` indica que no se usará una función de reemplazo, y `2` es el número de espacios para la indentación
}


const produccionExterna = [
    {
      "_id": "6684ef2be04985901b9e335e",
      "Nombre del producto": "CARNE COSTILLA AHUMADA",
      "Estado": "PENDIENTE",
      "Proveedor": "JE",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ef2be04985901b9e335f",
      "Nombre del producto": "TE CHAI",
      "Estado": "PENDIENTE",
      "Proveedor": "PEDACITO",
      "Area": "CAFÉ"
    },
    {
      "_id": "6684ef2be04985901b9e336a",
      "Nombre del producto": "Coca Cola",
      "Estado": "OK",
      "Proveedor": "CocaColaComp",
      "Area": "BEBIDAS"
    },
    {
      "_id": "6684ef2be04985901b9e336b",
      "Nombre del producto": "Agua con gas",
      "Estado": "PENDIENTE",
      "Proveedor": "CocaColaComp",
      "Area": "BEBIDAS"
    },
    {
      "_id": "6684ef2be04985901b9e336c",
      "Nombre del producto": "Agua sin gas",
      "Estado": "PENDIENTE",
      "Proveedor": "CocaColaComp",
      "Area": "BEBIDAS"
    },
    {
      "_id": "6684ef2be04985901b9e3373",
      "Nombre del producto": "Torta de banano y chocolate",
      "Estado": "OK",
      "Proveedor": "DELICIOSAS TONTERIAS",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684ef2be04985901b9e336f",
      "Nombre del producto": "Coca Cola Zero",
      "Estado": "PENDIENTE",
      "Proveedor": "CocaColaComp",
      "Area": "BEBIDAS"
    },
    {
      "_id": "6684ef2be04985901b9e3371",
      "Nombre del producto": "Torta zanahoria y arequipe",
      "Estado": "PENDIENTE",
      "Proveedor": "DELICIOSAS TONTERIAS",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684ef2be04985901b9e3372",
      "Nombre del producto": "Torta almojabana",
      "Estado": "PENDIENTE",
      "Proveedor": "DELICIOSAS TONTERIAS",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684ef2be04985901b9e3374",
      "Nombre del producto": "Torta de limón",
      "Estado": "PENDIENTE",
      "Proveedor": "DELICIOSAS TONTERIAS",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684ef2be04985901b9e3377",
      "Nombre del producto": "Alfajor",
      "Estado": "OK",
      "Proveedor": "DELICIOSAS TONTERIAS",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684ef2be04985901b9e3379",
      "Nombre del producto": "Rollo holandes",
      "Estado": "NA",
      "Proveedor": "FERMENTADOS",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684ef2be04985901b9e337a",
      "Nombre del producto": "Rollo mozarella",
      "Estado": "NA",
      "Proveedor": "FERMENTADOS",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684ef2be04985901b9e337b",
      "Nombre del producto": "Pan Cuajada Tocineta",
      "Estado": "PENDIENTE",
      "Proveedor": "FERMENTADOS",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684ef2be04985901b9e337c",
      "Nombre del producto": "Pan Cuajada",
      "Estado": "PENDIENTE",
      "Proveedor": "FERMENTADOS",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684ef2be04985901b9e337f",
      "Nombre del producto": "CAFÉ LUCUS",
      "Estado": "PENDIENTE",
      "Proveedor": "CAFÉ LUCUS",
      "Area": "CAFÉ"
    },
    {
      "_id": "6684ef2be04985901b9e3380",
      "Nombre del producto": "CARNE COSTILLA AHUMADA",
      "Estado": "PENDIENTE",
      "Proveedor": "JE",
      "Area": "CAFÉ"
    },
    {
      "_id": "6684ef2be04985901b9e336d",
      "Nombre del producto": "Soda Clásica",
      "Estado": "OK",
      "Proveedor": "CocaColaComp",
      "Area": "BEBIDAS"
    },
    {
      "_id": "6684ef2be04985901b9e3376",
      "Nombre del producto": "Galleta Chocolate",
      "Estado": "OK",
      "Proveedor": "DELICIOSAS TONTERIAS",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684ef2be04985901b9e337e",
      "Nombre del producto": "CAFÉ VEGA",
      "Estado": "PENDIENTE",
      "Proveedor": "CAFÉ VEGA",
      "Area": "CAFÉ"
    },
    {
      "_id": "6684ef2be04985901b9e3370",
      "Nombre del producto": "Galleta Red Velvet",
      "Estado": "OK",
      "Proveedor": "DELICIOSAS TONTERIAS",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684ef2be04985901b9e3375",
      "Nombre del producto": "Brownie Chocolate",
      "Estado": "PENDIENTE",
      "Proveedor": "DELICIOSAS TONTERIAS",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684ef2be04985901b9e3378",
      "Nombre del producto": "Rollo Cuajada Tocineta",
      "Estado": "PENDIENTE",
      "Proveedor": "FERMENTADOS",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684ef2be04985901b9e337d",
      "Nombre del producto": "Croissant mantequilla",
      "Estado": "PENDIENTE",
      "Proveedor": "MEKEME",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684ef2be04985901b9e33a2",
      "Nombre del producto": "Croissant cereales",
      "Estado": "PENDIENTE",
      "Proveedor": "MEKEME",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684ef2be04985901b9e33a6",
      "Nombre del producto": "Pastel de arequipe",
      "Estado": "PENDIENTE",
      "Proveedor": "VERSALLES",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684ef2be04985901b9e33a7",
      "Nombre del producto": "Palito de guayaba",
      "Estado": "PENDIENTE",
      "Proveedor": "VERSALLES",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684ef2be04985901b9e33aa",
      "Nombre del producto": "Croissant jamon y queso",
      "Estado": "PENDIENTE",
      "Proveedor": "VERSALLES",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684ef2be04985901b9e33ae",
      "Nombre del producto": "Empanada chilena",
      "Estado": "PENDIENTE",
      "Proveedor": "VERSALLES",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684ef2be04985901b9e33b2",
      "Nombre del producto": "Pastel Gloria",
      "Estado": "PENDIENTE",
      "Proveedor": "VERSALLES",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684ef2be04985901b9e33a3",
      "Nombre del producto": "Pan Ciabatta",
      "Estado": "NA",
      "Proveedor": "MODOU",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684ef2be04985901b9e33ad",
      "Nombre del producto": "Palito de queso",
      "Estado": "PENDIENTE",
      "Proveedor": "VERSALLES",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684ef2be04985901b9e33a4",
      "Nombre del producto": "Pan Masa Madre Molde",
      "Estado": "OK",
      "Proveedor": "MODOU",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684ef2be04985901b9e33a8",
      "Nombre del producto": "Empanada Argentina",
      "Estado": "PENDIENTE",
      "Proveedor": "VERSALLES",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684ef2be04985901b9e33ab",
      "Nombre del producto": "Croissant queso",
      "Estado": "PENDIENTE",
      "Proveedor": "VERSALLES",
      "Area": "PANADERIA"
    },
    {
      "_id": "669ae50f8c282d14027a9378",
      "Nombre del producto": "Cervezas",
      "Estado": "OK",
      "Proveedor": "La Careta",
      "Area": "BEBIDAS"
    }
  ]

const ingrediente = [
    {
      "_id": "6684ec62b2927250f2374a1b",
      "Nombre del producto": "Aceite de oliva",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ec62b2927250f2374a1e",
      "Nombre del producto": "Ajo",
      "Estado": "PENDIENTE",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ec62b2927250f2374a1c",
      "Nombre del producto": "Arepa",
      "Estado": "PENDIENTE",
      "Proveedor": "Exito",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ec62b2927250f2374a23",
      "Nombre del producto": "Azucar Papeleta",
      "Estado": "PENDIENTE",
      "Proveedor": "Mundo Huevo",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ec62b2927250f2374a26",
      "Nombre del producto": "Berenjena",
      "Estado": "NA",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ec62b2927250f2374a31",
      "Nombre del producto": "Chocolate Salsa",
      "Estado": "OK",
      "Proveedor": "Mundo Huevo",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ec62b2927250f2374a32",
      "Nombre del producto": "Chimichurri",
      "Estado": "OK",
      "Proveedor": "Exito",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ec62b2927250f2374a36",
      "Nombre del producto": "Crema Chantilli",
      "Estado": "PENDIENTE",
      "Proveedor": "Mundo Huevo",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ec62b2927250f2374a37",
      "Nombre del producto": "Crema de Queso",
      "Estado": "OK",
      "Proveedor": "Dulces Tonterias",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ec62b2927250f2374a1d",
      "Nombre del producto": "Aceite vegetal de soya",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ec62b2927250f2374a20",
      "Nombre del producto": "Arandanos Azules",
      "Estado": "OK",
      "Proveedor": "Mundo Huevo",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ec62b2927250f2374a27",
      "Nombre del producto": "Bicarbonato de sodio",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ec62b2927250f2374a30",
      "Nombre del producto": "Chocolate cobertura",
      "Estado": "OK",
      "Proveedor": "Mundo Huevo",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ec62b2927250f2374a33",
      "Nombre del producto": "Chorizo campesino",
      "Estado": "OK",
      "Proveedor": "Exito",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ec62b2927250f2374a1f",
      "Nombre del producto": "Apio",
      "Estado": "NA",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ec62b2927250f2374a24",
      "Nombre del producto": "Aguacate",
      "Estado": "PENDIENTE",
      "Proveedor": "Carreta",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ec62b2927250f2374a25",
      "Nombre del producto": "Arepa Mote Exito",
      "Estado": "OK",
      "Proveedor": "Exito",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ec62b2927250f2374a28",
      "Nombre del producto": "Banano",
      "Estado": "OK",
      "Proveedor": "Carreta",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ec62b2927250f2374a2f",
      "Nombre del producto": "Chocolate ( Cocoa en polvo)",
      "Estado": "OK",
      "Proveedor": "Mundo Huevo",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ec62b2927250f2374a34",
      "Nombre del producto": "Chorizo español",
      "Estado": "OK",
      "Proveedor": "Exito",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ec62b2927250f2374a21",
      "Nombre del producto": "Azucar blanca",
      "Estado": "PENDIENTE",
      "Proveedor": "Mundo Huevo",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ec62b2927250f2374a22",
      "Nombre del producto": "Azucar morena",
      "Estado": "PENDIENTE",
      "Proveedor": "Mundo Huevo",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ec62b2927250f2374a29",
      "Nombre del producto": "Crema agria",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ec62b2927250f2374a2c",
      "Nombre del producto": "Cebolla roja",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ec62b2927250f2374a2d",
      "Nombre del producto": "Cebolla blanca",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ec62b2927250f2374a2e",
      "Nombre del producto": "Canela Molida",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ec62b2927250f2374a35",
      "Nombre del producto": "Crema de Leche Alpina Maxilitro",
      "Estado": "PENDIENTE",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f34",
      "Nombre del producto": "Comino Semilla",
      "Estado": "OK",
      "Proveedor": "Frutos & Semillas",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f35",
      "Nombre del producto": "Esencia vainilla",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f37",
      "Nombre del producto": "Fecula maiz (maizena)",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f3a",
      "Nombre del producto": "Garbanzo",
      "Estado": "NA",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f3c",
      "Nombre del producto": "Harina de trigo Multiproposito",
      "Estado": "OK",
      "Proveedor": "Mundo Huevo",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f3f",
      "Nombre del producto": "Hielo",
      "Estado": "PENDIENTE",
      "Proveedor": "Frescampo",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f45",
      "Nombre del producto": "Leche deslactozada",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f4a",
      "Nombre del producto": "Manzana Verde",
      "Estado": "PENDIENTE",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f4b",
      "Nombre del producto": "Mantequilla",
      "Estado": "PENDIENTE",
      "Proveedor": "Galan",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f57",
      "Nombre del producto": "Pimenton",
      "Estado": "PENDIENTE",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f5e",
      "Nombre del producto": "Queso Feta",
      "Estado": "PENDIENTE",
      "Proveedor": "PriceSmart",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f38",
      "Nombre del producto": "Fresas",
      "Estado": "PENDIENTE",
      "Proveedor": "Carreta",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f39",
      "Nombre del producto": "Granola",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f41",
      "Nombre del producto": "Jamon Cerrano",
      "Estado": "OK",
      "Proveedor": "D1",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f43",
      "Nombre del producto": "Limon",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f49",
      "Nombre del producto": "Maracuya",
      "Estado": "OK",
      "Proveedor": "Frutas Carro",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f50",
      "Nombre del producto": "Pasta de tomate",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f51",
      "Nombre del producto": "Pasta plana",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f55",
      "Nombre del producto": "Pimienta Negra",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f5f",
      "Nombre del producto": "Queso Tajado Mozeralla",
      "Estado": "PENDIENTE",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f33",
      "Nombre del producto": "Coriandro semilla",
      "Estado": "PENDIENTE",
      "Proveedor": "Frutos & Semillas",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f3e",
      "Nombre del producto": "Hojaldre",
      "Estado": "NA",
      "Proveedor": "Mundo Huevo",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f40",
      "Nombre del producto": "Jamon Sanduche",
      "Estado": "OK",
      "Proveedor": "Mundo Huevo",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f48",
      "Nombre del producto": "Licor - Vino de Café",
      "Estado": "OK",
      "Proveedor": "Mandalas",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f4d",
      "Nombre del producto": "Nachos",
      "Estado": "PENDIENTE",
      "Proveedor": "Mundo Huevo",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f4e",
      "Nombre del producto": "Nuces brasil",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f4f",
      "Nombre del producto": "Nuez Mozcada",
      "Estado": "OK",
      "Proveedor": "Mundo Huevo",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f52",
      "Nombre del producto": "Polvo de hornear",
      "Estado": "OK",
      "Proveedor": "Mundo Huevo",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f56",
      "Nombre del producto": "Papa Capira",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f5a",
      "Nombre del producto": "Queso Holandes",
      "Estado": "PENDIENTE",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f60",
      "Nombre del producto": "Queso Crema",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f36",
      "Nombre del producto": "Espinaca",
      "Estado": "NA",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f3b",
      "Nombre del producto": "Huevo",
      "Estado": "PENDIENTE",
      "Proveedor": "Mundo Huevo",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f3d",
      "Nombre del producto": "Harina de trigo (Fortificada)",
      "Estado": "OK",
      "Proveedor": "Mundo Huevo",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f42",
      "Nombre del producto": "Leche entera",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f44",
      "Nombre del producto": "Lenteja",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f47",
      "Nombre del producto": "Leche en polvo",
      "Estado": "OK",
      "Proveedor": "Colanta",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f53",
      "Nombre del producto": "Pasas",
      "Estado": "OK",
      "Proveedor": "Mundo Huevo",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f54",
      "Nombre del producto": "Peperoni",
      "Estado": "PENDIENTE",
      "Proveedor": "Mundo Huevo",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f58",
      "Nombre del producto": "Queso Parmesano Bloque",
      "Estado": "PENDIENTE",
      "Proveedor": "PriceSmart",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f59",
      "Nombre del producto": "Queso Parmesano Rallado",
      "Estado": "OK",
      "Proveedor": "PriceSmart",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f5c",
      "Nombre del producto": "Quesito",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f61",
      "Nombre del producto": "Vinagre de manzana",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "BEBIDAS"
    },
    {
      "_id": "6684ece9b2927250f2374f62",
      "Nombre del producto": "Vino Blanco",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "BEBIDAS"
    },
    {
      "_id": "6684ece9b2927250f2374f63",
      "Nombre del producto": "Vinagre Balsamico",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ece9b2927250f2374f64",
      "Nombre del producto": "Zanahoria",
      "Estado": "PENDIENTE",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ed5829c99195e15c041c",
      "Nombre del producto": "Te Negro Helado",
      "Estado": "OK",
      "Proveedor": "Exito",
      "Area": "CAFÉ"
    },
    {
      "_id": "6684ed5829c99195e15c0414",
      "Nombre del producto": "Mozarrella de bufala",
      "Estado": "OK",
      "Proveedor": "Mundo Huevo",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ed5829c99195e15c041d",
      "Nombre del producto": "Ron caldas",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ed5829c99195e15c041e",
      "Nombre del producto": "Rugula",
      "Estado": "PENDIENTE",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ed5829c99195e15c0427",
      "Nombre del producto": "Panela",
      "Estado": "OK",
      "Proveedor": "Mundo Huevo",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ed5829c99195e15c042a",
      "Nombre del producto": "Helado",
      "Estado": "PENDIENTE",
      "Proveedor": "D1",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ed5829c99195e15c0431",
      "Nombre del producto": "Cajas",
      "Estado": "OK",
      "Proveedor": "Mundo Huevo",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ed5829c99195e15c041a",
      "Nombre del producto": "Tomate Uvalina",
      "Estado": "PENDIENTE",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ed5829c99195e15c0429",
      "Nombre del producto": "Pollo Pechuga Fileteada",
      "Estado": "PENDIENTE",
      "Proveedor": "McPollo",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ed5829c99195e15c042c",
      "Nombre del producto": "Splenda",
      "Estado": "OK",
      "Proveedor": "PriceSmart",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ed5829c99195e15c0434",
      "Nombre del producto": "Pepino",
      "Estado": "NA",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ed5829c99195e15c0418",
      "Nombre del producto": "Tomate Chonto",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ed5829c99195e15c041b",
      "Nombre del producto": "Tomillo",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ed5829c99195e15c041f",
      "Nombre del producto": "Reducción de balsamico",
      "Estado": "OK",
      "Proveedor": "Mundo Huevo",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ed5829c99195e15c0428",
      "Nombre del producto": "Pesto",
      "Estado": "OK",
      "Proveedor": "Mundo Huevo",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ed5829c99195e15c042b",
      "Nombre del producto": "Semillas de chia",
      "Estado": "OK",
      "Proveedor": "la Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ed5829c99195e15c0432",
      "Nombre del producto": "Leche condenzada",
      "Estado": "OK",
      "Proveedor": "D1",
      "Area": "CAFÉ"
    },
    {
      "_id": "6684ed5829c99195e15c0433",
      "Nombre del producto": "Aceitunas negras",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ed5829c99195e15c0435",
      "Nombre del producto": "Mango TOMMY",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ed5829c99195e15c0417",
      "Nombre del producto": "Tocineta de cerdo basico",
      "Estado": "PENDIENTE",
      "Proveedor": "Mundo Huevo",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ed5829c99195e15c0422",
      "Nombre del producto": "yeast frash",
      "Estado": "OK",
      "Proveedor": "Mundo Huevo",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684ed5829c99195e15c0423",
      "Nombre del producto": "YEAST DRY",
      "Estado": "OK",
      "Proveedor": "Mundo Huevo",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684ed5829c99195e15c042d",
      "Nombre del producto": "Moras",
      "Estado": "OK",
      "Proveedor": "Exito",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ed5829c99195e15c042e",
      "Nombre del producto": "Sal",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ed5829c99195e15c042f",
      "Nombre del producto": "Flor de jamaica",
      "Estado": "OK",
      "Proveedor": "Exito",
      "Area": "COMIDA"
    },
    {
      "_id": "6684ed5829c99195e15c0430",
      "Nombre del producto": "Champiñones",
      "Estado": "NA",
      "Proveedor": "Éxito",
      "Area": "COMIDA"
    },
    {
      "_id": "6684edceb2927250f23760bb",
      "Nombre del producto": "Yuca",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684edceb2927250f23760c1",
      "Nombre del producto": "PanMolde",
      "Estado": "NA",
      "Proveedor": "Fermentados",
      "Area": "COMIDA"
    },
    {
      "_id": "6684edceb2927250f23760c3",
      "Nombre del producto": "TE NEGRO PRICE",
      "Estado": "PENDIENTE",
      "Proveedor": "Price Smart",
      "Area": "COMIDA"
    },
    {
      "_id": "6684edceb2927250f23760c4",
      "Nombre del producto": "Frijol Verde desgranado",
      "Estado": "PENDIENTE",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684edceb2927250f23760c5",
      "Nombre del producto": "Vino Tinto",
      "Estado": "OK",
      "Proveedor": "Exito",
      "Area": "COMIDA"
    },
    {
      "_id": "6684edceb2927250f23760c6",
      "Nombre del producto": "CARNE TOCINO BARRIGUERO",
      "Estado": "OK",
      "Proveedor": "CARNES EL PARQUE A&T",
      "Area": "COMIDA"
    },
    {
      "_id": "6684edceb2927250f23760cc",
      "Nombre del producto": "CARNE ESPINAZO",
      "Estado": "PENDIENTE",
      "Proveedor": "CARNES EL PARQUE A&T",
      "Area": "COMIDA"
    },
    {
      "_id": "6684edceb2927250f23760c7",
      "Nombre del producto": "CARNE PEZUNA",
      "Estado": "PENDIENTE",
      "Proveedor": "CARNES EL PARQUE A&T",
      "Area": "COMIDA"
    },
    {
      "_id": "6684edceb2927250f23760c9",
      "Nombre del producto": "CARNE POSTA",
      "Estado": "PENDIENTE",
      "Proveedor": "CARNES EL PARQUE A&T",
      "Area": "COMIDA"
    },
    {
      "_id": "6684edceb2927250f23760cb",
      "Nombre del producto": "CARNE EMPELLA",
      "Estado": "PENDIENTE",
      "Proveedor": "CARNES EL PARQUE A&T",
      "Area": "COMIDA"
    },
    {
      "_id": "6684edceb2927250f23760b8",
      "Nombre del producto": "Lulo",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684edceb2927250f23760b9",
      "Nombre del producto": "Piña Oro miel",
      "Estado": "PENDIENTE",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684edceb2927250f23760ba",
      "Nombre del producto": "Arroz Blanco Crudo",
      "Estado": "OK",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684edceb2927250f23760be",
      "Nombre del producto": "Romero",
      "Estado": "PENDIENTE",
      "Proveedor": "Exito",
      "Area": "COMIDA"
    },
    {
      "_id": "6684edceb2927250f23760c8",
      "Nombre del producto": "CARNE TABLA",
      "Estado": "PENDIENTE",
      "Proveedor": "CARNES EL PARQUE A&T",
      "Area": "COMIDA"
    },
    {
      "_id": "6684edceb2927250f23760c2",
      "Nombre del producto": "Miga de galleta",
      "Estado": "PENDIENTE",
      "Proveedor": "La Vaquita",
      "Area": "COMIDA"
    },
    {
      "_id": "6684edceb2927250f23760ca",
      "Nombre del producto": "CARNE PIERNA PULPA",
      "Estado": "PENDIENTE",
      "Proveedor": "CARNES EL PARQUE A&T",
      "Area": "COMIDA"
    },
    {
      "_id": "6684edceb2927250f23760cd",
      "Nombre del producto": "CARNE LAGARTO",
      "Estado": "PENDIENTE",
      "Proveedor": "CARNES EL PARQUE A&T",
      "Area": "COMIDA"
    },
    {
      "_id": "6687442bbfd44aec146166ae",
      "Nombre del producto": "Aromáticas ",
      "category": "INGREDIENTE",
      "Estado": "OK",
      "Proveedor": "La Vaquita ",
      "Area": "BEBIDAS"
    },
    {
      "_id": "66874479bfd44aec14616dae",
      "Nombre del producto": "Leche de Almendras",
      "Estado": "PENDIENTE",
      "Proveedor": "Pricesmart",
      "Area": "CAFÉ"
    },
    {
      "_id": "6687462dbfd44aec14619cd2",
      "Nombre del producto": "Sirope de Maple",
      "Estado": "OK",
      "Proveedor": "La Vaquita ",
      "Area": "COMIDA"
    }
  ]

const desechables = [
    {
      "_id": "6684ead0bfd44aec142ac82c",
      "Nombre del producto": "Caja Pizza Cuad 30x30x4",
      "Estado": "PENDIENTE",
      "Proveedor": "SIGMAPLAS",
      "Area": "DESECHABLES"
    },
    {
      "_id": "6684ead0bfd44aec142ac838",
      "Nombre del producto": "Pelicula Alimento Chicle",
      "Estado": "PENDIENTE",
      "Proveedor": "SIGMAPLAS",
      "Area": "DESECHABLES"
    },
    {
      "_id": "6684ead0bfd44aec142ac839",
      "Nombre del producto": "Seedpack Blonda 25,8",
      "Estado": "PENDIENTE",
      "Proveedor": "SIGMAPLAS",
      "Area": "DESECHABLES"
    },
    {
      "_id": "6684ead0bfd44aec142ac82b",
      "Nombre del producto": "Filtro de papel",
      "Estado": "OK",
      "Proveedor": "SIGMAPLAS",
      "Area": "DESECHABLES"
    },
    {
      "_id": "6684ead0bfd44aec142ac831",
      "Nombre del producto": "Tapa Domo Perf",
      "Estado": "OK",
      "Proveedor": "SIGMAPLAS",
      "Area": "DESECHABLES"
    },
    {
      "_id": "6684ead0bfd44aec142ac82e",
      "Nombre del producto": "Bowl 32 oz",
      "Estado": "PENDIENTE",
      "Proveedor": "SIGMAPLAS",
      "Area": "DESECHABLES"
    },
    {
      "_id": "6684ead0bfd44aec142ac82f",
      "Nombre del producto": "Tapa Bowl 32oz",
      "Estado": "PENDIENTE",
      "Proveedor": "SIGMAPLAS",
      "Area": "DESECHABLES"
    },
    {
      "_id": "6684ead0bfd44aec142ac837",
      "Nombre del producto": "Film Stretch 15 cm",
      "Estado": "OK",
      "Proveedor": "SIGMAPLAS",
      "Area": "DESECHABLES"
    },
    {
      "_id": "6684ead0bfd44aec142ac830",
      "Nombre del producto": "Vaso WAU 12oz trasluc",
      "Estado": "OK",
      "Proveedor": "SIGMAPLAS",
      "Area": "DESECHABLES"
    },
    {
      "_id": "6684ead0bfd44aec142ac832",
      "Nombre del producto": "Pitillo Caña de Azucar",
      "Estado": "OK",
      "Proveedor": "SIGMAPLAS",
      "Area": "DESECHABLES"
    },
    {
      "_id": "6684ead0bfd44aec142ac833",
      "Nombre del producto": "Vaso 7 oz papel",
      "Estado": "PENDIENTE",
      "Proveedor": "SIGMAPLAS",
      "Area": "DESECHABLES"
    },
    {
      "_id": "6684ead0bfd44aec142ac834",
      "Nombre del producto": "Tapa Blanca 7oz",
      "Estado": "PENDIENTE",
      "Proveedor": "SIGMAPLAS",
      "Area": "DESECHABLES"
    },
    {
      "_id": "6684ead0bfd44aec142ac835",
      "Nombre del producto": "Portavasos K/K 2 PUEST",
      "Estado": "OK",
      "Proveedor": "SIGMAPLAS",
      "Area": "DESECHABLES"
    },
    {
      "_id": "6684ead0bfd44aec142ac836",
      "Nombre del producto": "Papel Aluminio",
      "Estado": "OK",
      "Proveedor": "SIGMAPLAS",
      "Area": "DESECHABLES"
    },
    {
      "_id": "669ae4beb5785fed3cc535bb",
      "Nombre del producto": "Servilletas Cafeteria",
      "Estado": "PENDIENTE",
      "Proveedor": "Mundo Huevo",
      "Area": "DESECHABLES"
    }
  ]

const produccionInterna = [
    {
      "_id": "6684f3f929c99195e15c4554",
      "Nombre del producto": "Caramelo",
      "Proveedor": "PROYECTO CAFÉ",
      "Estado": "PENDIENTE",
      "Area": "COMIDA"
    },
    {
      "_id": "6684f3f929c99195e15c4557",
      "Nombre del producto": "Tomate Confi",
      "Proveedor": "PROYECTO CAFÉ",
      "Estado": "PENDIENTE",
      "Area": "COMIDA"
    },
    {
      "_id": "6684f3f929c99195e15c4558",
      "Nombre del producto": "Carne de hamburguesa",
      "Proveedor": "PROYECTO CAFÉ",
      "Estado": "PENDIENTE",
      "Area": "COMIDA"
    },
    {
      "_id": "6684f3f929c99195e15c455a",
      "Nombre del producto": "SIROPE DE CHAI",
      "Proveedor": "PROYECTO CAFÉ",
      "Estado": "OK",
      "Area": "CAFÉ"
    },
    {
      "_id": "6684f3f929c99195e15c4551",
      "Nombre del producto": "Salsa Shakshukas",
      "Proveedor": "PROYECTO CAFÉ",
      "Estado": "PENDIENTE",
      "Area": "COMIDA"
    },
    {
      "_id": "6684f3f929c99195e15c455c",
      "Nombre del producto": "COLD BREW BASE",
      "Proveedor": "PROYECTO CAFÉ",
      "Estado": "OK",
      "Area": "CAFÉ"
    },
    {
      "_id": "6684f3f929c99195e15c4553",
      "Nombre del producto": "Hogao",
      "Proveedor": "PROYECTO CAFÉ",
      "Estado": "OK",
      "Area": "COMIDA"
    },
    {
      "_id": "6684f3f929c99195e15c4559",
      "Nombre del producto": "SIROPE DE VAINILLA",
      "Proveedor": "PROYECTO CAFÉ",
      "Estado": "OK",
      "Area": "CAFÉ"
    },
    {
      "_id": "6684f3f929c99195e15c455b",
      "Nombre del producto": "ESPUMA DE CAFÉ",
      "Proveedor": "PROYECTO CAFÉ",
      "Estado": "OK",
      "Area": "CAFÉ"
    },
    {
      "_id": "6684f3f929c99195e15c455e",
      "Nombre del producto": "PIE MANZANA 25 cm apx",
      "Proveedor": "PROYECTO CAFÉ",
      "Estado": "PENDIENTE",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684f3f929c99195e15c4561",
      "Nombre del producto": "PIZZA 30 CM apx",
      "Proveedor": "PROYECTO CAFÉ",
      "Estado": "NA",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684f3f929c99195e15c4560",
      "Nombre del producto": "CHEESE CAKE",
      "Proveedor": "PROYECTO CAFÉ",
      "Estado": "PENDIENTE",
      "category": "",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684f3f929c99195e15c4564",
      "Nombre del producto": "PAN ZHAN YOHNG",
      "Proveedor": "PROYECTO CAFÉ",
      "Estado": "PENDIENTE",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684f3f929c99195e15c4565",
      "Nombre del producto": "ROLLO ZHANYONG",
      "Proveedor": "PROYECTO CAFÉ",
      "Estado": "PENDIENTE",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684f3f929c99195e15c4552",
      "Nombre del producto": "Yogurt Griego",
      "Proveedor": "PROYECTO CAFÉ",
      "Estado": "OK",
      "Area": "COMIDA"
    },
    {
      "_id": "6684f3f929c99195e15c4555",
      "Nombre del producto": "Mermelada de Frutos Rojos",
      "Proveedor": "PROYECTO CAFÉ",
      "Estado": "OK",
      "Area": "COMIDA"
    },
    {
      "_id": "6684f3f929c99195e15c4556",
      "Nombre del producto": "Cebolla caramelizada",
      "Proveedor": "PROYECTO CAFÉ",
      "Estado": "PENDIENTE",
      "Area": "COMIDA"
    },
    {
      "_id": "6684f3f929c99195e15c455d",
      "Nombre del producto": "JARABE FLOR DE JAMAICA",
      "Proveedor": "PROYECTO CAFÉ",
      "Estado": "OK",
      "Area": "CAFÉ"
    },
    {
      "_id": "6684f3f929c99195e15c455f",
      "Nombre del producto": "PIE MANZANA 10 cm apx",
      "Proveedor": "PROYECTO CAFÉ",
      "Estado": "OK",
      "Area": "PANADERIA"
    },
    {
      "_id": "6684f3f929c99195e15c4562",
      "Nombre del producto": "TORTA DE CHOCOLATE CLAIR SF",
      "Proveedor": "PROYECTO CAFÉ",
      "Estado": "PENDIENTE",
      "Area": "PANADERIA"
    }
  ]





  // Combine both arrays into one
  const combinedData = [

    ...produccionInterna, 
    // ...produccionExterna, 
    // ...ingrediente, 
    // ...desechables, 

];



  
  // Agregar la propiedad "Category" a cada objeto

  
  function deleteAtributes(array, attribute) {
    return array.map(item => {
      const { [attribute]: _, ...rest } = item;
      return rest;
    });
  }


  function updateAtributes(array, attribute, value) {
    return array.map(item => ({
      ...item,
      [attribute]: value
    }));
  }


  

  function giveAtributes(array, attribute, getValue) {
    return array.map(item => ({
      ...item,
      [attribute]: typeof getValue === 'function' ? getValue(item) : getValue
    }));
  }
  

  const dataWithoutId = deleteAtributes(combinedData, "_id");

  // Agregar la propiedad "Category" con un valor específico a cada objeto
  const dataWithCategory = giveAtributes(dataWithoutId, "category", "Value");
  const plustype = giveAtributes(dataWithCategory, "type", "items");
  const areaUpdated = updateAtributes(
    plustype, "Area" , ""
  )



// Post the modified data to the server
// const jsonOutput = convertToJSON(data);

// Imprimir el resultado
console.log("Data to be sent:", JSON.stringify(plustype, null, 2));
