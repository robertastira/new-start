import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './components/CustomNavbar.jsx'
import MyFooter from './components/MyFooter.jsx'

function App() {
  return (
    <div className="App">
      <header>
      <CustomNavbar/>
      </header>
      <main>

      </main>
      <footer>
      <MyFooter/>
      </footer>
    </div>
  );
}

export default App;
