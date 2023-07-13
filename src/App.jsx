import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// define um array de objetos
const filmes = [
  {
    id: 1,
    titulo: 'O sogros',
    dataLancamento: '2022-01-01',
    imagem: 'src/img/sogro.jpg',
  },
  {
    id: 2,
    titulo: 'Invasao',
    dataLancamento: '2022-02-01',
    imagem: 'src/img/invasao.jpg',
  },
  {
    id: 3,
    titulo: 'Jujutsu Kaisen',
    dataLancamento: '2022-03-01',
    imagem: 'src/img/jujutsu.jpg',
  },
  {
    id: 4,
    titulo: 'Silo',
    dataLancamento: '2022-03-01',
    imagem: 'src/img/silo.jpg',
  },
  {
    id: 5,
    titulo: 'Homem Aranha ',
    dataLancamento: '2023-03-01',
    imagem: 'src/img/aranha.jpg',
  },
];

// exibir as informações do filme em um card
const FilmeCard = ({ filme }) => {
  return (
    <div className="card">
      <img src={filme.imagem} alt={filme.titulo} />
      <h2>{filme.titulo}</h2>
      <p>Data de lançamento: {filme.dataLancamento}</p>
    </div>
  );
};

// renderiza a lista de filmes, mapeando o array filmes e criando um FilmeCard para cada objeto
const ListaFilmes = () => {
  return (
    <div>
      <h1>Lista de Filmes</h1>
      <div className="lista">
        {filmes.map((filme) => (
          <FilmeCard key={filme.id} filme={filme} />
        ))}
      </div>
    </div>
  );
};



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <ListaFilmes/>
    </div>
   
    </>
  )
}

export default App
