// Diccionario de traducciones ES/EN
const translations = {
  es: {
    // Header
    'nav-brand': 'Análisis Temático',
    
    // Hero
    'hero-kicker': 'Imaginarios sociales sobre exclusión-inclusión laboral de PCD en la Región de Aysén, Chile: Sistemas, Estrategias, mecanismos y simbolismos en tensión',
    'hero-title-1': 'Análisis Temático:',
    'hero-title-2': 'Explorando Sankey\'s',
    'hero-lede': 'Los resultados presentados constituyen la primera exploración temática de una serie de entrevistas desarrolladas sobre el propuesto "Sistema de Inclusión Laboral de Personas con Discapacidad" como herramienta investigativa para buscar incidencia pública.',
    
    // Research Meta
    'meta-region-label': 'Región',
    'meta-region-value': 'Aysén, Chile',
    'meta-region-desc': 'Contexto geográfico',
    'meta-method-label': 'Método',
    'meta-method-value': 'Sankey Diagrams',
    'meta-method-desc': 'Visualización de flujos',
    'meta-data-label': 'Datos',
    'meta-data-value': '4 Visualizaciones',
    'meta-data-desc': 'Múltiples perspectivas',
    
    // Instances Section
    'instances-title': 'Las tres instancias del análisis',
    'instances-formacion': 'Formación',
    'instances-formacion-desc': 'Comprende los procesos educativos, capacitación y desarrollo de competencias para personas con discapacidad.',
    'instances-intermediacion': 'Intermediación',
    'instances-intermediacion-desc': 'Analiza los mecanismos, actores y estrategias que conectan la formación con oportunidades de empleo.',
    'instances-empleo': 'Empleo',
    'instances-empleo-desc': 'Examina las condiciones, desafíos y realidades del empleo propiamente tal para personas con discapacidad.',
    
    // Visualizations Section
    'viz-title': 'Visualizaciones disponibles',
    'viz-intro': 'Accede a cada diagrama según tu punto de partida analítico. Todos presentan las relaciones entre instancias, condensaciones y temas transversales.',
    
    'card-general-tag': 'General',
    'card-general-title': 'Instancia → Tema',
    'card-general-desc': 'Vista panorámica de cómo cada instancia (Formación, Intermediación, Empleo) se distribuye hacia los temas transversales priorizados.',
    'card-general-btn': 'Explorar →',
    
    'card-formacion-tag': 'Formación',
    'card-formacion-title': 'Condensación → Tema',
    'card-formacion-desc': 'Enfoque en procesos formativos. Observa cómo las condensaciones temáticas se articulan con los ejes transversales en educación.',
    'card-formacion-btn': 'Explorar →',
    
    'card-intermediacion-tag': 'Intermediación',
    'card-intermediacion-title': 'Condensación → Tema',
    'card-intermediacion-desc': 'Análisis de intermediación laboral. Muestra los nodos y su peso relativo en la articulación con temas de inclusión.',
    'card-intermediacion-btn': 'Explorar →',
    
    'card-empleo-tag': 'Empleo',
    'card-empleo-title': 'Condensación → Tema',
    'card-empleo-desc': 'Perspectiva de empleo y empleabilidad. Evidencia las conexiones entre condensaciones laborales y ejes transversales.',
    'card-empleo-btn': 'Explorar →',
    
    'reading-guide-title': 'Cómo leer estos Sankey',
    'reading-guide-1': 'Los anchos de las bandas representan magnitud relativa: más grueso = mayor concentración de citas. Esto permite identificar de un vistazo los temas o conexiones más presentes en el corpus analizado.',
    'reading-guide-2': 'Usa el resaltado al pasar el cursor para seguir el recorrido completo de cada categoría. El destacado interactivo muestra cómo un nodo específico se distribuye hacia todos sus destinos.',
    'reading-guide-3': 'Explora de izquierda a derecha para entender la trayectoria hacia los temas. Esta lectura secuencial revela el flujo completo desde instancias o condensaciones hacia los ejes temáticos transversales.',
    'reading-guide-4': 'Compara proporciones entre visualizaciones para identificar patrones transversales. Las dimensiones relativas permiten detectar concentraciones temáticas coherentes entre distintas perspectivas analíticas.',
    'reading-guide-5': 'Es posible manipular la posición de los temas arrastrándolos. Reorganiza los nodos para explorar diferentes configuraciones y facilitar la lectura según tu enfoque particular.',
    
    // Methodology
    'methodology-title': 'Notas metodológicas',
    'methodology-intro': 'Detalles sobre fuentes, procesamiento y marco de la investigación.',
    'methodology-context-title': 'Sobre la investigación',
    'methodology-context-1': 'Título:',
    'methodology-context-author': 'Autor:',
    'methodology-context-supervisor': 'Supervisor:',
    
    'methodology-sources-title': 'Fuentes y datos',
    'methodology-sources-text': 'Consolidado a partir de análisis de entrevistas anonimizadas. Se utilizó codificación temática para identificar fragmentos relevantes y su distribución en las tres instancias (Formación, Intermediación, Empleo).',
    'methodology-sources-link': 'Ver datos de fuentes →',
    
    'methodology-tools-title': 'Herramientas y versión',
    'methodology-tools-version': 'Versión v4:',
    'methodology-tools-version-desc': 'Se incluyen explícitamente condensaciones y temas previamente excluidos para evitar pérdida de casos. Esta iteración añade cobertura completa del corpus de análisis.',
    'methodology-tools-gen': 'Visualizaciones generadas con:',
    'methodology-tools-lib': 'Plotly',
    'methodology-tools-lib-desc': 'Biblioteca de código abierto para gráficos interactivos. Los diagramas Sankey permiten explorar flujos de datos complejos de manera intuitiva sin sacrificar fidelidad analítica.',
    
    'methodology-usage-title': 'Uso sugerido',
    'methodology-usage-text': 'Exploración rápida para seminarios, discusiones de comité, preparación de informes ejecutivos y presentaciones en espacios de política pública. Las visualizaciones están optimizadas para lectura cualitativa.',
    
    // Footer
    'footer-1': 'Análisis temático exploratorio | Última actualización v4',
    'footer-2': 'Preparado para equipos académicos y de política pública. Proyecto colaborativo entre Universidad de Aysén y Universidad Alberto Hurtado.',
    
    // Sources page
    'sources-back': '← Volver al inicio',
    'sources-title': 'Distribución de entrevistas (anonimizadas) por instancia del sistema',
    'sources-note': 'La tabla muestra la cantidad de segmentos/citas codificados por entrevista (código) en cada instancia (Formación, Intermediación y Empleo). Se usan únicamente códigos y descriptores genéricos para resguardar anonimato.',
    'sources-footer-contact': 'Contacto:',
    'sources-footer-ref': 'Referencia visualizaciones:',
  },
  en: {
    // Header
    'nav-brand': 'Thematic Analysis',
    
    // Hero
    'hero-kicker': 'Social imaginaries about exclusion-inclusion in labor for PWD in the Aysén Region, Chile: Systems, Strategies, mechanisms and symbolisms in tension',
    'hero-title-1': 'Thematic Analysis:',
    'hero-title-2': 'Exploring Sankey\'s',
    'hero-lede': 'The results presented constitute the first thematic exploration of a series of interviews developed on the proposed "System for Labor Inclusion of Persons with Disabilities" as a research tool to seek public impact.',
    
    // Research Meta
    'meta-region-label': 'Region',
    'meta-region-value': 'Aysén, Chile',
    'meta-region-desc': 'Geographic context',
    'meta-method-label': 'Method',
    'meta-method-value': 'Sankey Diagrams',
    'meta-method-desc': 'Data flow visualization',
    'meta-data-label': 'Data',
    'meta-data-value': '4 Visualizations',
    'meta-data-desc': 'Multiple perspectives',
    
    // Instances Section
    'instances-title': 'The three instances of analysis',
    'instances-formacion': 'Formation',
    'instances-formacion-desc': 'Comprises educational processes, training and competency development for persons with disabilities.',
    'instances-intermediacion': 'Intermediation',
    'instances-intermediacion-desc': 'Analyzes the mechanisms, actors and strategies that connect training with employment opportunities.',
    'instances-empleo': 'Employment',
    'instances-empleo-desc': 'Examines the conditions, challenges and realities of employment itself for persons with disabilities.',
    
    // Visualizations Section
    'viz-title': 'Available visualizations',
    'viz-intro': 'Access each diagram according to your analytical starting point. All present the relationships between instances, condensations and cross-cutting themes.',
    
    'card-general-tag': 'General',
    'card-general-title': 'Instance → Theme',
    'card-general-desc': 'Panoramic view of how each instance (Formation, Intermediation, Employment) is distributed towards prioritized cross-cutting themes.',
    'card-general-btn': 'Explore →',
    
    'card-formacion-tag': 'Formation',
    'card-formacion-title': 'Condensation → Theme',
    'card-formacion-desc': 'Focus on educational processes. Observe how thematic condensations are articulated with cross-cutting axes in education.',
    'card-formacion-btn': 'Explore →',
    
    'card-intermediacion-tag': 'Intermediation',
    'card-intermediacion-title': 'Condensation → Theme',
    'card-intermediacion-desc': 'Labor intermediation analysis. Shows the nodes and their relative weight in articulation with inclusion themes.',
    'card-intermediacion-btn': 'Explore →',
    
    'card-empleo-tag': 'Employment',
    'card-empleo-title': 'Condensation → Theme',
    'card-empleo-desc': 'Employment and employability perspective. Evidences the connections between labor condensations and cross-cutting axes.',
    'card-empleo-btn': 'Explore →',
    
    'reading-guide-title': 'How to read these Sankey diagrams',
    'reading-guide-1': 'The width of the bands represents relative magnitude: thicker = greater concentration',
    'reading-guide-2': 'Use highlighting when hovering to follow the complete path of each category',
    'reading-guide-3': 'Explore from left to right to understand the trajectory towards themes',
    'reading-guide-4': 'Compare proportions between visualizations to identify cross-cutting patterns',
    
    // Methodology
    'methodology-title': 'Methodological notes',
    'methodology-intro': 'Details about sources, processing and research framework.',
    'methodology-context-title': 'About the research',
    'methodology-context-1': 'Title:',
    'methodology-context-author': 'Author:',
    'methodology-context-supervisor': 'Supervisor:',
    
    'methodology-sources-title': 'Sources and data',
    'methodology-sources-text': 'Consolidated from analysis of anonymized interviews. Thematic coding was used to identify relevant fragments and their distribution across the three instances (Formation, Intermediation, Employment).',
    'methodology-sources-link': 'View sources data →',
    
    'methodology-tools-title': 'Tools and version',
    'methodology-tools-version': 'Version v4:',
    'methodology-tools-version-desc': 'Explicitly includes condensations and themes previously excluded to prevent case loss. This iteration adds complete coverage of the analysis corpus.',
    'methodology-tools-gen': 'Visualizations generated with:',
    'methodology-tools-lib': 'Plotly',
    'methodology-tools-lib-desc': 'Open source library for interactive graphics. Sankey diagrams allow exploring complex data flows intuitively without sacrificing analytical fidelity.',
    
    'methodology-usage-title': 'Suggested use',
    'methodology-usage-text': 'Quick exploration for seminars, committee discussions, preparation of executive reports and presentations in public policy spaces. Visualizations are optimized for qualitative reading.',
    
    // Footer
    'footer-1': 'Exploratory thematic analysis | Last update v4',
    'footer-2': 'Prepared for academic and public policy teams. Collaborative project between Aysén University and Alberto Hurtado University.',
    
    // Sources page
    'sources-back': '← Back to home',
    'sources-title': 'Distribution of interviews (anonymized) by system instance',
    'sources-note': 'The table shows the number of segments/quotes coded per interview (code) in each instance (Formation, Intermediation and Employment). Only codes and generic descriptors are used to safeguard anonymity.',
    'sources-footer-contact': 'Contact:',
    'sources-footer-ref': 'Visualizations reference:',
  }
};

// Gestión de idioma
class LanguageManager {
  constructor() {
    this.currentLang = localStorage.getItem('lang') || 'es';
    this.init();
  }

  init() {
    // Aplicar idioma al cargar
    this.applyLanguage(this.currentLang);
    
    // Crear y actualizar selector de idioma si no existe
    if (!document.getElementById('lang-toggle')) {
      this.createLanguageToggle();
    }
  }

  createLanguageToggle() {
    const header = document.querySelector('header');
    if (!header) return;

    const toggle = document.createElement('button');
    toggle.id = 'lang-toggle';
    toggle.className = 'lang-toggle';
    toggle.setAttribute('aria-label', 'Toggle language');
    toggle.innerHTML = this.currentLang === 'es' ? 'EN' : 'ES';
    
    toggle.addEventListener('click', () => this.toggleLanguage());
    
    // Agregar estilos si no existen
    if (!document.getElementById('lang-styles')) {
      const style = document.createElement('style');
      style.id = 'lang-styles';
      style.textContent = `
        .lang-toggle {
          padding: 8px 12px;
          background: linear-gradient(135deg, var(--accent), #4a7c2e);
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .lang-toggle:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(45, 80, 22, 0.2);
        }
        .lang-toggle:active {
          transform: translateY(0);
        }
        @media (max-width: 768px) {
          .lang-toggle {
            padding: 6px 10px;
            font-size: 11px;
          }
        }
      `;
      document.head.appendChild(style);
    }
    
    header.appendChild(toggle);
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('lang', this.currentLang);
    this.applyLanguage(this.currentLang);
    
    // Actualizar botón
    const toggle = document.getElementById('lang-toggle');
    if (toggle) {
      toggle.innerHTML = this.currentLang === 'es' ? 'EN' : 'ES';
    }
    
    // Actualizar atributo lang del HTML
    document.documentElement.lang = this.currentLang;
  }

  applyLanguage(lang) {
    if (!translations[lang]) lang = 'es';
    
    document.documentElement.lang = lang;
    
    // Traducir todos los elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translations[lang][key];
        } else if (el.tagName === 'IMG' || el.tagName === 'A') {
          el.setAttribute('title', translations[lang][key]);
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });
  }

  translate(key) {
    return translations[this.currentLang][key] || translations['es'][key] || key;
  }

  getCurrentLanguage() {
    return this.currentLang;
  }
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.langManager = new LanguageManager();
  });
} else {
  window.langManager = new LanguageManager();
}
