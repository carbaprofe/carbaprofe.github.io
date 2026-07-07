---
layout: base.njk
title: "Tipos de sensores en la inteligencia artificial"
permalink: "/conceptos/ia3-tipos-sensores/"
materia: "Inteligencia Artificial para la Sociedad"
curso: "4º ESO"
bloque: "UD3: A que percibe e actúa"
tags: [inteligencia artificial, sensores, LIDAR, cámaras, ESO]
fecha: 2026-07-08
---

# Tipos de sensores en la inteligencia artificial

<p class="meta">Inteligencia Artificial para la Sociedad · 4º ESO</p>

## Definición

Un agente puede necesitar desde un simple interruptor hasta una cámara capaz de reconocer rostros en una multitud, según la complejidad de la tarea. Un recorrido por los sensores más habituales, de más simple a más avanzado:

- **Interruptores y sensores de contacto**: detectan presencia o ausencia de contacto físico abriendo o cerrando un circuito. Es la base de los "bumpers" que avisan de una colisión en robótica móvil — salida binaria (activado/no activado), pero útil para eventos simples.
- **Sensores táctiles**: como los de una pantalla de móvil, detectan posición exacta, presión y movimiento de uno o varios dedos — una entrada de datos mucho más rica que un simple interruptor.
- **Sensores de luz e infrarrojos**: miden la cantidad de luz incidente; los infrarrojos pueden ser pasivos (detectan emisiones IR) o activos (emiten y miden el reflejo), útiles para medir distancias o detectar presencia.
- **Sensores de ultrasonidos**: emiten ondas sonoras fuera del rango audible y miden el tiempo que tarda el eco en volver tras chocar con un obstáculo — el mismo principio que usan murciélagos y delfines para orientarse.
- **LIDAR**: emite pulsos láser y mide el tiempo de vuelo hasta los objetos, generando una "nube de puntos" en 2D o 3D. Muy preciso y de largo alcance, aunque caro — clave en vehículos autónomos y cartografiado.
- **GPS**: da localización y sincronización temporal en casi cualquier punto con visión de varios satélites; se combina con otros sensores (brújula, odometría) para planificar rutas.
- **Cámaras (visión por computador)**: el sensor más versátil por la cantidad de información que aportan — detección y reconocimiento de objetos, seguimiento de personas, análisis de expresiones faciales.
- **Micrófonos**: captan audio para reconocimiento de voz o detección de eventos acústicos (alarmas, golpes) — un procesamiento complicado por el ruido y la reverberación del entorno real.
- **Comunicaciones como sensor**: en sistemas distribuidos, recibir datos de otros agentes vía WiFi, Bluetooth o 5G también cuenta como una forma de percibir — el agente "sabe" cosas que no ha medido él mismo, sino que le han llegado por red.

## Clic.

Piensa en un coche autónomo real y cuenta cuántos de estos sensores necesita a la vez: cámaras para leer señales de tráfico, LIDAR para construir un mapa 3D del entorno, GPS para saber dónde está, micrófonos para detectar sirenas, y probablemente comunicación con otros vehículos o con la infraestructura urbana. Ningún sensor por sí solo basta — la fiabilidad viene de combinar varios tipos que se compensan entre sí: si la cámara falla por poca luz, el LIDAR sigue funcionando igual de bien de noche.

## Para saber más

- Montero Hernández, C.; Guerreiro Santalla, S.; Bellas Bouza, F. J. *Guía docente: Inteligencia Artificial para la Sociedad*. Febrero 2026 — guía oficial de la materia, bloque 3.1 (apartado "Ejemplos de sensores y tecnologías clave")
- Puentes Calvo, J. F. *Tecnologías Inteligentes: más que una introducción a la Inteligencia Artificial*. Edición 2025 (licencia CC) — capítulo 7, visión artificial y percepción

## En el currículo

**Materia**: Inteligencia Artificial para la Sociedad
**Curso**: 4º ESO
**UD**: UD3: A que percibe e actúa · 21 sesiones · Peso: 20 % · 1º-2º trimestre
**Criterio de avaliación**: CA3.1 — Coñecer os tipos básicos de sensores utilizados na intelixencia artificial e a diferencia entre sensorización e percepción.
**Referencia normativa**: Orde do 9 de agosto de 2023 (DOG núm. 161, do 25 de agosto de 2023)

---

<nav class="nav-conceptos">
  <a href="/conceptos/ia3-percepcion/">← La percepción: sensores y obtención de datos</a>
  <a href="/conceptos/ia3-actuacion/">Siguiente: La actuación: movimiento, visualización y comunicación →</a>
</nav>
