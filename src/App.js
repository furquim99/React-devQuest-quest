
import './App.css';
//import Texto from './textos/textos';
import MaisTextos from './textos/maisTextos/maisTextos';
import Button from './buttons/buttom'
function App() {
  return (
    <>
      {/* <Texto text='Esse texto é verde e tem um fundo vermelho'/> */}
      {/* <Texto text='Esse texto é amarelo e tem um fundo preto'/>
      <Texto text='Esse texto é azul e tem um fundo laranja'/>*/}
      {/* <Texto color='green'>
        
      </Texto> */}
      <MaisTextos/>
      <Button label="Baixar CV"/>
    </>
  );
}

export default App;
