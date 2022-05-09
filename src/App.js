import './App.css';
import Navbar from './components/common/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <h1>Welcome to CarDB, <br /> the place you sell <br /> "cars".</h1>
      
        <button>Start Now</button>

      </main>
      
      <footer>Copyright &copy; CarDB</footer>
    </>
  );
}

export default App;
