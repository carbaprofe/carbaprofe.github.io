---
layout: base.njk
title: "La interacción natural con la inteligencia artificial"
permalink: "/conceptos/ia5-interaccion-natural/"
materia: "Inteligencia Artificial para la Sociedad"
curso: "4º ESO"
bloque: "UD5: IA aplicada"
tags: [inteligencia artificial, interacción natural, procesamiento del lenguaje natural, asistentes virtuales, ESO]
fecha: 2026-07-08
---

# La interacción natural con la inteligencia artificial

<p class="meta">Inteligencia Artificial para la Sociedad · 4º ESO</p>

## Definición

Un asistente virtual no "entiende" el lenguaje como lo hace una persona: no tiene biología ni experiencia del mundo. Lo que hace es **Procesamiento de Lenguaje Natural (NLP)** apoyado en Aprendizaje Automático — clasifica la "intención" detrás de una frase a partir de patrones estadísticos aprendidos de un conjunto de ejemplos. Cuando alguien entrena un asistente para reconocer la orden "enciende la luz", no está programando esa frase exacta: está dando decenas de variantes ("dale a la luz", "quiero luz", "ilumina esto") para que el modelo aprenda a **generalizar** — reconocer la intención incluso ante frases que nunca vio en el entrenamiento.

Esto conecta directamente con dos ideas ya vistas en el bloque de aprendizaje automático:

- La **calidad del dato** determina la robustez del sistema: cuantos más ejemplos variados se den de una misma intención, mejor generaliza el asistente ante acentos, sinónimos o formas de hablar distintas.
- El sistema no responde en términos absolutos de "sí" o "no", sino con un **umbral de confianza** (*confidence score*) — una probabilidad de que la frase pertenezca a cada categoría entrenada. Programar qué hacer cuando esa confianza es baja (por ejemplo, responder "no te he entendido, ¿puedes repetir?") es tan importante como entrenar el propio modelo: un umbral demasiado bajo hace que el sistema actúe con frases ambiguas: uno demasiado alto lo vuelve inútil, porque nunca se atreve a actuar.

Los asistentes reales (Alexa, Google Home, Siri) funcionan con la misma lógica, pero entrenados con muchísimos más datos —millones de ejemplos de miles de personas— para poder generalizar ante la enorme variedad de acentos, ruido de fondo y formas de expresarse de sus usuarios.

## Clic.

En la actividad de aula inteligente, cada pareja entrena en Machine Learning for Kids etiquetas como "luz_on", "luz_off" o "ventilador_on" con al menos diez frases distintas cada una, y luego programa en Scratch un aula virtual que reacciona a esas órdenes. Al probar el modelo con frases nuevas aparece el número clave: el porcentaje de confianza ("enciende la lámpara" → 95 %). El reto real no es que el asistente acierte con las frases del entrenamiento — eso ya lo hace cualquier sistema de reglas fijas — sino decidir qué umbral de confianza usar para que el sistema actúe: demasiado bajo, y confundirá órdenes; demasiado alto, y se quedará "callado" ante peticiones legítimas.

## Para saber más

- Montero Hernández, C.; Guerreiro Santalla, S.; Bellas Bouza, F. J. *Guía docente: Inteligencia Artificial para la Sociedad*. Febrero 2026 — guía oficial de la materia, bloque 4, actividades B4.1 "Asistente virtual" y B4.3 "Aula inteligente"
- Puentes Calvo, J. F. *Tecnologías Inteligentes: más que una introducción a la Inteligencia Artificial*. Edición 2025 (licencia CC) — capítulo 9 "De audio a texto y de nuevo a audio"

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
  <a href="/temas/ia5-aplicada/">← IA aplicada</a>
  <a href="/conceptos/ia5-robots-autonomos/">Siguiente: Los robots autónomos →</a>
</nav>
