import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Cards from './componentes/Cards';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome: 'Esportes',
      corPrimaria: 'hsl(47, 88%, 63%)',
      corSecundaria: 'hsl(0, 0%, 50%)',
  },
  {
      nome: 'Culinária',
      corPrimaria: 'hsl(47, 88%, 63%)',
      corSecundaria: 'hsl(0, 0%, 50%)',
  },
  {
      nome: 'Política',
      corPrimaria: 'hsl(47, 88%, 63%)',
      corSecundaria: 'hsl(0, 0%, 50%)',
  },
  {
      nome: 'Tecnologia',
      corPrimaria: 'hsl(47, 88%, 63%)',
      corSecundaria: 'hsl(0, 0%, 50%)',
  },
  {
      nome: 'Saude',
      corPrimaria: 'hsl(47, 88%, 63%)',
      corSecundaria: 'hsl(0, 0%, 50%)',
  },
  {
      nome: 'Educação',
      corPrimaria: 'hsl(47, 88%, 63%)',
      corSecundaria: 'hsl(0, 0%, 50%)',
  },
  {
      nome: 'Financeiro',
      corPrimaria: 'hsl(47, 88%, 63%)',
      corSecundaria: 'hsl(0, 0%, 50%)',
  }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador() {
    console.log('deletando colaborador');
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <h1>Comentários</h1>
      {times.map(time => 
      <Cards
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}
      />
      )}  
      <Rodape/>

    </div>
  );
}

export default App;
