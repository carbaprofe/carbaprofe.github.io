---
layout: base.njk
title: "Resolución de circuitos: resistencia equivalente"
aliases: ["Resolución de circuitos: resistencia equivalente"]
permalink: "/conceptos/electricidad-resolucion-circuitos/"
materia: "Tecnología y Digitalización"
curso: "2º ESO"
bloque: "Bloque 3: Elementos de máquinas, sistemas e robots"
tags: [electricidad, resistencia equivalente, circuito serie, circuito paralelo, circuito mixto, ESO]
fecha: 2026-07-06
---

# Resolución de circuitos: resistencia equivalente

<p class="meta">Tecnología y Digitalización · 2º ESO</p>

## Definición

Ya sabes distinguir un circuito en [[Circuitos eléctricos: serie y paralelo]]. Cuando un circuito tiene varias resistencias, calcular la intensidad y la tensión de cada una parece complicado — hasta que reduces todo el circuito a uno solo con una única resistencia equivalente, y aplicas la [[Ley de Ohm]] sobre ese circuito simplificado.

**En serie**, la resistencia equivalente es la suma de todas:

Rt = R1 + R2 + ... + Rn

La intensidad es la misma en todas las resistencias (It = I1 = I2 = ...). La tensión se reparte entre ellas (Vt = V1 + V2 + ...).

**En paralelo**, la inversa de la resistencia equivalente es la suma de las inversas:

1/Rt = 1/R1 + 1/R2 + ... + 1/Rn

La tensión es la misma en todas las ramas (Vt = V1 = V2 = ...). La intensidad se reparte entre ellas (It = I1 + I2 + ...).

**En un circuito mixto**, hay partes en serie y partes en paralelo. Se resuelve por pasos: primero calculas la resistencia equivalente de la parte en paralelo, la sustituyes por una sola resistencia, y el circuito que queda lo resuelves como uno en serie.

## Clic.

Un ejemplo con números sencillos. Una pila de 10V alimenta dos resistencias en serie: R1 = 200Ω y R2 = 300Ω.

Paso 1 — resistencia equivalente: Rt = 200 + 300 = 500Ω

Paso 2 — intensidad total, con la Ley de Ohm sobre el circuito equivalente: It = Vt / Rt = 10 / 500 = 0,02A = 20mA

Paso 3 — como es un circuito en serie, esa misma intensidad (20mA) atraviesa las dos resistencias. La tensión que cae en cada una:

V1 = R1 × It = 200 × 0,02 = 4V
V2 = R2 × It = 300 × 0,02 = 6V

Comprobación: V1 + V2 = 4 + 6 = 10V, exactamente la tensión de la pila. Si el resultado no cuadra, algo se ha calculado mal.

Con un circuito en paralelo el razonamiento es el espejo: calculas primero Rt con las inversas, y esta vez es la tensión la que se repite igual en todas las resistencias, mientras que la intensidad total se reparte entre ellas.

## Para saber más

- [PhET — Kit de Construcción de Circuitos: CD](https://phet.colorado.edu/es/simulations/circuit-construction-kit-dc) — monta el circuito del ejemplo y comprueba los valores con el amperímetro y el voltímetro
- [Khan Academy — Corriente eléctrica](https://es.khanacademy.org/science/fisica-pe-pre-u/x4594717deeb98bd3:corriente-electrica) — unidad completa en español
- Tipler, P. *Física para la ciencia y la tecnología*. Reverté — referencia académica estándar

## En el currículo

**Materia**: Tecnología y Digitalización
**Curso**: 2º ESO
**Bloque**: Bloque 3: Elementos de máquinas, sistemas e robots
**Referencia normativa**: Decreto 156/2022, do 26 de setembro (DOG núm. 183)

---

<nav class="nav-conceptos">
  <a href="/conceptos/electricidad-circuitos/">← Circuitos eléctricos</a>
  <a href="/conceptos/electricidad-componentes/">Siguiente: Componentes y simbología →</a>
</nav>
