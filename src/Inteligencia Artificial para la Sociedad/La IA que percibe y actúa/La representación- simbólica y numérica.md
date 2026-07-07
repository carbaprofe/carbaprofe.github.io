---
layout: base.njk
title: "La representación: simbólica y numérica"
aliases: ["La representación: simbólica y numérica"]
permalink: "/conceptos/ia3-representacion/"
materia: "Inteligencia Artificial para la Sociedad"
curso: "4º ESO"
bloque: "UD3: A que percibe e actúa"
tags: [inteligencia artificial, representación, simbólica, numérica, grafos, ESO]
fecha: 2026-07-08
---

# La representación: simbólica y numérica

<p class="meta">Inteligencia Artificial para la Sociedad · 4º ESO</p>

## Definición

Una vez que un agente percibe el entorno, necesita convertir esa percepción en un formato que pueda usar para decidir. A eso se le llama **representación** — el "mapa interno" de la realidad con el que trabaja la IA, y que después usa para razonar. Hay dos niveles:

- **Representación numérica (sub-simbólica)**: para una máquina, todo son números. Una imagen es una matriz de píxeles — cada celda, un número que indica color y brillo. Un sonido es una secuencia de valores numéricos en el tiempo. Es el nivel más básico: sin él, el procesador no puede operar con nada.
- **Representación simbólica (conceptual)**: un nivel superior en el que la IA maneja símbolos o etiquetas que representan objetos o reglas del mundo real — "obstáculo", "camino libre", "gato". Permite representar relaciones (un mapa como un grafo de lugares y calles, para calcular la ruta más corta) y tiene una ventaja clave: es **explicable**. Si la IA toma una decisión, se puede mirar su "mapa" simbólico y entender exactamente por qué la tomó.

Debajo de ambos niveles está la representación más básica de todas: toda la información, desde una regla lógica hasta una imagen compleja, se acaba expresando como secuencias de bits — el **sistema binario** (encendido/apagado, 0 y 1) es la base de la computación. El **sistema hexadecimal** es una forma compacta de escribir esas mismas cadenas de bits de manera legible para una persona — se usa mucho, por ejemplo, para definir colores (RGB) en una pantalla.

Para representar **conocimiento** (no solo datos), la IA simbólica se apoya en varias estructuras:

- **Grafos**: nodos (entidades, lugares) conectados por aristas (relaciones) — así planifica un coche autónomo la ruta más corta en un mapa.
- **Árboles de decisión**: estructuras jerárquicas donde cada nodo es una pregunta y cada hoja una decisión — la forma más clara de IA explicable, porque se puede seguir el camino exacto que siguió la máquina.
- **Tablas**: filas y columnas, cada columna un atributo y cada fila un registro — la base de las bases de datos y del aprendizaje automático supervisado.

Los sistemas actuales tienden a combinar ambos niveles: usan modelos numéricos (como redes neuronales) para procesar datos masivos y detectar patrones, y después integran ese resultado en estructuras simbólicas para ganar en interpretabilidad y control.

## Clic.

Sigue el mismo dato a través de los tres niveles de representación: una cámara capta la imagen de un semáforo (numérica — una matriz de píxeles con valores de color); un algoritmo de visión procesa esos píxeles y produce la etiqueta "semáforo en rojo" (paso de numérico a simbólico); y un árbol de decisión usa esa etiqueta para decidir "detener el coche" (razonamiento simbólico, explicable — se puede señalar exactamente qué regla se aplicó). Sin el primer paso no hay datos; sin el último no hay explicación de la decisión.

## Para saber más

- Montero Hernández, C.; Guerreiro Santalla, S.; Bellas Bouza, F. J. *Guía docente: Inteligencia Artificial para la Sociedad*. Febrero 2026 — guía oficial de la materia, bloque 3.3
- Puentes Calvo, J. F. *Tecnologías Inteligentes: más que una introducción a la Inteligencia Artificial*. Edición 2025 (licencia CC) — apartado 2.1.2 "Escuelas de pensamiento" (IA simbólica vs. sub-simbólica)

## En el currículo

**Materia**: Inteligencia Artificial para la Sociedad
**Curso**: 4º ESO
**UD**: UD3: A que percibe e actúa · 21 sesiones · Peso: 20 % · 1º-2º trimestre
**Criterio de avaliación**: CA3.3 — Comprender as formas básicas de representación interna dos datos nos sistemas computacionais, e a problemática de representar o coñecemento do mundo real.
**Referencia normativa**: Orde do 9 de agosto de 2023 (DOG núm. 161, do 25 de agosto de 2023)

---

<nav class="nav-conceptos">
  <a href="/conceptos/ia3-tipos-actuadores/">← Tipos de actuadores en la inteligencia artificial</a>
  <a href="/temas/ia3-percibe-actua/">Volver a La IA que percibe y actúa →</a>
</nav>
