import MainPage from './page/MainPage';
import { ToastContainer } from 'react-toastify';
import './style/app.css'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="app">
      <MainPage />
      <ToastContainer />
    </div>
  );
}

export default App;
