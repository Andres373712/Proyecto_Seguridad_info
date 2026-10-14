import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [info, setInfo] = useState([
    { id: 1, titulo: 'Seguridad', descripcion: 'Información sobre seguridad en línea' },
    { id: 2, titulo: 'Contraseñas', descripcion: 'Mejores prácticas para contraseñas fuertes' },
    { id: 3, titulo: 'Malware', descripcion: 'Protección contra malware y virus' }
  ])

  return (
    <div className="container">
      <header className="header">
        <h1>🔒 Proyecto Seguridad Info</h1>
        <p>Centro de información sobre seguridad digital</p>
      </header>

      <main className="main">
        <section className="contador">
          <h2>Contador Interactivo</h2>
          <button onClick={() => setCount(count + 1)}>
            Clics: {count}
          </button>
        </section>

        <section className="info-grid">
          <h2>Temas de Seguridad</h2>
          <div className="grid">
            {info.map(item => (
              <article key={item.id} className="info-card">
                <h3>{item.titulo}</h3>
                <p>{item.descripcion}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="tips">
          <h2>Consejos Rápidos</h2>
          <ul className="tips-list">
            <li>✓ Usa contraseñas únicas y complejas</li>
            <li>✓ Activa la autenticación de dos factores</li>
            <li>✓ Mantén tu software actualizado</li>
            <li>✓ No descargues archivos de fuentes desconocidas</li>
            <li>✓ Verifica la identidad de los remitentes de email</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Proyecto Seguridad Info. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
