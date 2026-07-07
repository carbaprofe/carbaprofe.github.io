---
layout: base.njk
title: "Los robots autónomos"
permalink: "/conceptos/ia5-robots-autonomos/"
materia: "Inteligencia Artificial para la Sociedad"
curso: "4º ESO"
bloque: "UD5: IA aplicada"
tags: [inteligencia artificial, robótica, robots autónomos, visión artificial, Robobo, ESO]
fecha: 2026-07-08
---

# Los robots autónomos

<p class="meta">Inteligencia Artificial para la Sociedad · 4º ESO</p>

## Definición

Un robot autónomo integra en un solo sistema todo el ciclo de un agente inteligente: **percibe** el entorno con sus sensores, **razona** qué hacer con esa información y **actúa** en consecuencia, repitiendo ese ciclo de forma continua sin intervención humana. Lo interesante no es que el robot siga una secuencia fija de movimientos, sino que su comportamiento sea una **respuesta dinámica** a lo que va detectando en cada instante — lo que se llama control reactivo.

Un ejemplo típico es la detección visual de un objeto por color (análisis de "blobs" o manchas): el robot mide cuántos píxeles ocupa la mancha de un color en su cámara, y ese tamaño le indica —de forma indirecta— la distancia al objeto. A partir de ahí, aplica una jerarquía de comportamientos:

1. **Búsqueda**: si no detecta el objetivo, explora el entorno moviendo primero sus sensores (por ejemplo, una cámara giratoria) antes que todo el cuerpo — es más eficiente y gasta menos energía.
2. **Orientación**: al detectar el objetivo, se alinea con él.
3. **Aproximación proporcional**: se acerca reduciendo la velocidad a medida que la distancia disminuye, en vez de moverse siempre a la misma velocidad — así puede detenerse con precisión sin colisionar.

Esta misma lógica —percepción por sensores, decisión mediante umbrales (no valores fijos, porque el mundo real es ruidoso) y actuación proporcional— es la que hay detrás de aplicaciones reales como un robot de logística en un almacén, un vehículo de rescate o un coche autónomo evitando obstáculos en una carretera.

## Clic.

En el reto "Robobo: perseguir la bola verde", el robot debe encontrar una pelota de color, orientarse hacia ella —primero girando la "cabeza", luego el cuerpo, tal como haría una persona— y aproximarse hasta detenerse justo delante sin chocar. Si tras un giro completo no encuentra ninguna pelota, enciende sus LED en rojo parpadeante y se rinde: el sistema reconoce sus propios límites en vez de fallar en silencio. La misma lógica se prueba, más simplificada, programando un coche autónomo en Scratch que recorre un circuito y esquiva obstáculos con sensores simulados — y ahí aparece de nuevo el concepto de ***reality gap***: lo que funciona perfecto en el simulador puede comportarse distinto en un robot real.

## Para saber más

- Montero Hernández, C.; Guerreiro Santalla, S.; Bellas Bouza, F. J. *Guía docente: Inteligencia Artificial para la Sociedad*. Febrero 2026 — guía oficial de la materia, bloque 4, actividades B4.2 "Robobo: perseguir la bola verde" y B4.5 "Coche autónomo"
- [The Robobo Project](https://theroboboproject.com) — robot y simulador RoboboSim usados en la actividad de la materia

## En el currículo

**Materia**: Inteligencia Artificial para la Sociedad
**Curso**: 4º ESO
**UD**: UD5: IA aplicada · 36 sesiones · Peso: 35 % · 3º trimestre
**Criterios de avaliación**:
CA4.1 — Recoñecer as áreas básicas da intelixencia artificial nas diferentes tecnoloxías transversais mediante a resolución de problemas específicos a nivel de persoa usuaria.
CA4.2 — Resolver problemas específicos coas diferentes tecnoloxías transversais utilizando as áreas da intelixencia artificial.
CA4.3 — Saber utilizar e comprender os fundamentos das principais ferramentas dixitais utilizadas na creación de solucións de intelixencia artificial.
CA4.4 — Comunicar de maneira clara e efectiva os resultados e as conclusións das solucións de intelixencia artificial deseñadas.
**Referencia normativa**: Orde do 9 de agosto de 2023 (DOG núm. 161, do 25 de agosto de 2023)

---

<nav class="nav-conceptos">
  <a href="/conceptos/ia5-interaccion-natural/">← La interacción natural con la inteligencia artificial</a>
  <a href="/conceptos/ia5-mundos-virtuales/">Siguiente: Los mundos virtuales →</a>
</nav>
