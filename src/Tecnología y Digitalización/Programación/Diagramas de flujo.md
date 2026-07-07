---
layout: base.njk
title: "Diagramas de flujo"
permalink: "/conceptos/programacion-diagramas-flujo/"
materia: "Tecnología y Digitalización"
curso: "2º ESO"
bloque: "Bloque 4: Programación, control e robótica"
tags: [tecnología, programación, diagramas de flujo, ESO]
fecha: 2026-07-07
---

# Diagramas de flujo

<p class="meta">Tecnología y Digitalización · 2º ESO · Digitalización</p>

## Definición

Un **diagrama de flujo** representa un [[Programación y algoritmos|algoritmo]] con dibujos en vez de con texto, usando un símbolo distinto según el tipo de paso. Esto permite ver de un vistazo la estructura completa del algoritmo, incluidos los caminos alternativos, antes de escribir ni una sola línea de código.

Los símbolos básicos son pocos y siempre los mismos:

- **Óvalo**: marca el **inicio** o el **fin** del algoritmo.
- **Rectángulo**: representa un **proceso**, una acción u operación concreta.
- **Paralelogramo**: representa una **entrada** de datos (lo que el algoritmo recibe) o una **salida** (lo que el algoritmo muestra o produce).
- **Rombo**: representa una **decisión**, una **condición** que solo puede responderse sí/no, y de la que salen dos caminos distintos según la respuesta.

Las flechas conectan los símbolos e indican el orden en el que se ejecutan los pasos.

## Clic.

El diagrama de flujo para "decidir si un número es par o impar": óvalo de inicio → paralelogramo "leer número" → rombo "¿el resto de dividir entre 2 es 0?" → si la respuesta es sí, rectángulo "es par"; si es no, rectángulo "es impar" → los dos caminos terminan en el mismo óvalo de fin.

## Para saber más

- [Xunta de Galicia — Viaje programado: Algoritmos y diagramas de flujo](https://recursos.edu.xunta.gal/sites/default/files/recurso/1639064388/31_algoritmos_y_diagramas_de_flujo.html) — recurso oficial usado en el aula virtual
- [Lucidchart — Notación y símbolos para diagramas de flujo](https://www.lucidchart.com/pages/es/tutorial/simbolos-diagrama-de-flujo)
- Roig Vila, R. (coord.). *Tecnología, programación y robótica educativa*. Octaedro — referencia académica para profundizar

## En el currículo

**Materia**: Tecnología y Digitalización
**Curso**: 2º ESO
**Bloque**: Bloque 4: Programación, control e robótica
**Referencia normativa**: Decreto 156/2022, do 26 de setembro (DOG núm. 183)

---

<nav class="nav-conceptos">
  <a href="/conceptos/programacion-algoritmos/">← Programación y algoritmos</a>
  <a href="/conceptos/programacion-estructuras-control/">Siguiente: Estructuras de control →</a>
</nav>
