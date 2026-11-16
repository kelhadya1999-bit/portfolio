import { profile, projects, skills, experience, education } from "./data.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Section from "./components/Section.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import Tags from "./components/Tags.jsx";

export default function App() {
  return (
    <>
      <Navbar name={profile.name} />
      <main className="container" style={{ maxWidth: 860 }}>
        <Hero profile={profile} />

        <Section id="sobre-mi" title="Sobre mí">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Section>

        <Section id="experiencia" title="Experiencia">
          {experience.map((e) => (
            <div key={e.company} className="mb-4">
              <h3 className="h6 mb-0">{e.title} · {e.company}</h3>
              <small className="text-body-secondary">{e.period}</small>
              <ul className="mt-2 mb-0">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        <Section id="proyectos" title="Proyectos">
          <div className="d-flex flex-column gap-3">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Section>

        <Section id="habilidades" title="Habilidades">
          <div className="row g-4">
            {skills.map((s) => (
              <div className="col-12 col-md-6" key={s.group}>
                <h3 className="h6">{s.group}</h3>
                <Tags items={s.items} />
              </div>
            ))}
          </div>
        </Section>

        <Section id="formacion" title="Formación">
          {education.map((e) => (
            <div key={e.title} className="mb-3">
              <h3 className="h6 mb-0">{e.title}</h3>
              <small className="text-body-secondary">{e.detail}</small>
            </div>
          ))}
        </Section>

        <Section id="contacto" title="Contacto">
          <p>{profile.links.email}</p>
          <a className="me-3" href={profile.links.linkedin}>LinkedIn</a>
          <a href={profile.links.github}>GitHub</a>
        </Section>
      </main>
      <footer className="container py-4 text-body-secondary small" style={{ maxWidth: 860 }}>
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}