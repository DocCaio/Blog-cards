import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Cards from './componentes/Cards';

function App() {

  const cards = [
    {
      nome: 'Esportes',
      corPrimaria: ' hsl(47, 88%, 63%)',
      corSecundaria: ' hsl(0, 0%, 50%)',
  },
  {
      nome: 'Culinária',
      corPrimaria: ' hsl(47, 88%, 63%)',
      corSecundaria: ' hsl(0, 0%, 50%)',
  },
  {
      nome: 'Política',
      corPrimaria: ' hsl(47, 88%, 63%)',
      corSecundaria: ' hsl(0, 0%, 50%)',
  },
  {
      nome: 'Tecnologia',
      corPrimaria: ' hsl(47, 88%, 63%)',
      corSecundaria: ' hsl(0, 0%, 50%)',
  },
  {
      nome: 'Saude',
      corPrimaria: ' hsl(47, 88%, 63%)',
      corSecundaria: ' hsl(0, 0%, 50%)',
  },
  {
      nome: 'Educação',
      corPrimaria: ' hsl(47, 88%, 63%)',
      corSecundaria: ' hsl(0, 0%, 50%)',
  },
  {
      nome: 'Financeiro',
      corPrimaria: ' hsl(47, 88%, 63%)',
      corSecundaria: ' hsl(0, 0%, 50%)',
  }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario comentarios={cards.map(cards =>   cards.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {cards.map(cards => <Cards key={cards.nome} nome={cards.nome} corPrimaria={cards.corPrimaria} corSecundaria={cards.corSecundaria}/>)}

    
              
    </div>
  );
}

export default App;
