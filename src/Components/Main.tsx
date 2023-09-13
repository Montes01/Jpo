
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
        <h3>Blueasy</h3>
        <p>Blueasy es un proyecto de una pagina azul la cual contiene un contenido con un tono azul y blanco</p>
        <a href="">miralo aqui</a>
      </div>
      <div className="proyecto">
        <h3>Music</h3>
        <p>Music es un proyecto el cual tiene una amplia gama de colores</p>
        <a href="">miralo aqui</a>
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
