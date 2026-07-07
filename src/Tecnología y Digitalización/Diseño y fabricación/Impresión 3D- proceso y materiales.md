---
layout: base.njk
title: "Impresión 3D: proceso y materiales"
aliases: ["Impresión 3D: proceso y materiales"]
permalink: "/conceptos/diseno-impresion-3d/"
materia: "Tecnología y Digitalización"
curso: "2º ESO"
bloque: "Bloque 2: Deseño e fabricación"
tags: [tecnología, impresión 3D, fabricación digital, FFF, PLA, ESO]
fecha: 2026-07-06
---

# Impresión 3D: proceso y materiales

<p class="meta">Tecnología y Digitalización · 2º ESO</p>

## Definición

Una **impresora 3D** es una máquina capaz de fabricar piezas con volumen a partir de un diseño hecho por ordenador — el paso siguiente a modelar la pieza con las [[Herramientas CAD: diseño en 2D y 3D|herramientas CAD]]. La tecnología más común en las impresoras domésticas es la **fabricación por filamento fundido (FFF)**: un filamento de plástico se calienta y se deposita capa a capa a través de una boquilla, el **extrusor**, hasta completar la forma del objeto.

El material más utilizado es el **PLA** (poliácido láctico), un plástico biodegradable con un punto de fusión bajo, fácil de imprimir. También se usa el **ABS** (acrilonitrilo butadieno estireno), más resistente pero más difícil de trabajar.

El proceso de impresión 3D consta de tres etapas. En el **diseño** se crea la pieza con un programa CAD y se guarda en formato **STL**. En el **laminado**, un programa (Cura, Slic3r o Repetier-Host) traduce ese archivo STL a formato **GCODE**: determina en cuántas capas se va a construir la pieza y en qué orden, además de parámetros como la temperatura del filamento o la calidad de capa. En la **impresión**, el archivo GCODE se copia a una tarjeta de memoria o se envía por cable a la impresora, que fabrica la pieza capa a capa.

## Clic.

El recorrido completo de una pieza, de principio a fin: la diseñas en Tinkercad y la exportas en STL; abres ese archivo en Repetier-Host, eliges la calidad de capa (por ejemplo, "Calidad excelente") y el tipo de filamento, que ajusta automáticamente la temperatura del extrusor; generas el GCODE con el botón de laminar; y por último guardas ese archivo en la tarjeta SD de la impresora, que empieza a construir la pieza capa a capa hasta terminarla.

## Para saber más

- [Republic of Printers — Impresión 3D por FFF: cómo funciona](https://republicofprinters.com/fabricacion-por-filamento-fundido-fff-impresion-3d/) — explicación del proceso, en español
- [Repetier — sitio oficial](https://www.repetier.com) — software de control de impresión usado en clase
- Groover, M. P. *Fundamentos de manufactura moderna*. Pearson — referencia académica para profundizar

## En el currículo

**Materia**: Tecnología y Digitalización
**Curso**: 2º ESO
**Bloque**: Bloque 2: Deseño e fabricación
**Referencia normativa**: Decreto 156/2022, do 26 de setembro (DOG núm. 183)

---

<nav class="nav-conceptos">
  <a href="/conceptos/diseno-cad/">← Herramientas CAD</a>
  <a href="/conceptos/diseno-vocabulario/">Siguiente: Vocabulario bilingüe →</a>
</nav>
