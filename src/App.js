import './App.css';
import DayCard from './components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DayCard className='today' />
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
      </header>
    </div>
  );
}

export default App;
