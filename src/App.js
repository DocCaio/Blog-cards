import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Cards from './componentes/Cards';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id:uuidv4(),
      nome: 'Esportes',
      corPrimaria: 'hsl(47, 88%, 63%)',
      corSecundaria: 'hsl(0, 0%, 50%)',
  },
  {   
      id:uuidv4(),
      nome: 'Culinária',
      corPrimaria: 'hsl(47, 88%, 63%)',
      corSecundaria: 'hsl(0, 0%, 50%)',
  },
  {   
      id:uuidv4(),
      nome: 'Política',
      corPrimaria: 'hsl(47, 88%, 63%)',
      corSecundaria: 'hsl(0, 0%, 50%)',
  },
  {
      id:uuidv4(),
      nome: 'Tecnologia',
      corPrimaria: 'hsl(47, 88%, 63%)',
      corSecundaria: 'hsl(0, 0%, 50%)',
  },
  {
      id:uuidv4(),
      nome: 'Saude',
      corPrimaria: 'hsl(47, 88%, 63%)',
      corSecundaria: 'hsl(0, 0%, 50%)',
  },
  {   
      id:uuidv4(),
      nome: 'Educação',
      corPrimaria: 'hsl(47, 88%, 63%)',
      corSecundaria: 'hsl(0, 0%, 50%)',
  },
  {
      id:uuidv4(),
      nome: 'Financeiro',
      corPrimaria: 'hsl(47, 88%, 63%)',
      corSecundaria: 'hsl(0, 0%, 50%)',
  }
  ]);

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador() {
    console.log('deletando colaborador');
  }
  
  function mudarCorTime(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.corSecundaria = cor;
      }
    }))

  }
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} 
      aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <div className='text'>
      <h1>Comentários</h1>
      </div>
      {times.map(time =>       
      <Cards
        mudarCor={mudarCorTime}
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
