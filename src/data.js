import cvPdf from "./media/CV_KhadijaElHady.pdf"; // pon aquí el nombre exacto de tu PDF

export const profile = {
  name: "Khadija El Hady",
  role: "Desarrolladora de software",
  intro:
    "3 años de experiencia como técnica de software y consultora ERP (Sage), con C#/.NET y Power BI. Ahora amplío mi perfil backend con Java, Spring Boot y microservicios.",
  location: "Manresa, Barcelona",
  languages: "Catalán · Castellano · Árabe · Inglés B1",
  about: [
    "Técnica superior en Desarrollo de Aplicaciones Multiplataforma. Desde 2023 trabajo como técnica de software y consultora ERP: desarrollo APIs REST y tareas programadas en C#/.NET, programo y personalizo Sage con su lenguaje propio, migro datos y creo informes complejos con Power BI.",
    "He completado el curso «Microservicios y APIs REST con Spring Boot, OAuth2 y Docker» para retomar Java. Busco una oportunidad como desarrolladora de software donde seguir creciendo.",
  ],
  links: {
    github: "https://github.com/kelhadya1999-bit?tab=repositories",
    linkedin: "https://www.linkedin.com/in/khadija-el-hady-71880312b/",
    cv: cvPdf,
    email: "khadijaelhady@gmail.com",
  },
};

export const projects = [
  {
    title: "PaymentChain",
    description:
      "Plataforma de pagos basada en microservicios, con acceso protegido por Keycloak. Proyecto final del curso «Microservicios y APIs REST con Spring Boot, OAuth2 y Docker».",
    points: [
      "Servicios de clientes, productos y transacciones, descubiertos con Eureka y expuestos a través de Spring Cloud Gateway.",
      "Login y validación de roles con Keycloak (OAuth2 / JWT) mediante un adaptador propio.",
      "Persistencia en PostgreSQL con JPA y gestión global de errores de negocio y técnicos.",
      "Entorno completo con Docker Compose.",
    ],
    tags: ["Java 21", "Spring Boot", "Spring Cloud", "Keycloak", "PostgreSQL", "Docker", "Maven"],
    links: [{ label: "Código en GitHub", url: "https://github.com/kelhadya1999-bit?tab=repositories" }],
  },
  {
    title: "Este portfolio",
    description:
      "Mi web personal, que sigo ampliando. Su contenido está separado del código y se publica automáticamente con cada cambio.",
    points: [
      "Interfaz con React y Bootstrap, con tema claro u oscuro según el sistema.",
      "Despliegue automático en GitHub Pages con GitHub Actions.",
    ],
    tags: ["React", "Bootstrap", "Vite", "GitHub Actions"],
    links: [{ label: "Código en GitHub", url: "https://github.com/kelhadya1999-bit/portfolio" }],
  },
];

export const skills = [
  { group: "Lenguajes", items: ["Java", "C# (.NET, API REST)", "SQL", "PostgreSQL", "Python", "Visual Basic", "HTML5", "JavaScript", "PHP"] },
  { group: "Backend y frameworks", items: ["Spring Boot", "Spring Cloud", "Keycloak (OAuth2)", "Maven", "Bootstrap", "React"] },
  { group: "Herramientas", items: ["Sage (programación y personalización)", "Power BI", "Microsoft SQL Server", "Git", "Docker", "WordPress", "Visual Studio"] },
];

export const experience = [
  {
    title: "Técnica de Software y Consultora ERP (Sage)",
    company: "Solitium Control Group",
    period: "Septiembre 2023 – actualidad",
    points: [
      "Desarrollo de API REST y tareas programadas en C# y .NET.",
      "Programación y personalización de Sage con el lenguaje propio del ERP, según los requisitos de cada cliente.",
      "Migración de datos y gestión de bases de datos (SQL Server).",
      "Arranque de proyectos: análisis de necesidades con el cliente y definición del alcance del ERP.",
      "Soporte técnico y resolución de incidencias.",
      "Informes complejos con Power BI.",
    ],
  },
  {
    title: "Desarrolladora web",
    company: "Creaam",
    period: "2022 (3 meses)",
    points: [
      "Desarrollo y personalización de sitios web responsivos con WordPress y JavaScript en un proyecto internacional.",
    ],
  },
];

export const education = [
  { title: "Microservicios y APIs REST con Spring Boot, OAuth2 y Docker", detail: "Udemy · 2026" },
  { title: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma", detail: "IES Castellet · 2021 – 2023" },
  { title: "Bachillerato Artístico", detail: "INS Lluís de Peguera · 2017 – 2019" },
];