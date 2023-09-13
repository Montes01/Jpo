
export const Main = () => {
  return (
    <main id="contenido-principal">
    <section id="sobre-mi">
      <h2>Sobre mí</h2>
      <p>Soy un apasionado desarrollador web con experiencia en React, HTML, CSS y JavaScript. Me encanta crear soluciones innovadoras y atractivas para los desafíos de desarrollo web.</p>
    </section>

    <section id="proyectos">
      <h2>Proyectos Destacados</h2>
      <div className="proyecto">
        <h3>Proyecto 1</h3>
        <p>Descripción del proyecto 1.</p>
      </div>
      <div className="proyecto">
        <h3>Proyecto 2</h3>
        <p>Descripción del proyecto 2.</p>
      </div>
    </section>

    <section id="habilidades">
      <h2>Habilidades</h2>
      <ul>
        <li>React</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
      </ul>
    </section>

    <section id="contacto">
      <h2>Contacto</h2>
      <p>Puedes contactarme en: <a href="mailto:juanesteban@example.com" id="correo">juanesteban@example.com</a></p>
    </section>
  </main>
  )
}
