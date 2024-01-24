import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Categorias from './componentes/Cards';
import Cards from './componentes/Cards';

function App() {

  const times = [
    {
      nome: 'Esportes',
      corPrimaria: ' hsl(0, 0%, 50%)',
      corSecundaria: 'hsl(47, 88%, 63%)',
  },
  {
      nome: 'Culinária',
      corPrimaria: ' hsl(0, 0%, 50%)',
      corSecundaria: 'hsl(47, 88%, 63%)'
  },
  {
      nome: 'Política',
      corPrimaria: ' hsl(0, 0%, 50%)',
      corSecundaria: 'hsl(47, 88%, 63%)',
  },
  {
      nome: 'Tecnologia',
      corPrimaria: ' hsl(0, 0%, 50%)',
      corSecundaria: 'hsl(47, 88%, 63%)',
  },
  {
      nome: 'Saude',
      corPrimaria: ' hsl(0, 0%, 50%)',
      corSecundaria: 'hsl(47, 88%, 63%)',
  },
  {
      nome: 'Educação',
      corPrimaria: ' hsl(0, 0%, 50%)',
      corSecundaria: 'hsl(47, 88%, 63%)',
  },
  {
      nome: 'Financeiro',
      corPrimaria: ' hsl(0, 0%, 50%)',
      corSecundaria: 'hsl(47, 88%, 63%)',
  }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Cards
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}   

    </div>
  );
}

export default App;
