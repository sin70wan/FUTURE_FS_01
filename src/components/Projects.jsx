import React from 'react';

const Projects = () => {
  const projects = [
    // Completed Projects
    {
      title: "Weather Forecast App",
      desc: "Real-time weather with 5-day forecast",
      image: "/images/weather-app.jpg",
      live: "https://weather-app.vercel.app",
      github: "https://github.com/yourusername/weather-app",
      status: "completed"
    },
    {
      title: "Task Manager Pro",
      desc: "Task management with auth and drag-drop",
      image: "/images/task-manager.jpg",
      live: "https://task-manager.herokuapp.com",
      github: "https://github.com/yourusername/task-manager",
      status: "completed"
    },
    {
      title: "Library System",
      desc: "Book borrowing with admin dashboard",
      image: "/images/library-system.jpg",
      live: "https://library-system.render.com",
      github: "https://github.com/yourusername/library-system",
      status: "completed"
    },
    {
      title: "DevBlog Platform",
      desc: "Developer blog with markdown support",
      image: "/images/blog-platform.jpg",
      live: "https://devblog.vercel.app",
      github: "https://github.com/yourusername/devblog",
      status: "completed"
    },
    
    // In Progress Projects
    {
      title: "AI Shopping Assistant",
      desc: "E-commerce with AI recommendations",
      github: "https://github.com/yourusername/ai-shopping",
      status: "in-progress"
    },
    {
      title: "AI Task Master",
      desc: "Smart task manager with NLP",
      github: "https://github.com/yourusername/ai-taskmaster",
      status: "in-progress"
    },
    {
      title: "AI Content Hub",
      desc: "Content platform with AI drafts",
      github: "https://github.com/yourusername/ai-content",
      status: "in-progress"
    },
    {
      title: "AI Document Chat",
      desc: "Chat with PDFs using RAG",
      github: "https://github.com/yourusername/ai-docchat",
      status: "in-progress"
    }
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <h2> Projects</h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className={`project-card ${p.status}`}>
              {p.image && <img src={p.image} alt={p.title} className="project-image" />}
              
              <div className="status-badge">
                {p.status === "completed" ? "✅ Completed" : "🚧 In Progress"}
              </div>
              
              <div className="project-title">{p.title}</div>
              <div className="project-desc">{p.desc}</div>
              
              <div className="project-links">
                {p.live && <a href={p.live} target="_blank" rel="noopener" className="project-link">Live Demo</a>}
                {p.github && <a href={p.github} target="_blank" rel="noopener" className="project-link">GitHub</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;