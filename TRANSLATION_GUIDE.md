# Sistema de Traducción - Guía de Implementación

## ✅ Instalación completada

Se ha implementado un **sistema de traducción ES/EN** en tu sitio web.

### Características

- ✨ **Botón bilingüe** en el header - Alterna entre Español e Inglés
- 🌍 **Almacenamiento persistente** - Recuerda tu preferencia de idioma
- 📱 **Responsivo** - Funciona en todas las plataformas
- ⚡ **Ligero** - JavaScript puro, sin dependencias

### Cómo funciona

1. **`translations.js`** - Archivo con diccionario ES/EN y gestor de idioma
2. **`data-i18n`** - Atributo en elementos HTML que indica qué traducir
3. **Botón automático** - Se agrega al header al cargar la página

### Archivos modificados

- ✅ `index.html` - Página principal con todas las secciones traducidas
- ✅ `fuentes.html` - Página de fuentes de datos
- ✅ `translations.js` - Nuevo archivo con diccionario y lógica

### Para usar en otros archivos

1. Agregue el script al `<head>`:
   ```html
   <script src="translations.js"></script>
   ```

2. Agregue `data-i18n="clave"` a los elementos:
   ```html
   <h1 data-i18n="mi-titulo">Mi Título en Español</h1>
   ```

3. Agregue la clave al diccionario en `translations.js`:
   ```javascript
   'mi-titulo': {
     es: 'Mi Título en Español',
     en: 'My Title in English'
   }
   ```

### Localización actual

**Español (es):**
- 70+ claves traducidas
- Incluye: hero, instancias, visualizaciones, metodología, footer

**Inglés (en):**
- Todas las claves disponibles en inglés
- Traducciones profesionales del contenido académico

### Ejemplo de uso

El botón "ES/EN" que aparece en el header permite cambiar el idioma automáticamente. La preferencia se guarda en localStorage, así que persiste entre sesiones.

### Próximos pasos opcionales

- Agregar más idiomas (francés, portugués, etc.)
- Traducir contenido dinámico de Plotly
- Implementar selector visual de idiomas más avanzado

---

**Nota:** Las páginas generadas por `generate_sankeys.py` pueden necesitar traducción manual o uso de la API de Plotly si quieres traducir las etiquetas de los diagramas Sankey.
