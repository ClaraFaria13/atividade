import { useState } from "react"

export function App() {
  const [numero, setNumero] = useState(100)
  const [nome, setNome] = useState(false)

  function aumentar() {
    setNumero(numero + 100)
  }

  function texto() {
    setNome(!nome)
  }

  return (
      <div>
        <h1>useState</h1>
        <p>Número: {numero}</p>
        <div>
          <button onClick={aumentar}>Aumentar</button>
        </div>
        
        <div>
          <h1>Texto</h1>
          <div>
            <button onClick={texto}>{nome ? " Esconder" : "Mostrar"}</button>
            {nome && <p>Maria</p>}
          </div>
        </div>
      </div>
      
  )
}
