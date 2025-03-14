import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Cadastro } from './../components/cadastro'
import App from '../App'
export function RouteApp(){
    return(
        <BrowserRouter>
                {/* <NavBar /> */}
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/Cadastro' element={ <Cadastro/> } />
                <Route  path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    )
}