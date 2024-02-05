import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Espotes',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Culinária',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Tecnologia',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'Saúde',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Educação',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Política',
      cor: '#FF8A29'
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      desgosto: false,
      favorito: false,
      nome: 'Renan Silva',
      cargo: 'Meu time não presta',
      imagem: 'https://github.com/docaio.png',
      time: times[0].nome
    },
    
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCor(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime({ nome, cor }) {
    setTimes([...times, { nome, cor, id: uuidv4() }])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }))
  }


  return (
    <div>
      <Banner />
      <Formulario aoCriarTime={cadastrarTime} times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className="times">
        <h1>Cometários</h1>
        {times.map((time, indice) => <Time mudarCor={mudarCor} key={indice} time={time} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} aoDeletar={deletarColaborador} aoFavoritar={resolverFavorito} />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
