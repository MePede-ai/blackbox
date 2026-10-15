"use client";

import { useState } from "react";
import site from "@/content/site.json";

// O serviço de newsletter ainda não foi escolhido (Brevo, Resend ou a API do Juan).
// Até lá o formulário valida o e-mail e avisa que as inscrições abrem em breve,
// sem enviar nada para lugar nenhum.
export default function Assine() {
  const [enviado, setEnviado] = useState(false);

  return (
    <section className="assine" id="assine" aria-labelledby="assine-titulo">
      <div className="wrap">
        <div className="assine__cartao">
          <img className="assine__foto" src="/images/exemplo/newsletter.jpg" alt="" loading="lazy" />
          <h2 className="glitch" id="assine-titulo">
            <span className="g1" aria-hidden="true">Assine</span>
            <span className="g2" aria-hidden="true">Assine</span>
            <span className="g3">Assine</span>
            <span className="g4" aria-hidden="true">Assine</span>
          </h2>
          <form
            className="assine__form"
            onSubmit={(e) => {
              e.preventDefault();
              setEnviado(true);
            }}
          >
            <span className="mono">{site.newsletter.cadencia}</span>
            <p className="assine__chamada assine__chamada--curta">{site.newsletter.chamadaCurta}</p>
            <div className="assine__campo">
              <label htmlFor="assine-email" className="sr-only">
                Seu e-mail
              </label>
              <input
                id="assine-email"
                type="email"
                name="email"
                required
                placeholder="seu@email.com"
                autoComplete="email"
              />
              <button type="submit" className="btn-assinar">
                Assinar
              </button>
            </div>
            {enviado ? (
              <p className="assine__aviso" role="status">
                Quase lá: as inscrições abrem em breve. Ainda estamos ligando o envio.
              </p>
            ) : (
              <p className="assine__chamada assine__chamada--longa">{site.newsletter.chamada}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
