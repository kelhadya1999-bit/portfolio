import Tags from "./Tags.jsx";

export default function ProjectCard({ project }) {
  return (
    <article className="card">
      <div className="card-body">
        <h3 className="h5 card-title">{project.title}</h3>
        <p className="card-text">{project.description}</p>
        {project.points.length > 0 && (
          <ul>
            {project.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        )}
        <Tags items={project.tags} />
        <div className="mt-3 d-flex flex-wrap gap-3">
          {project.links.map((l) => (
            <a key={l.label} href={l.url}>{l.label}</a>
          ))}
        </div>
      </div>
    </article>
  );
}
