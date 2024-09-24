import React from 'react';

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'DocsGPT',
    description: 'This is a brief description of project one.',
    link: 'https://'
  },
  {
    title: 'Project',
    description: 'This is a brief description of project two.',
    link: 'https://'
  },
  {
    title: 'Three',
    description: 'This.',
    link: 'https://'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <p>Hi, folks!</p>
        <h1 className="title">My name is Guspan Tanadi</h1>
        <h3>
          CSS framework: <a href="http://bulma.io">Bulma</a></h3>
        <p>Contributor in Projects</p>
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
                    Repo
                  </a>
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>

        <h1 className="title mt-6 box" id="contact">Contact</h1>
        <form className="box">
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input className="input" type="text" id="name" placeholder="Your Name" required />
                </div>
            </div>

            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input className="input" type="email" id="email" placeholder="Your Email" required />
                </div>
            </div>

            <div className="field">
                <label className="label">Message</label>
                <div className="control">
                    <textarea className="textarea" id="message" placeholder="Your Message" required></textarea>
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <button className="button is-primary" type="submit">Send Message</button>
                </div>
            </div>
        </form>
    </section>
    
  );
};

export default Portfolio;