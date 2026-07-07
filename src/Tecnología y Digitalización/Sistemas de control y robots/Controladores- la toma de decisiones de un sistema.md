---
layout: base.njk
title: "Controladores: la toma de decisiones de un sistema"
aliases: ["Controladores: la toma de decisiones de un sistema"]
permalink: "/conceptos/control-controladores/"
materia: "Tecnología y Digitalización"
curso: "2º ESO"
bloque: "Bloque 4: Programación, control e robótica"
tags: [tecnología, robótica, controlador, micro:bit, ESO]
fecha: 2026-07-07
---

# Controladores: la toma de decisiones de un sistema

<p class="meta">Tecnología y Digitalización · 2º ESO · Digitalización</p>

## Definición

El **controlador** es el elemento que recibe la información de los [[Sensores|sensores]], la compara con las condiciones que tiene programadas, y decide qué orden enviar a los [[Actuadores|actuadores]]. Es, literalmente, el elemento donde se ejecuta el programa: por eso un controlador es, en el fondo, un pequeño ordenador.

En el aula usamos la placa **micro:bit** como controlador de ejemplo. Se programa con **MakeCode**, un editor de bloques (parecido al de [[Programación por bloques con Blockly|Blockly]], visto en la unidad de Programación) pensado específicamente para esta placa: se arrastran bloques como "si el sensor de luz es menor que...", "entonces enciende el LED" o "repite mientras...", que son exactamente las [[Estructuras de control: secuencial, condicional y repetitiva|estructuras de control]] —secuencial, condicional y repetitiva— que ya conoces, aplicadas ahora a un dispositivo físico en lugar de a un personaje en pantalla.

## Clic.

Un programa sencillo en MakeCode para micro:bit: "mientras el programa esté en marcha, si el sensor de luz mide menos de un valor determinado, muestra una cara triste; si no, muestra una cara sonriente." La estructura condicional decide qué mostrar; la placa (el controlador) es la que compara continuamente el valor del sensor con la condición programada.

## Para saber más

- [Microsoft MakeCode para micro:bit — editor oficial](https://makecode.microbit.org/)
- [micro:bit — Primeros pasos](https://microbit.org/get-started/getting-started/get-coding/)
- Roig Vila, R. (coord.). *Tecnología, programación y robótica educativa*. Octaedro — referencia académica para profundizar

## En el currículo

**Materia**: Tecnología y Digitalización
**Curso**: 2º ESO
**Bloque**: Bloque 4: Programación, control e robótica
**Referencia normativa**: Decreto 156/2022, do 26 de setembro (DOG núm. 183)

---

<nav class="nav-conceptos">
  <a href="/conceptos/control-actuadores/">← Actuadores</a>
  <a href="/conceptos/control-iot/">Siguiente: Internet de las cosas (IoT) →</a>
</nav>
