export default function Hero({ profile }) {
  return (
    <header className="py-5">
      <h1 className="display-5 fw-bold">{profile.name}</h1>
      <p className="lead mb-1">{profile.role}</p>
      <p className="text-body-secondary">{profile.intro}</p>
      <p className="small text-body-secondary">{profile.location} · {profile.languages}</p>
      <div className="d-flex flex-wrap gap-2">
        <a className="btn btn-primary" href="#proyectos">Ver proyectos</a>
        <a className="btn btn-outline-primary" href={profile.links.github}>GitHub</a>
        <a className="btn btn-outline-primary" href={profile.links.linkedin}>LinkedIn</a>
        <a className="btn btn-outline-primary" href={profile.links.cv}>CV (PDF)</a>
      </div>
    </header>
  );
}
