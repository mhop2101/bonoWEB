import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Navbar';
import ProgressBarWithInput from './ProgressBar';
import UserForm from './UserF.js ';
import Componente from './Component2';
import MyCustomTimer from './TImerComponent';
import PasswordGenerator from './PasswordGenerator';


function App() {
  return (
    <>
      <MyNavbar tilted={false}></MyNavbar>
      <br></br>
      <MyNavbar tilted={true}></MyNavbar>
      <ProgressBarWithInput></ProgressBarWithInput>
      <Componente></Componente>
      <MyCustomTimer></MyCustomTimer>
      <PasswordGenerator></PasswordGenerator>
    </>

  );
}

export default App;
