import './App.css';
import Header from './components/Header';
import NoteCards from './components/NoteCards';
import SearchBar from './components/SearchBar';
import Textarea from './components/Textarea';

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBar/>
      <Textarea/>  
      <NoteCards/>  
    </div>
  );
}

export default App;
