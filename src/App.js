
import { Routes, Route } from 'react-router';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateProfilePage from './Pages/CreateProfilePage';
import MenuEditorPage from './Pages/MenuEditorPage';
import SelectYourPlan from './Pages/SelectYourPlan';
import ModalUserRegistrationPage from './Pages/ModalUserRegistrationPage';
import PageLoginSesion from './Pages/PageLoginSesion';
function App() {
  return (
  <>
    <Routes>
    <Route path='/' element = {<p>home</p>} />
    <Route path='/planes' element = {<SelectYourPlan />} />
    <Route path='/login' element = {<ModalUserRegistrationPage/>} />
    <Route path='/signup' element = {<PageLoginSesion/>} />
    <Route path='/payment' element = {<p>payment</p>} />
    <Route path='/purchase' element = {<p>purchase</p>} />
    <Route path='/dashboard' element = {<p>dashboard</p>} />
    <Route path='/edit/:idplatillo' element = {<p>edit</p>} />
    <Route path='/my_qr' element = {<p>my_qr</p>} />
    <Route path='/create_menu' element = {<MenuEditorPage />} />
    <Route path='/suscription' element = {<p>suscription</p>} />
    <Route path='/profile' element = {<CreateProfilePage />} />
    </Routes>
  </>
  )
}
export default App;
