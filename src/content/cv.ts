import cvAsset from "@/assets/CV_Lady_Milena_Almonacid.pdf.asset.json";

export const CV_URL = cvAsset.url;
export const CV_FILENAME = "CV_Lady_Milena_Almonacid.pdf";

export const PROFILE = {
  fullName: "Lady Milena Almonacid Useche",
  shortName: "Milena Almonacid",
  role: "Senior Software QA Engineer",
  location: "Colombia | USA",
  phone: "+1 754 236 4110",
  phoneHref: "tel:+17542364110",
  emails: ["Mile520ster@gmail.com", "mile520@hotmail.com"],
  linkedin: "https://www.linkedin.com/in/ladymilenaalmonacid/",
  summary: [
    "Software QA Engineer con más de 10 años de experiencia en pruebas manuales y automatizadas, especializada en análisis de requerimientos, planificación de pruebas y diseño de casos de prueba completos.",
    "Profundo conocimiento de metodologías y estrategias de Quality Assurance, del ciclo de vida del desarrollo de software (SDLC) y de entornos Agile. Experiencia en pruebas Smoke, Funcionales, de Integración de Sistemas, Data-Driven, Positivas, Negativas y de Valores Límite.",
    "He trabajado en industrias de tecnología, medios y servicios públicos, aportando a proyectos de software a gran escala. Hablante nativa de español con dominio del inglés, proactiva, resolutiva y adaptable al trabajo en equipo.",
  ],
};

export const LANGUAGES = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Avanzado" },
];

export const SOFT_SKILLS = ["Proactiva", "Resolutiva", "Adaptable", "Trabajo en equipo"];

export const STATS = [
  { value: "10+", label: "años en QA" },
  { value: "6", label: "empresas" },
  { value: "ISTQB®", label: "Certified Tester" },
];

export type Job = {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
};

export const EXPERIENCE: Job[] = [
  {
    company: "MAS Global Consulting",
    role: "Senior QA Engineer",
    location: "Miami, Florida, US · Remoto",
    period: "Abr 2021 – Oct 2024",
    highlights: [
      "Diseño y ejecución de planes de prueba y scripts detallados para nuevos productos y mejoras, basados en historias de usuario.",
      "Comunicación de defectos con desarrolladores y usuarios de negocio, replicación de incidencias y pruebas de regresión.",
      "Análisis de resultados con impacto en base de datos y gestión del ciclo de vida de defectos hasta su cierre.",
      "Participación en sprint planning y retrospectivas, aportando a la calidad de una plataforma digital de gestión del ciclo de vida de producto para un líder en sistemas de automatización de edificios, seguridad, HVAC y refrigeración industrial.",
    ],
  },
  {
    company: "Globant",
    role: "Senior QA Tester",
    location: "Bogotá, Colombia · Remoto",
    period: "May 2018 – Feb 2020",
    highlights: [
      "Planificación y supervisión de todo el proceso de pruebas del proyecto.",
      "Trabajo en marco Scrum con Jira, convirtiendo casos de prueba manuales en automatizados junto al equipo.",
      "Documentación completa: planes de prueba, casos, matrices y checklists.",
      "Definición y ejecución de planes de reportes y métricas (informes, métricas, sign-off).",
    ],
  },
  {
    company: "Grupo ASD",
    role: "Senior QA Tester",
    location: "Bogotá, Colombia",
    period: "Ago 2014 – May 2018",
    highlights: [
      "Parte integral del equipo de desarrollo en procesos iterativos con Scrum y Kanban.",
      "Ejecución de pruebas manuales y automatizadas, análisis de resultados y escalamiento a QA Leads.",
      "Creación de matrices de trazabilidad desde requerimientos hasta resolución.",
      "Garantía de transiciones a producción fluidas y sin defectos, con pruebas de release en cada sprint.",
    ],
  },
  {
    company: "IDEMIA",
    role: "QA Tester",
    location: "Bogotá, Colombia",
    period: "Sep 2012 – Ago 2014",
    highlights: [
      "Creación de planes, casos y scripts de prueba en conjunto con el equipo.",
      "Propuestas para el despliegue automatizado de pruebas de calidad.",
      "Pruebas funcionales, end-to-end, de regresión y verificación en múltiples aplicaciones y plataformas.",
      "Soporte en la investigación y resolución de incidencias en producción.",
    ],
  },
  {
    company: "Choucair Testing",
    role: "QA Tester",
    location: "Bogotá, Colombia",
    period: "Abr 2010 – Ago 2012",
    highlights: [
      "Ejecución de pruebas para cada proyecto asignado, siguiendo la metodología definida.",
      "Estimación de tiempos y seguimiento de proyectos hasta su puesta en producción.",
      "Recomendaciones al cliente sobre buenas prácticas de desarrollo desde la perspectiva de pruebas funcionales.",
      "Reporte de indicadores y gestión de defectos con seguimiento de estado.",
    ],
  },
  {
    company: "Telefónica Telecom",
    role: "Software Quality Assurance Engineer",
    location: "Bogotá, Colombia",
    period: "Feb 2008 – Mar 2010",
    highlights: [
      "Elaboración de artefactos de prueba claros y alineados con los estándares del proceso.",
      "Ejecución de casos, clasificación y registro de defectos, y participación en reuniones de triage.",
      "Comunicación del estado de pruebas, hallazgos y riesgos potenciales.",
      "Preparación de métricas de pruebas y seguimiento frente a los objetivos organizacionales.",
    ],
  },
];

export const SKILL_GROUPS = [
  {
    title: "Testing",
    items: [
      "QA Manual",
      "Exploratory Testing",
      "API Testing",
      "Regresión",
      "Integración",
      "Smoke",
      "UAT",
      "E2E",
      "Data-Driven",
      "Valores límite",
    ],
  },
  {
    title: "Automatización",
    items: ["Selenium", "WebDriver", "Cucumber", "Java"],
  },
  {
    title: "Procesos y estrategia",
    items: ["QA SignOff", "GO / NO GO", "TDD", "BDD", "CI/CD", "Agile Testing"],
  },
  {
    title: "Metodologías",
    items: ["Scrum", "Kanban", "SDLC"],
  },
  {
    title: "Gestión de defectos y pruebas",
    items: ["Jira", "Confluence", "Azure DevOps", "TestLink", "Bugzilla", "Mantis"],
  },
  {
    title: "Bases de datos",
    items: ["Oracle", "SQL Server", "MySQL", "PostgreSQL"],
  },
  {
    title: "Control de versiones",
    items: ["Git", "Team Foundation Server (TFS)"],
  },
  {
    title: "Cloud (básico)",
    items: ["AWS", "EC2", "S3 Buckets"],
  },
];

export const EDUCATION = [
  {
    title: "Ingeniería de Sistemas (5 años)",
    place: "Universidad Manuela Beltrán · Bogotá",
    year: "2010",
  },
  {
    title: "Gerencia de Proyectos de Software",
    place: "Universidad Autónoma · Bogotá",
    year: "2015",
  },
];

export const CERTIFICATIONS = [
  { title: "ISTQB® Certified Tester – Foundation Level 4.0", issuer: "iSQI GmbH" },
  { title: "Scrum Foundations Professional Certificate (SFPC)", issuer: "Certiprof" },
  { title: "Remote Work and Virtual Collaboration", issuer: "Certiprof" },
  { title: "Análisis y Diseño de Software", issuer: "Politécnico Colombo Andino" },
  { title: "Java", issuer: "Universidad Francisco José de Caldas" },
  {
    title: "Diplomado en Seguridad Informática e Informática Forense",
    issuer: "Universidad Manuela Beltrán",
  },
];
