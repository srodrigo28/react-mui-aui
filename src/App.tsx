import TextField from '@mui/material/TextField';
import { InputComplete } from './components/InputComplete';
import CardItem from './components/card1';
import Menu from './components/menu';
import { BsPlusCircle } from "react-icons/bs";
import DataGridDemo2 from './components/dataGrid2';


function App() {

  return (
    <>
    <div className='header-menu'>
      <h2>React TS + Mui Designer</h2>
      <div className='menu-header-item'>
      <Menu />
      <a href="/cadastro">
          <BsPlusCircle className='btn-item-plus' />
      </a>
      </div>
    </div>

      <TextField id="outlined-basic" label="Nome" variant="outlined" className='input-full' />
      <br />
      <br />
      <TextField id ="outlined-basic" label="Email" variant="outlined" className='input-full'/>
      <br />
      <br />
      <InputComplete />

      <br />
      <br />
      <div className='card-body'>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
      </div>

      <br />

      <DataGridDemo2 />
    </>
  )
}

export default App
