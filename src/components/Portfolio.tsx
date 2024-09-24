import React from 'react';

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'Project One',
    description: 'This is a brief description of project one.',
    link: 'https://example.com/project-one',
  },
  {
    title: 'Project Two',
    description: 'This is a brief description of project two.',
    link: 'https://example.com/project-two',
  },
  {
    title: 'Project Three',
    description: 'This is a brief description of project three.',
    link: 'https://example.com/project-three',
  },
];

const Portfolio: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Portfolio Page</h1>
        <h3>Bulma CSS framework</h3>
        <div className="columns is-multiline">
          {projects.map((project, index) => (
            <div className="column is-one-third" key={index}>
              <div className="card">
                <div className="card-content">
                  <h2 className="title is-4">{project.title}</h2>
                  <div className="content">{project.description}</div>
                </div>
                <footer className="card-footer">
                  <a href={project.link} className="card-footer-item">
                    View Project
                  </a>
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
