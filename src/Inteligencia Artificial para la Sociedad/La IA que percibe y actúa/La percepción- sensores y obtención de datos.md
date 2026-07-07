---
layout: base.njk
title: "La percepción: sensores y obtención de datos"
aliases: ["La percepción: sensores y obtención de datos"]
permalink: "/conceptos/ia3-percepcion/"
materia: "Inteligencia Artificial para la Sociedad"
curso: "4º ESO"
bloque: "UD3: A que percibe e actúa"
tags: [inteligencia artificial, percepción, sensorización, sensores, ESO]
fecha: 2026-07-08
---

# La percepción: sensores y obtención de datos

<p class="meta">Inteligencia Artificial para la Sociedad · 4º ESO</p>

## Definición

Un agente inteligente solo tiene sentido en relación con su entorno: percibe cambios, razona sobre ellos y actúa, lo que genera nuevos cambios que vuelve a percibir. Antes de entrar en el detalle de los sensores, conviene distinguir el tipo de entorno en el que opera un agente, porque condiciona todo lo demás. Un agente con **cuerpo físico** (*embodiment*) — un robot aspirador, un coche autónomo — tiene restricciones reales de volumen, peso, alcance y autonomía energética: si el cuerpo no está a la altura de la tarea, el sistema falla aunque el algoritmo sea excelente. Un agente en un **entorno virtual** — un recomendador de Netflix, un modelo de lenguaje — no tiene esas restricciones físicas, pero sus decisiones también tienen consecuencias reales (por ejemplo, el consumo energético del servidor que lo ejecuta).

Dentro de la percepción hay dos procesos que conviene no confundir:

- **Sensorización**: obtener medidas físicas primarias — capturar magnitudes del entorno (luz, sonido, temperatura, distancia) mediante un dispositivo, sin interpretarlas. En un entorno virtual esto casi no existe.
- **Percepción**: transformar esas medidas en información con significado — extraer de los datos brutos objetos, eventos o estados relevantes para la tarea. En un entorno virtual, se suele partir directamente de aquí.

La comparación con un ser humano ayuda: la retina registra la luz, pero es el sistema nervioso el que la interpreta. En un agente de IA, el sensor se limita a registrar; el algoritmo es quien procesa y da significado. Los sensores, además, se pueden clasificar por cómo obtienen la energía que miden: **pasivos** (reciben energía que ya existe en el entorno, como una cámara) frente a **activos** (emiten su propia energía para medir la respuesta, como un sensor de ultrasonidos) — los activos suelen consumir más batería. A esto se suman los **sensores virtuales** (miden flujos de datos digitales, no magnitudes físicas: el nivel de vida de un personaje de videojuego) y los **sensores de sistema** (monitorizan el propio estado del agente: temperatura de la CPU, carga de la batería).

En el mundo real, ningún sensor es perfecto: hay ruido (interferencias que afectan a la precisión) y observabilidad parcial (el agente nunca conoce todos los detalles de su entorno — un coche no sabe qué hay exactamente detrás de una esquina). Por eso la percepción en IA siempre convive con la incertidumbre: el agente no "sabe" con certeza qué ocurre a su alrededor, sino que estima qué es lo más probable. La inteligencia está en decidir bien a pesar de datos ruidosos o incompletos.

## Clic.

Compara tus sentidos con los sensores de una IA: donde tú tienes ojos, una IA tiene cámaras o LIDAR; donde tú tienes oídos, tiene micrófonos; donde tú sientes distancia por percepción espacial, ella usa ultrasonidos o infrarrojos; donde tú sientes tu propia posición (propiocepción), ella usa acelerómetros y giroscopios. La actividad "¿Qué percibe tu agente?" de la materia parte exactamente de esta idea: para un aspirador autónomo, un coche autónomo, un asistente de voz o un semáforo inteligente, identificar su entorno, su sensor principal y qué dato concreto capta — y luego diseñar un agente propio, por ejemplo un sensor de ruido para gestionar el volumen del aula.

## Para saber más

- Montero Hernández, C.; Guerreiro Santalla, S.; Bellas Bouza, F. J. *Guía docente: Inteligencia Artificial para la Sociedad*. Febrero 2026 — guía oficial de la materia, bloque 3.1
- Puentes Calvo, J. F. *Tecnologías Inteligentes: más que una introducción a la Inteligencia Artificial*. Edición 2025 (licencia CC) — apartado 2.4 "Agentes inteligentes", componente de percepción

## En el currículo

**Materia**: Inteligencia Artificial para la Sociedad
**Curso**: 4º ESO
**UD**: UD3: A que percibe e actúa · 21 sesiones · Peso: 20 % · 1º-2º trimestre
**Criterio de avaliación**: CA3.1 — Coñecer os tipos básicos de sensores utilizados na intelixencia artificial e a diferencia entre sensorización e percepción.
**Referencia normativa**: Orde do 9 de agosto de 2023 (DOG núm. 161, do 25 de agosto de 2023)

---

<nav class="nav-conceptos">
  <a href="/temas/ia3-percibe-actua/">← La IA que percibe y actúa</a>
  <a href="/conceptos/ia3-tipos-sensores/">Siguiente: Tipos de sensores en la inteligencia artificial →</a>
</nav>
