---
layout: base.njk
title: "El aprendizaje automático: ajuste de modelos y análisis de resultados"
aliases: ["El aprendizaje automático: ajuste de modelos y análisis de resultados"]
permalink: "/conceptos/ia4-ajuste-modelos/"
materia: "Inteligencia Artificial para la Sociedad"
curso: "4º ESO"
bloque: "UD4: IA que pensa e aprende"
tags: [inteligencia artificial, evaluación de modelos, sobreajuste, precisión, explicabilidad, ESO]
fecha: 2026-07-08
---

# El aprendizaje automático: ajuste de modelos y análisis de resultados

<p class="meta">Inteligencia Artificial para la Sociedad · 4º ESO</p>

## Definición

Entrenar un modelo no termina cuando el algoritmo ha "aprendido" — falta comprobar si de verdad funciona. Un error crítico habitual es evaluar un modelo con los mismos datos que usó para aprender: eso no mide si generaliza, solo si memorizó. Por eso el conjunto de datos se divide siempre en tres partes independientes: **entrenamiento** (60-70 %, donde el modelo ajusta sus patrones), **validación** (10-20 %, para afinar detalles antes de la prueba final) y **test** (10-20 %, datos que el modelo nunca ha visto y que se guardan "bajo llave" hasta el final, porque son los que miden su capacidad real).

Durante el entrenamiento pueden darse tres situaciones:

- **Subajuste** (*underfitting*): el modelo es demasiado simple y falla incluso con los datos de entrenamiento — no ha aprendido lo básico.
- **Buen ajuste**: el objetivo ideal — pocos errores en entrenamiento y buena generalización ante datos nuevos.
- **Sobreajuste** (*overfitting*): el modelo ha memorizado los datos de entrenamiento (incluido su "ruido"), pero falla ante cualquier dato nuevo — como alguien que memoriza un examen antiguo palabra por palabra y no sabe responder si se cambia una sola cifra.

Un porcentaje general de aciertos no basta para saber si un modelo es fiable. Se distingue entre **precisión** (de todo lo que el modelo dijo que era "X", ¿cuánto lo era de verdad? — evita falsas alarmas) y **sensibilidad o *recall*** (¿fue capaz de encontrar todos los casos reales de "X"? — en medicina, por ejemplo, esta es la métrica que importa: no se puede permitir que el modelo se salte un caso real).

Y hay una última pregunta, tan importante como la precisión: ¿se puede entender por qué el modelo decide lo que decide? Es la **explicabilidad**. Un árbol de decisión es una "caja blanca": se puede seguir el camino exacto de la decisión. Una red neuronal profunda suele ser una "caja negra": acierta con gran precisión, pero nadie puede señalar exactamente qué patrón usó. En medicina o en la concesión de un préstamo, esa diferencia importa: si un sistema rechaza una solicitud con un 99 % de precisión pero nadie sabe por qué, ¿es justo?, ¿cómo se puede reclamar esa decisión?

## Clic.

En Teachable Machine, cada pareja entrena un clasificador propio (por ejemplo, "uso de mascarilla / no uso") capturando imágenes con la webcam para cada categoría. Al probarlo en tiempo real aparecen los tres problemas de este bloque a la vez: si el modelo confunde una clase con otra, suele ser porque los datos de entrenamiento eran pocos o poco variados (subajuste); si funciona perfecto con las fotos de entrenamiento pero falla con caras nuevas, ha memorizado en lugar de aprender (sobreajuste); y si cambia el fondo o la iluminación y el modelo se desconcierta, queda claro hasta qué punto la fiabilidad de un sistema de IA depende de la diversidad de sus datos — el mismo problema, a mayor escala, que hace que un sistema de reconocimiento facial funcione peor con unos rostros que con otros, como muestra el documental *Coded Bias*, trabajado en esta unidad.

## Para saber más

- Montero Hernández, C.; Guerreiro Santalla, S.; Bellas Bouza, F. J. *Guía docente: Inteligencia Artificial para la Sociedad*. Febrero 2026 — guía oficial de la materia, bloque 3.6 y actividad B3.6 "Modelo de aprendizaje automático" (Teachable Machine)
- Puentes Calvo, J. F. *Tecnologías Inteligentes: más que una introducción a la Inteligencia Artificial*. Edición 2025 (licencia CC) — capítulo 16 "Entrenamiento y evaluación de modelos"

## En el currículo

**Materia**: Inteligencia Artificial para la Sociedad
**Curso**: 4º ESO
**UD**: UD4: IA que pensa e aprende · 21 sesiones · Peso: 20 % · 2º-3º trimestre
**Criterio de avaliación**: CA3.6 — Avaliar de maneira crítica os resultados obtidos das análises de datos, reflexionando sobre a súa precisión e fiabilidade.
**Referencia normativa**: Orde do 9 de agosto de 2023 (DOG núm. 161, do 25 de agosto de 2023)

---

<nav class="nav-conceptos">
  <a href="/conceptos/ia4-ciencia-datos/">← El aprendizaje automático: ciencia de datos</a>
  <a href="/temas/ia4-piensa-aprende/">Volver a La IA que piensa y aprende →</a>
</nav>
