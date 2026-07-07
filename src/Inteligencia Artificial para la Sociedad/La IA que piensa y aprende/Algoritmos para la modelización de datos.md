---
layout: base.njk
title: "Algoritmos para la modelización de datos"
permalink: "/conceptos/ia4-algoritmos-modelizacion/"
materia: "Inteligencia Artificial para la Sociedad"
curso: "4º ESO"
bloque: "UD4: IA que pensa e aprende"
tags: [inteligencia artificial, algoritmos, aprendizaje automático, modelos, ESO]
fecha: 2026-07-08
---

# Algoritmos para la modelización de datos

<p class="meta">Inteligencia Artificial para la Sociedad · 4º ESO</p>

## Definición

Hasta ahora, razonar significaba diseñar reglas a mano: un programador decide "si el email contiene estas palabras, márcalo como spam" y escribe esa instrucción exacta. Este enfoque funciona bien en problemas simples y bien definidos, pero se rompe en cuanto la realidad es demasiado variada para anticiparla regla por regla — nadie puede escribir a mano todas las combinaciones de píxeles que hacen que una foto sea "un gato".

Ahí aparece un segundo tipo de algoritmo, con un objetivo distinto: en vez de resolver directamente un problema, su trabajo es **aprender un modelo a partir de datos**. En lugar de programar la solución, se le dan al algoritmo miles o millones de ejemplos junto con sus respuestas correctas. El algoritmo analiza esos ejemplos, encuentra patrones ocultos y construye automáticamente un **modelo matemático** capaz de responder ante casos nuevos que nunca ha visto.

Es la diferencia entre dos preguntas muy distintas:

- **Algoritmo para resolver un problema**: "¿qué pasos sigo yo para llegar a la solución?" — el programador conoce la lógica y la escribe.
- **Algoritmo para aprender un modelo**: "¿qué patrón hay en estos datos que me permita predecir la respuesta?" — nadie escribe la lógica final; el propio algoritmo la descubre a partir de ejemplos.

Este segundo tipo es lo que se conoce como **Aprendizaje Automático** (*Machine Learning*), y es la tecnología que sustenta los modelos de lenguaje, el reconocimiento facial o la IA generativa. Tres piezas lo definen: los **datos** (los ejemplos del pasado, el "combustible"), el **algoritmo** (el método matemático que busca patrones) y el **modelo** (el resultado del aprendizaje, capaz de dar una respuesta ante un dato nuevo).

## Clic.

Akinator parece un simple árbol de preguntas ("¿es real? ¿es hombre? ¿lleva gafas?..."), pero ese árbol es tan vasto — millones de ramas posibles — que sería imposible que una persona lo diseñara a mano, pregunta por pregunta. La solución no fue programar más reglas, sino dejar que el sistema **aprendiera** ese árbol a partir de millones de partidas jugadas por otros usuarios: cada vez que Akinator falla, pide el nombre del personaje y ajusta su modelo para la próxima vez. Es el ejemplo perfecto del salto de un tipo de algoritmo al otro: donde el razonamiento simbólico manual se queda corto por la complejidad del problema, el aprendizaje automático toma el relevo.

## Para saber más

- Montero Hernández, C.; Guerreiro Santalla, S.; Bellas Bouza, F. J. *Guía docente: Inteligencia Artificial para la Sociedad*. Febrero 2026 — guía oficial de la materia, actividad B3.7.1 "Akinator"
- Puentes Calvo, J. F. *Tecnologías Inteligentes: más que una introducción a la Inteligencia Artificial*. Edición 2025 (licencia CC) — capítulo 14.2 "Aprendizaje automático y ciencia de datos"

## En el currículo

**Materia**: Inteligencia Artificial para la Sociedad
**Curso**: 4º ESO
**UD**: UD4: IA que pensa e aprende · 21 sesiones · Peso: 20 % · 2º-3º trimestre
**Criterio de avaliación**: CA3.4 — Comprender o concepto de algoritmo para resolver problemas e diferencialo do concepto de algoritmo para aprender un modelo a partir de datos.
**Referencia normativa**: Orde do 9 de agosto de 2023 (DOG núm. 161, do 25 de agosto de 2023)

---

<nav class="nav-conceptos">
  <a href="/conceptos/ia4-razonamiento/">← El razonamiento: algoritmos y resolución de problemas</a>
  <a href="/conceptos/ia4-ciencia-datos/">Siguiente: El aprendizaje automático: ciencia de datos →</a>
</nav>
