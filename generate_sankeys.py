#!/usr/bin/env python3
"""Generate Sankey visualizations with improved header and context."""

import plotly.graph_objects as go
import json

# Define Sankey data for each visualization
sankeys = {
    "General_inst_tema": {
        "title": "Sankey general: Instancia → Tema",
        "file": "sankey_General_inst_tema.html",
        "nodes": ["Empleo","Formación","Intermediación","Ejes de Intervención y Barreras Psicosociales","Marco de Gobernanza y Arquitectura Institucional","Accesibilidad Integral y Diseño de Entornos Inclusivos","Formación y desarrollo de competencias","Ciclo Metodológico de Intermediación y Acompañamiento Sociolaboral","Trayectorias y transición edu-trabajo","Condiciones Territoriales"],
        "source": [0,0,0,0,0,0,0,1,1,1,1,1,2,2,2,2,2],
        "target": [3,4,5,6,7,8,9,3,4,5,8,9,3,7,8,5,4],
        "value": [18,18,11,11,8,4,2,30,18,11,10,6,18,14,12,10,6]
    },
    "Formación_cond_tema": {
        "title": "Formación: Condensación → Tema",
        "file": "sankey_Formación_cond_tema.html",
        "nodes": ["Cultura, estigma y relaciones (familia/empresa/institución)","Gestión institucional, roles y coordinación","Apoyos, ajustes y diseño inclusivo","Capacitación y sensibilización de actores","Trayectoria formativa y transición edu-trabajo","Normativa, certificación e incentivos","Territorio y condiciones materiales de acceso","Ejes de Intervención y Barreras Psicosociales","Marco de Gobernanza y Arquitectura Institucional","Accesibilidad Integral y Diseño de Entornos Inclusivos","Trayectorias y transición edu-trabajo","Condiciones Territoriales"],
        "source": [0,1,2,3,4,5,6],
        "target": [7,8,9,7,10,8,11],
        "value": [19,12,11,11,10,6,6]
    },
    "Intermediación_cond_tema": {
        "title": "Intermediación: Condensación → Tema",
        "file": "sankey_Intermediación_cond_tema.html",
        "nodes": ["Formación para la vida/trabajo y transición educativa","Ajustes, accesibilidad, infraestructura y tecnología","Cultura, estigma y resistencias organizacionales","Familia, redes y autonomía","Metodología de intermediación y apoyos en el puesto","Gobernanza, institucionalidad y marco normativo","Evaluación, perfilamiento, registro y seguimiento","Trayectorias y transición edu-trabajo","Accesibilidad Integral y Diseño de Entornos Inclusivos","Ejes de Intervención y Barreras Psicosociales","Ciclo Metodológico de Intermediación y Acompañamiento Sociolaboral","Marco de Gobernanza y Arquitectura Institucional"],
        "source": [0,1,2,3,4,5,6],
        "target": [7,8,9,9,10,11,10],
        "value": [12,10,9,9,9,6,5]
    },
    "Empleo_cond_tema": {
        "title": "Empleo: Condensación → Tema",
        "file": "sankey_Empleo_cond_tema.html",
        "nodes": ["Cultura, estigma y resistencias","Normativa, cumplimiento e incentivos","Apoyos, ajustes, accesibilidad y seguridad","Formación y desarrollo de competencias","Intermediación y apoyos en el puesto","Gestión institucional y roles","Trayectoria educativa y transición","Familia, redes y autonomía","Territorio y recursos","Ejes de Intervención y Barreras Psicosociales","Marco de Gobernanza y Arquitectura Institucional","Accesibilidad Integral y Diseño de Entornos Inclusivos","Ciclo Metodológico de Intermediación y Acompañamiento Sociolaboral","Trayectorias y transición edu-trabajo","Condiciones Territoriales"],
        "source": [0,1,2,3,4,5,6,7,8],
        "target": [9,10,11,3,12,10,13,9,14],
        "value": [15,12,11,11,8,6,4,3,2]
    }
}

header_html = """<!doctype html>
<html lang="es">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>{title} | Análisis Temático</title>
	<style>
		:root {{
			--bg: #fafbfc;
			--panel: #ffffff;
			--text: #1a202c;
			--text-light: #4a5568;
			--accent: #2d5016;
			--accent-2: #c84e2d;
			--border: #e2e8f0;
			--shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
		}}
		* {{ box-sizing: border-box; }}
		body {{
			margin: 0;
			font-family: "IBM Plex Sans", -apple-system, system-ui, sans-serif;
			background: var(--bg);
		}}
		header {{
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 14px 24px;
			background: var(--panel);
			border-bottom: 1px solid var(--border);
			position: sticky;
			top: 0;
			z-index: 100;
			box-shadow: var(--shadow);
		}}
		.header-brand {{
			display: flex;
			align-items: center;
			gap: 10px;
			font-weight: 700;
			font-size: 16px;
			color: var(--text);
			text-decoration: none;
		}}
		.header-mark {{
			width: 10px;
			height: 10px;
			border-radius: 2px;
			background: linear-gradient(135deg, var(--accent), #4a7c2e);
		}}
		.header-actions {{
			display: flex;
			align-items: center;
			gap: 12px;
		}}
		.btn-back {{
			display: inline-flex;
			align-items: center;
			gap: 6px;
			padding: 9px 12px;
			background: rgba(45, 80, 22, 0.1);
			color: var(--accent);
			border: 1px solid rgba(45, 80, 22, 0.18);
			border-radius: 8px;
			text-decoration: none;
			font-weight: 600;
			font-size: 13px;
			cursor: pointer;
			transition: all 0.2s ease;
		}}
		.btn-back:hover {{
			background: rgba(45, 80, 22, 0.15);
			transform: translateY(-1px);
		}}
		.viz-container {{
			padding: 28px 24px;
			max-width: 1400px;
			margin: 0 auto;
		}}
		.viz-header {{
			margin-bottom: 24px;
		}}
		.viz-title {{
			margin: 0 0 12px 0;
			font-size: 24px;
			font-weight: 700;
			color: var(--text);
		}}
		.viz-context {{
			padding: 16px;
			background: linear-gradient(135deg, rgba(45, 80, 22, 0.05), rgba(200, 78, 45, 0.03));
			border-left: 3px solid var(--accent);
			border-radius: 8px;
			font-size: 13px;
			color: var(--text-light);
			line-height: 1.6;
		}}
		.viz-context strong {{
			color: var(--text);
		}}
		.viz-context a {{
			color: var(--accent);
			text-decoration: none;
			font-weight: 600;
		}}
		.viz-context a:hover {{
			text-decoration: underline;
		}}
	</style>
</head>
<body>
	<header>
		<a href="index.html" class="header-brand">
			<span class="header-mark"></span>
			Análisis Temático
		</a>
		<div class="header-actions">
			<a href="index.html" class="btn-back">← Volver al inicio</a>
		</div>
	</header>
	<div class="viz-container">
		<div class="viz-header">
			<h1 class="viz-title">{title}</h1>
			<div class="viz-context">
				<strong>Investigación:</strong> Imaginarios sociales sobre exclusión-inclusión laboral de PCD en Aysén, Chile. 
				<strong>Herramienta:</strong> Diagramas Sankey con <a href="https://plotly.com/" target="_blank">Plotly</a>.
			</div>
		</div>
"""

footer_html = """	</div>
</body>
</html>"""

# Generate each visualization
for key, data in sankeys.items():
    # Create figure
    fig = go.Figure(data=[go.Sankey(
        node=dict(
            label=data["nodes"],
            line=dict(width=0.5),
            pad=15,
            thickness=15
        ),
        link=dict(
            source=data["source"],
            target=data["target"],
            value=data["value"]
        ),
        arrangement="snap"
    )])
    
    fig.update_layout(
        font=dict(size=11),
        height=700,
        title=dict(text=data["title"])
    )
    
    # Export to HTML with custom header/footer
    html_content = header_html.format(title=data["title"])
    html_content += fig.to_html(include_plotlyjs='cdn', div_id=f"plotly-{key}")
    html_content = html_content.replace("<div", "<div", 1)  # Avoid duplicate
    html_content = html_content.replace("</body>\n</html>", "", 1)  # Remove original closing
    html_content += footer_html
    
    # Write to file
    with open(data["file"], "w", encoding="utf-8") as f:
        f.write(html_content)
    
    print(f"✓ Generated: {data['file']}")

print("\n✓ All visualizations generated successfully!")
