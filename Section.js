import React, { useState } from "react";

function Section({ title }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias por contactarnos, ${email}`);
    setEmail("");
  };

  return (
    <section className="section">
      <h2>{title}</h2>
      {title === "Contacto" ? (
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
      ) : (
        <p>Explora nuestra selección de relojes exclusivos.</p>
      )}
    </section>
  );
}

export default Section;
