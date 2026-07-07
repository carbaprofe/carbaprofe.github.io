---
layout: base.njk
title: "Sesgos, discriminación y responsabilidad en el diseño de la IA"
aliases: ["Sesgos, discriminación y responsabilidad en el diseño de la IA"]
permalink: "/conceptos/ia2-sesgos-responsabilidad/"
materia: "Inteligencia Artificial para la Sociedad"
curso: "4º ESO"
bloque: "UD2: Impacto IA"
tags: [inteligencia artificial, sesgo, discriminación, equidad, responsabilidad, ESO]
fecha: 2026-07-08
---

# Sesgos, discriminación y responsabilidad en el diseño de la IA

<p class="meta">Inteligencia Artificial para la Sociedad · 4º ESO</p>

## Definición

Un modelo de IA aprende de los datos con los que se entrena — y si esos datos contienen un sesgo, el modelo lo aprende y lo repite. Un caso de referencia: en 2018, la investigadora Joy Buolamwini y Timnit Gebru publicaron el estudio *Gender Shades*, que analizó tres sistemas comerciales de reconocimiento facial. La tasa de error para hombres de piel clara era del 0,8 %; para mujeres de piel oscura, hasta el 34,7 %. La causa: los conjuntos de datos usados para entrenar esos sistemas estaban compuestos, en su inmensa mayoría, por rostros de piel clara.

No es un caso aislado. El algoritmo COMPAS, usado en varios estados de EE. UU. para asesorar a jueces sobre el riesgo de reincidencia de una persona condenada, asignaba sistemáticamente tasas de riesgo más altas a personas afroamericanas que a blancas con antecedentes similares. YouTube fue señalado por un algoritmo de moderación que desmonetizaba de forma desproporcionada vídeos relacionados con temas LGBTQ+, sin justificación clara. Los tres casos comparten algo: usaron aprendizaje automático para tomar una decisión, y esa decisión no fue justa porque no se aplicaron principios éticos al entrenar el modelo.

Aquí conviene distinguir dos palabras que se confunden: **igualdad** es tratar a todos por igual; **equidad** es dar a cada quien lo que necesita para tener las mismas oportunidades, teniendo en cuenta sus circunstancias. En el diseño de modelos de IA, conseguir equidad a veces implica sacrificar algo de exactitud — un modelo ligeramente menos preciso pero que se equivoca por igual con todos los grupos sociales es, éticamente, preferible a uno más preciso que solo se equivoca con unos pocos.

La responsabilidad, además, no recae en un único actor. La normativa distingue entre **proveedores** (quienes diseñan el sistema — por ejemplo, OpenAI o Google) y **desplegadores** o *deployers* (quienes lo ponen a disposición de otros — por ejemplo, un centro educativo que da acceso a sus alumnos a una IA). Ambos comparten responsabilidad sobre lo que ese sistema haga.

## Clic.

Antes de aceptar un resultado de IA como definitivo, aplica esta pregunta a cualquier sistema que tome una decisión sobre personas — una nota automática, una recomendación, una detección: *¿los datos con los que se entrenó representan a todos los grupos por igual, o solo a algunos?* El caso Gender Shades demuestra que la respuesta casi nunca es obvia a simple vista — hacía falta un estudio específico para detectar el sesgo, porque el sistema "funcionaba bien" en las pruebas generales.

## Para saber más

- Buolamwini, J.; Gebru, T. (2018). *Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification*. Proceedings of Machine Learning Research 81:1-15 — el estudio original citado en el libro de referencia de la materia
- Puentes Calvo, J. F. *Tecnologías Inteligentes: más que una introducción a la Inteligencia Artificial*. Edición 2025 (licencia CC) — capítulo 18, apartado 18.3.1 "Sesgos algorítmicos y discriminación"
- Montero Hernández, C.; Guerreiro Santalla, S.; Bellas Bouza, F. J. *Guía docente: Inteligencia Artificial para la Sociedad*. Febrero 2026 — guía oficial de la materia, bloque 2.1 (proveedores y desplegadores)

## En el currículo

**Materia**: Inteligencia Artificial para la Sociedad
**Curso**: 4º ESO
**UD**: UD2: Impacto IA · 11 sesiones · Peso: 10 % · 1º trimestre
**Criterio de avaliación**: CA2.4 — Identificar e avaliar as implicacións éticas e políticas do deseño e uso de sistemas de intelixencia artificial, incluíndo a equidade, o nesgo, a discriminación e a responsabilidade.
**Referencia normativa**: Orde do 9 de agosto de 2023 (DOG núm. 161, do 25 de agosto de 2023)

---

<nav class="nav-conceptos">
  <a href="/conceptos/ia2-empleo-economia/">← El impacto de la IA en el empleo y la economía</a>
  <a href="/conceptos/ia2-legislacion/">Siguiente: La legislación de la IA →</a>
</nav>
