// Aquí está todo el contenido de la web. Para actualizarla, edita solo este fichero.
// Sustituye los textos entre [corchetes] y los enlaces "#" por los tuyos.
import cvPdf from "./media/CV_KhadijaElHady.pdf";

export const profile = {
  name: "Khadija El Hady",
  role: "Desarrolladora junior de software",
  intro:
    "Backend con Java y Spring Boot, con tres años de experiencia en software de gestión (ERP Sage) y datos.",
  location: "Manresa, Barcelona",
  languages: "Català · Castellano · العربية · English B1",
  about: [
    "Técnica superior en Desarrollo de Aplicaciones Multiplataforma. Desde 2023 trabajo como técnica de software y consultora junior en Solitium Control Group, con ERP Sage, migración de datos y Power BI.",
    "Ahora me estoy especializando en desarrollo backend con Java, Spring Boot y microservicios. [Añade una frase sobre qué buscas.]",
  ],
  links: {
    github: "https://github.com/kelhadya1999-bit?tab=repositories",
    linkedin: "https://www.linkedin.com/in/khadija-el-hady-71880312b/",
    cv: cvPdf,
    email: "kelhadya1999@gmail.com",
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
    links: [
      { label: "Código en GitHub", url: "#" },
      { label: "README", url: "#" },
    ],
  },
  {
    title: "[Segundo proyecto]",
    description: "[Qué problema resuelve, en una frase.]",
    points: [],
    tags: ["[Tecnología]"],
    links: [],
  },
];

export const skills = [
  { group: "Backend", items: ["Java", "Spring Boot", "Spring Cloud", "API REST", "JPA", "C#/.NET", "C"] },
  { group: "Infraestructura y seguridad", items: ["Docker", "Docker Compose", "Keycloak", "OAuth2 / JWT", "Maven"] },
  { group: "Datos y negocio", items: ["PostgreSQL", "ERP Sage", "Migración de datos", "Power BI"] },
  { group: "Frontend (esta web)", items: ["React", "Bootstrap", "Vite"] },
];

export const experience = [
  {
    title: "Técnica de software / consultora junior",
    company: "Solitium Control Group",
    period: "2023 – actualidad",
    text: "ERP Sage, migración de datos e informes con Power BI. [Añade 2 o 3 logros concretos.]",
  },
];

export const education = [
  { title: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)", detail: "[Centro, año]" },
  { title: "Microservicios y APIs REST con Spring Boot, OAuth2 y Docker", detail: "Curso en Udemy" },
];
