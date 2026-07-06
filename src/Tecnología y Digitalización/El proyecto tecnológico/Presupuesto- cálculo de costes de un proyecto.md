---
layout: base.njk
title: "Presupuesto: cálculo de costes de un proyecto"
permalink: "/conceptos/tecnologia-presupuesto/"
materia: "Tecnología y Digitalización"
curso: "2º ESO"
bloque: "Bloque 1: O proxecto tecnolóxico"
tags: [tecnología, presupuesto, costes, IVA, hoja de cálculo, digitalización, ESO]
fecha: 2026-07-06
---

# Presupuesto: cálculo de costes de un proyecto

<p class="meta">Tecnología y Digitalización · 2º ESO</p>

## Definición

El presupuesto es el documento técnico —[[Diseñar: documentos técnicos]]— que calcula el coste económico de una solución a partir de los **medios materiales** que necesita: los componentes, materiales y piezas que se van a comprar o consumir para construirla.

Cada fila del presupuesto recoge, para un medio material, estos datos:

- **Nº**: un número o código que lo identifica dentro de la lista.
- **Concepto o material**: qué es (tablero, tornillos, cable, pintura...).
- **Cantidad**: cuánto se necesita. La unidad de medida depende del material — puede ser una cantidad de **unidades** sueltas (4 tornillos), una medida **lineal** (0,5 m de cable), **superficial** (1,2 m² de tablero) o **volumétrica** (0,25 l de pintura). No todos los medios materiales se miden igual.
- **Precio unitario**: el coste de una sola unidad de esa medida (precio por tornillo, por metro, por metro cuadrado, por litro...).
- **Coste**: cantidad × precio unitario, para esa fila.

Sumando el coste de todas las filas se obtiene el **subtotal**: el coste sin impuestos. A ese subtotal se le añade una casilla nueva con el **IVA**, calculado como un porcentaje del subtotal — en España, el tipo general es del 21 %. Sumando el subtotal más el IVA se llega al **precio de venta**: el importe final del proyecto.

En digitalización, el presupuesto se elabora en una **hoja de cálculo** (LibreOffice Calc o Excel), no a mano: si cambia el precio o la cantidad de un material, conviene que el resto de valores se recalcule solo, sin rehacer las cuentas. Para eso se usan fórmulas en lugar de escribir los números directamente — y calcular el IVA es, precisamente, el ejercicio típico de "calcular un porcentaje de un subtotal".

El presupuesto no va solo. Junto con la hoja de procesos —el registro diario de cómo avanza la fabricación, ya visto en [[Construir y evaluar]]— y la distribución de tareas del grupo, forma parte de los documentos que se incluyen en la memoria del proyecto.

## Clic.

Un presupuesto sencillo para construir la base de un portalápices:

| Nº | Concepto o material | Cantidad | Precio unitario | Coste |
|---|---|---|---|---|
| 1 | Tablero de contrachapado | 1,2 m² | 1,50 €/m² | 1,80 € |
| 2 | Tornillos | 8 unidades | 0,20 €/unidad | 1,60 € |
| 3 | Cola blanca | 0,05 l | 4,00 €/l | 0,20 € |
| | | | **Subtotal** | **3,60 €** |
| | | | **21 % IVA** | **0,76 €** |
| | | | **Precio de venta** | **4,36 €** |

Fíjate en la columna Cantidad: el tablero se mide en m² (superficie), los tornillos en unidades sueltas, la cola en litros (volumen) — y cada uno lleva su precio unitario en esa misma medida (€/m², €/unidad, €/l). Mezclar esas unidades sin darte cuenta es el error más habitual al hacer un presupuesto.

En la hoja de cálculo, la columna Coste no lleva el número escrito a mano: lleva una fórmula, `=C2*D2` (cantidad × precio unitario). El Subtotal se calcula sumando esa columna con `=SUMA(E2:E4)`, el IVA con `=0,21*Subtotal` — ahí es donde se aprende a calcular un porcentaje de una cantidad — y el precio de venta con `=Subtotal+IVA`. Si mañana cambia el precio del tablero, solo hay que tocar una celda: el resto del presupuesto se actualiza solo.

Esa es la ventaja real de hacerlo en digitalización y no en papel: el presupuesto deja de ser un cálculo que haces una vez, y pasa a ser un modelo que puedes volver a usar.

## Para saber más

- [LibreOffice Calc — Función SUMA](https://help.libreoffice.org/latest/es/text/scalc/01/func_sum.html) — ayuda oficial, en español
- [Agencia Tributaria — Tipos impositivos de IVA](https://sede.agenciatributaria.gob.es/Sede/iva/calculo-iva-repercutido-clientes/tipos-impositivos-iva.html) — tipo general vigente, fuente oficial
- Alonso, M. y Finn, E. *Física*. Addison-Wesley — referencia académica para profundizar

## En el currículo

**Materia**: Tecnología y Digitalización
**Curso**: 2º ESO
**Bloque**: Bloque 1: O proxecto tecnolóxico
**Referencia normativa**: Decreto 156/2022, do 26 de setembro (DOG núm. 183)

---

<nav class="nav-conceptos">
  <a href="/conceptos/tecnologia-cambio-unidades/">← Cambio de unidades</a>
  <a href="/conceptos/tecnologia-construir-evaluar/">Siguiente: Construir y evaluar →</a>
</nav>
