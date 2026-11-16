# Portfolio

Mi portfolio personal, hecho con **React**, **Bootstrap 5** y **Vite**.

## Ejecutarlo en local

Necesitas [Node.js](https://nodejs.org) 20 o superior.

```bash
npm install
npm run dev      # servidor de desarrollo en http://localhost:5173
npm run build    # genera la carpeta dist/
```

## Cómo actualizar el contenido

Todo el texto está en `src/data.js` (perfil, proyectos, habilidades, experiencia, formación). Para añadir un proyecto, copia un bloque de `projects` y cambia los datos.

## Estructura

```
src/
├── data.js              Contenido de la web
├── App.jsx              Página completa
├── styles.css           Estilos propios
└── components/          Navbar, Hero, Section, ProjectCard, Tags
```

## Publicación

En GitHub: *Settings → Pages → Build and deployment → Source: GitHub Actions*. Cada `git push` a `main` ejecuta `.github/workflows/deploy.yml` y publica la web.
