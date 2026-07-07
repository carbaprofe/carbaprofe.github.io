---
layout: base.njk
title: "El aprendizaje automático: ciencia de datos"
aliases: ["El aprendizaje automático: ciencia de datos"]
permalink: "/conceptos/ia4-ciencia-datos/"
materia: "Inteligencia Artificial para la Sociedad"
curso: "4º ESO"
bloque: "UD4: IA que pensa e aprende"
tags: [inteligencia artificial, aprendizaje automático, ciencia de datos, redes neuronales, ESO]
fecha: 2026-07-08
---

# El aprendizaje automático: ciencia de datos

<p class="meta">Inteligencia Artificial para la Sociedad · 4º ESO</p>

## Definición

El aprendizaje automático se organiza en tres grandes tipos, según cómo son los datos de partida y qué se le pide al sistema:

- **Aprendizaje supervisado**: el algoritmo recibe ejemplos ya etiquetados ("esta imagen es un gato", "este email es spam") y aprende a relacionar características con respuestas correctas, para poder predecir la etiqueta de casos nuevos. Dentro del aprendizaje supervisado hay dos tipos de problema: **clasificación** (¿qué es esto? — spam o no spam, perro o gato) y **regresión** (¿cuánto vale esto? — el precio de una vivienda, la temperatura de mañana).
- **Aprendizaje no supervisado**: el algoritmo recibe datos sin etiquetar y debe descubrir por sí mismo estructuras o grupos — por ejemplo, agrupar clientes con comportamientos de compra parecidos (*clustering*) o detectar transacciones inusuales. No hay una "respuesta correcta" previa: el valor está en revelar patrones que una persona no habría visto.
- **Aprendizaje por refuerzo**: un agente actúa en un entorno y recibe recompensas o penalizaciones según el resultado de sus acciones, ajustando su comportamiento para maximizar la recompensa futura. Es la base de robots que aprenden a moverse o de sistemas que aprenden a jugar (AlphaGo).

Por debajo de estos tres tipos, buena parte de la IA actual se apoya en **redes de neuronas artificiales**: un modelo inspirado en el sistema nervioso biológico, formado por neuronas organizadas en capas (entrada, capas ocultas, salida) conectadas por pesos que se ajustan durante el entrenamiento para minimizar el error. Cuantas más capas y neuronas tiene una red —lo que se llama ***Deep Learning*** o aprendizaje profundo—, más patrones complejos puede aprender, aunque también necesita más datos y más potencia de cálculo. Son la base de sistemas como el reconocimiento de voz, las fotos etiquetadas automáticamente o los modelos de lenguaje.

## Clic.

En la actividad "IA para los océanos" (code.org), cada alumno entrena a una IA para limpiar el mar: debe clasificar objetos como "pez" o "no pez" (basura), etiquetando ejemplos uno a uno. A medida que avanza el etiquetado, el sistema empieza a clasificar objetos nuevos por su cuenta, sin ayuda — es aprendizaje supervisado en estado puro: datos etiquetados por una persona → algoritmo que busca el patrón → modelo capaz de responder ante un objeto que nunca vio. Y si en algún momento se introducen etiquetas contradictorias a propósito, el comportamiento de la IA cambia de inmediato: la calidad de las predicciones depende directamente de la calidad de los datos con los que se entrenó.

## Para saber más

- Montero Hernández, C.; Guerreiro Santalla, S.; Bellas Bouza, F. J. *Guía docente: Inteligencia Artificial para la Sociedad*. Febrero 2026 — guía oficial de la materia, bloque 3.5 y actividad B3.5 "IA para los océanos"
- Puentes Calvo, J. F. *Tecnologías Inteligentes: más que una introducción a la Inteligencia Artificial*. Edición 2025 (licencia CC) — capítulos 15 "La ciencia de los datos" y 17 "Redes neuronales artificiales"

## En el currículo

**Materia**: Inteligencia Artificial para la Sociedad
**Curso**: 4º ESO
**UD**: UD4: IA que pensa e aprende · 21 sesiones · Peso: 20 % · 2º-3º trimestre
**Criterio de avaliación**: CA3.5 — Recoller, representar e analizar conxuntos de datos, utilizando ferramentas e software para visualizalos de forma lóxica e coherente.
**Referencia normativa**: Orde do 9 de agosto de 2023 (DOG núm. 161, do 25 de agosto de 2023)

---

<nav class="nav-conceptos">
  <a href="/conceptos/ia4-algoritmos-modelizacion/">← Algoritmos para la modelización de datos</a>
  <a href="/conceptos/ia4-ajuste-modelos/">Siguiente: El aprendizaje automático: ajuste de modelos y análisis de resultados →</a>
</nav>
