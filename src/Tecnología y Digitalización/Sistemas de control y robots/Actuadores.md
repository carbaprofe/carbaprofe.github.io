---
layout: base.njk
title: "Actuadores"
permalink: "/conceptos/control-actuadores/"
materia: "Tecnología y Digitalización"
curso: "2º ESO"
bloque: "Bloque 4: Programación, control e robótica"
tags: [tecnología, robótica, actuadores, ESO]
fecha: 2026-07-07
---

# Actuadores

<p class="meta">Tecnología y Digitalización · 2º ESO · Aula-taller</p>

## Definición

Un **actuador** es el elemento de un sistema de control que ejecuta la orden del [[Controladores: la toma de decisiones de un sistema|controlador]], produciendo un efecto físico sobre el entorno: un movimiento, una luz, un sonido. Si los sensores son los "sentidos" de un robot, los actuadores son sus "músculos".

Los actuadores más habituales en robótica educativa son:

- **Motores**: producen un giro o un movimiento (ruedas, brazos, ventiladores).
- **LED**: producen luz, y también sirven para mostrar información sencilla (encendido/apagado, colores, incluso texto en una matriz de LED).
- **Zumbador (buzzer)**: produce sonido, útil como aviso o alarma.

Un mismo controlador puede activar varios actuadores a la vez: por ejemplo, un robot puede encender un LED y activar un motor al mismo tiempo, si así lo indica el programa.

## Clic.

En la placa micro:bit, la matriz de 25 LED es a la vez pantalla y actuador: un programa puede hacer que muestre una cara sonriente cuando el sensor de luz detecta claridad, y una flecha cuando detecta oscuridad — el mismo esquema sensor → controlador → actuador visto en la píldora anterior, aplicado a un caso concreto.

## Para saber más

- [micro:bit — Primeros pasos](https://microbit.org/get-started/getting-started/get-coding/)
- [Microsoft MakeCode para micro:bit — editor oficial](https://makecode.microbit.org/)
- Roig Vila, R. (coord.). *Tecnología, programación y robótica educativa*. Octaedro — referencia académica para profundizar

## En el currículo

**Materia**: Tecnología y Digitalización
**Curso**: 2º ESO
**Bloque**: Bloque 4: Programación, control e robótica
**Referencia normativa**: Decreto 156/2022, do 26 de setembro (DOG núm. 183)

---

<nav class="nav-conceptos">
  <a href="/conceptos/control-sensores/">← Sensores</a>
  <a href="/conceptos/control-controladores/">Siguiente: Controladores →</a>
</nav>
