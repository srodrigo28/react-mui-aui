import TextField from '@mui/material/TextField';
import { InputComplete } from './components/InputComplete';
import CardItem from './components/card';
import Menu from './components/menu';

function App() {

  return (
    <>
    <h2>React TS + Mui Designer</h2>

    <Menu />

      <TextField id="outlined-basic" label="Nome" variant="outlined" />
      <br />
      <br />
      <TextField id="standard-basic" label="E-mail" variant="standard" />
      <br />
      <br />
      <br />
      <InputComplete />

      <br />
      <br />
      <CardItem />
    </>
  )
}

export default App
