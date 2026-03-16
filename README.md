# 🖨️ Calculadora de Impresión 3D

App PWA para calcular el **costo real** de tus impresiones 3D y el **precio de venta sugerido**.

## ✨ Funciones

- Costo de filamento (con % de falla/desperdicio)
- Costo de electricidad según watts de tu impresora
- Desgaste de la impresora
- Costo de internet y mano de obra
- **Monedas: USD y Pesos Uruguayos ($U)** con tipo de cambio ajustable
- **Actualización de precios** vía IA (kWh UTE, filamento, tipo de cambio)
- Precios de venta sugeridos: mínimo, objetivo y premium
- 8 impresoras pre-cargadas (Ender 3 V3 SE, Bambu, Prusa, etc.)
- Funciona **offline** como PWA instalable

## 📱 Instalación como app

**Android:** Abrí la URL en Chrome → menú ⋮ → "Agregar a pantalla de inicio"

**Windows:** Abrí la URL en Chrome/Edge → ícono de instalar en la barra de direcciones

## 🚀 Deploy en GitHub Pages

1. Creá un repositorio en GitHub (ej: `print3d-calc`)
2. Subí todos estos archivos
3. Ir a **Settings → Pages → Source: main branch / root**
4. Tu app queda en: `(https://github.com/Mathiasyott/print3d-calc)`

## 📁 Estructura

```
print3d-calc/
├── index.html      # App principal
├── manifest.json   # Config PWA
├── sw.js           # Service worker (offline)
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── README.md
```

## 🔑 API Key

El botón "Actualizar precios" usa la API de Anthropic. Funciona automáticamente cuando usás la app desde claude.ai. Si la usás de forma independiente, podés hardcodear tu API key en `index.html` (buscá `api.anthropic.com`).

---
Hecho con ❤️ para impresores 3D en Uruguay
