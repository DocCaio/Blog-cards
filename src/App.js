import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';




function App() {
  return (
    <div className="App">
      <Banner/>
      <Formulario label="Nome" placeholder="Digite seu nome"/>
      <Formulario label="Assunto" placeholder="Digite o assunto"/>
      <Formulario label="Imagem" placeholder="Ecolha uma imagem"/>
    </div>
  );
}

export default App;
