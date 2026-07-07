---
layout: base.njk
title: "Tipos de actuadores en la inteligencia artificial"
permalink: "/conceptos/ia3-tipos-actuadores/"
materia: "Inteligencia Artificial para la Sociedad"
curso: "4º ESO"
bloque: "UD3: A que percibe e actúa"
tags: [inteligencia artificial, actuadores, robótica, Robobo, ESO]
fecha: 2026-07-08
---

# Tipos de actuadores en la inteligencia artificial

<p class="meta">Inteligencia Artificial para la Sociedad · 4º ESO</p>

## Definición

Elegir el actuador correcto no basta: un agente inteligente necesita usar sus sensores para **verificar** que la acción ha tenido el efecto esperado. Actuar sin comprobar es tan poco fiable como percibir sin actuar. Esa idea se entiende mejor programando paso a paso un robot real (o su simulador), añadiendo capacidades una a una:

- **Movimiento sin percepción (automatismo puro)**: un robot programado para avanzar en línea recta durante un tiempo fijo, sin ningún sensor activo. No es consciente de su entorno — si hay una pared en su camino, choca. Solo ejecuta una orden previa, sin ciclo de percepción.
- **Percepción y parada (agente reactivo)**: se añade un sensor de proximidad y una condición lógica — el robot avanza mientras no detecte nada, y se detiene en cuanto el sensor marca un obstáculo cercano. Aquí aparece por primera vez el ciclo completo: percepción (sensor) → decisión (lógica) → acción (parar motores).
- **Navegación y evasión (autonomía completa)**: con varios sensores a la vez, el robot no solo se detiene ante un obstáculo, sino que gira y continúa explorando de forma indefinida, adaptándose a cada obstáculo nuevo que encuentra.

Este mismo progreso — de la ejecución ciega a la autonomía completa — es el que distingue un simple mecanismo de un agente inteligente de verdad. Y conviene tener presente el concepto de ***reality gap***: un simulador, por muy realista que sea, nunca reproduce el 100 % de la complejidad del mundo físico (deslizamiento de ruedas, tolerancias mecánicas, rozamiento). Por eso un programa que funciona perfecto en un simulador puede comportarse de forma distinta en un robot real — la verdadera inteligencia debe ser capaz de manejar esa incertidumbre añadida del mundo físico, no solo la del entorno simulado.

## Clic.

La tabla que resume los tres tipos de actuación, con su equivalente humano y su equivalente en IA:

| Tipo de actuación | Ejemplo humano | Ejemplo máquina / IA | Actuadores |
|---|---|---|---|
| Movimiento | Caminar, coger objetos | Robot que se mueve o agarra piezas | Motores, ruedas, brazos robóticos |
| Visualización | Señalar, dibujar, escribir | Pantalla de móvil, panel informativo | Pantallas, LEDs, proyectores |
| Comunicación | Hablar, escribir mensajes | Asistente de voz, chatbot, notificaciones | Altavoces, mensajes de texto, emails |

Y una última capa de comunicación con el usuario, que suele olvidarse: cuando programas un robot para escapar de un obstáculo, es buena práctica hacer que un LED se ponga rojo en el momento exacto en que detecta ese obstáculo, y verde el resto del tiempo. No es solo estética — es lo que permite a una persona entender, sin leer el código, qué está "pensando" el robot en cada instante.

## Para saber más

- Montero Hernández, C.; Guerreiro Santalla, S.; Bellas Bouza, F. J. *Guía docente: Inteligencia Artificial para la Sociedad*. Febrero 2026 — guía oficial de la materia, bloque 3.2 (actividad "Robobo", retos 1-3)
- [The Robobo Project](https://theroboboproject.com) — robot y simulador RoboboSim usados en la actividad de la materia

## En el currículo

**Materia**: Inteligencia Artificial para la Sociedad
**Curso**: 4º ESO
**UD**: UD3: A que percibe e actúa · 21 sesiones · Peso: 20 % · 1º-2º trimestre
**Criterio de avaliación**: CA3.2 — Coñecer e identificar os tipos básicos de actuadores utilizados na intelixencia artificial.
**Referencia normativa**: Orde do 9 de agosto de 2023 (DOG núm. 161, do 25 de agosto de 2023)

---

<nav class="nav-conceptos">
  <a href="/conceptos/ia3-actuacion/">← La actuación: movimiento, visualización y comunicación</a>
  <a href="/conceptos/ia3-representacion/">Siguiente: La representación: simbólica y numérica →</a>
</nav>
