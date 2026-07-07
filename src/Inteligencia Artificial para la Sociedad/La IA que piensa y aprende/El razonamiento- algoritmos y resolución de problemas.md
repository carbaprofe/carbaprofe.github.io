---
layout: base.njk
title: "El razonamiento: algoritmos y resolución de problemas"
aliases: ["El razonamiento: algoritmos y resolución de problemas"]
permalink: "/conceptos/ia4-razonamiento/"
materia: "Inteligencia Artificial para la Sociedad"
curso: "4º ESO"
bloque: "UD4: IA que pensa e aprende"
tags: [inteligencia artificial, razonamiento, algoritmos, representación, ESO]
fecha: 2026-07-08
---

# El razonamiento: algoritmos y resolución de problemas

<p class="meta">Inteligencia Artificial para la Sociedad · 4º ESO</p>

## Definición

Una vez que un agente ha percibido el entorno y lo ha representado de alguna forma, necesita decidir qué hacer. A esa capacidad de elegir la secuencia de acciones que resuelve una tarea de forma autónoma se le llama **razonamiento**. Razonar no es "pensar" en un sentido misterioso: es diseñar y ejecutar un **algoritmo** — una secuencia de instrucciones — que opera sobre la información representada previamente.

Un algoritmo puede escribirse a distintos **niveles de abstracción**, y todos acaban ejecutándose sobre el mismo hardware:

- **Código máquina** — el nivel más bajo, binario, ilegible para una persona pero el único que el procesador ejecuta directamente.
- **Ensamblador** — un paso intermedio con mnemotécnicos, todavía muy próximo al hardware.
- **Lenguajes de alto nivel** (Python, Scratch, Java...) — los más cercanos al lenguaje humano, y donde se diseñan hoy los algoritmos de IA. El paso de un nivel a otro es automático, lo que permite centrarse en la lógica del razonamiento y no en el hardware.

Hay una relación directa entre cómo representamos la información y cómo razonamos sobre ella: **a problemas más complejos, representaciones más ricas**. Sumar dos números (`a + b`) solo necesita dos variables. Calcular la ruta más corta en un mapa necesita representar ese mapa como un grafo, y sobre ese grafo se aplican algoritmos de búsqueda específicos (como A* o Dijkstra) para encontrar la solución. Mantener una conversación necesita una representación todavía más rica, que incluya el lenguaje.

Y el tipo de representación condiciona la estrategia de razonamiento:

- **Representación simbólica** → razonamiento lógico, por deducción e inducción. Un árbol de decisión ("¿tiene fiebre? Sí → ¿tiene tos? No → ...") es un sistema de reglas "si... entonces" totalmente **explicable**: se puede seguir el camino exacto que llevó a la conclusión.
- **Representación numérica** → estrategias de búsqueda y optimización sobre conjuntos de datos, donde los algoritmos matemáticos ganan en precisión pero pierden en transparencia.

## Clic.

En la actividad "Seguir la ruta" (Scratch), un agente debe atravesar un laberinto hasta un objetivo sin moverse al azar. Antes de mover una sola pieza, el programa genera un "mapa de rutas": desde el objetivo, va expandiendo un camino hacia fuera y coloreando cada casilla según la dirección que conviene tomar desde ahí (arriba = rojo, derecha = verde...). Solo entonces el agente empieza a moverse, leyendo en cada paso el color de la casilla que pisa. La lección clave no es de programación, sino de razonamiento: **una buena representación (el mapa de colores) es lo que permite un razonamiento eficiente** — y si el laberinto cambiara de repente, ese mapa rígido dejaría de servir, que es justo el límite que el aprendizaje automático viene a resolver.

## Para saber más

- Montero Hernández, C.; Guerreiro Santalla, S.; Bellas Bouza, F. J. *Guía docente: Inteligencia Artificial para la Sociedad*. Febrero 2026 — guía oficial de la materia, bloque 3.4
- Puentes Calvo, J. F. *Tecnologías Inteligentes: más que una introducción a la Inteligencia Artificial*. Edición 2025 (licencia CC) — capítulo 14 "Algoritmos y modelos"

## En el currículo

**Materia**: Inteligencia Artificial para la Sociedad
**Curso**: 4º ESO
**UD**: UD4: IA que pensa e aprende · 21 sesiones · Peso: 20 % · 2º-3º trimestre
**Criterio de avaliación**: CA3.4 — Comprender o concepto de algoritmo para resolver problemas e diferencialo do concepto de algoritmo para aprender un modelo a partir de datos.
**Referencia normativa**: Orde do 9 de agosto de 2023 (DOG núm. 161, do 25 de agosto de 2023)

---

<nav class="nav-conceptos">
  <a href="/temas/ia4-piensa-aprende/">← La IA que piensa y aprende</a>
  <a href="/conceptos/ia4-algoritmos-modelizacion/">Siguiente: Algoritmos para la modelización de datos →</a>
</nav>
