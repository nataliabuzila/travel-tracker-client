import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Header from './components/Header';
import { AuthProviderWrapper } from './context/auth.context';


function App() {
  return (
    <AuthProviderWrapper>
      <BrowserRouter>
        <header><Header /></header>
        <main><Navigation /></main>
        <footer>&copy; {new Date().getFullYear()}</footer>
      </BrowserRouter>
    </AuthProviderWrapper>
  );
}

export default App;
