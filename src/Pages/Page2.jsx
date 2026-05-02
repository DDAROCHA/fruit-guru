import './Page2.css';

export function Page2() {
  return (
    <div className="page2-container">
      <h4>About This App</h4>

      <div className="page2-block">
        <p>
          <strong>Developed by:</strong> Diego Da Rocha — 2025 🛠️
        </p>

        <h5>Instructions 📋</h5>
        <p>
          • Write your question and click <strong>Ask</strong> for the Guru to give you an answer.
          <br></br>• Only questions about fruits in <em>any language</em> are accepted.
        </p>

        <h5>Technology Stack 💻</h5>
        <p>
          This application was built using <strong>React</strong> for the frontend and a custom
          backend developed with <strong>Node.js</strong> and <strong>Express</strong>. It leverages{' '}
          <strong>OpenAI APIs</strong> to generate intelligent responses and stores interaction data
          in a <strong>PostgreSQL database (Neon)</strong>. The architecture follows a decoupled
          client-server model, improving scalability, performance, and maintainability.
        </p>

        <h5>Notes ℹ️</h5>
        <p>
          This is a free-access showcase application designed for demonstration and learning
          purposes. It is not intended for production environments.
        </p>
        <p>
          Feedback and suggestions are always welcome 🙌 — the goal is to educate people about the
          great benefits of consuming fresh fruits.
        </p>
      </div>

      <footer className="page2-footer">© 2025 Diego Da Rocha — Demo App</footer>
    </div>
  );
}
