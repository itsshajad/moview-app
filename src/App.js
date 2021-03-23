import './App.css';
import Raw from './Raw';

const API_KEY = 'c21c70709242dd71f2155bc6cd121d9e';

const request = {
  trending: `trending/all/week?api_key=${API_KEY}`,
  upcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  latest: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Netflix App</h1>
      </header>
      <Raw request={request.trending} />
    </div>
  );
}

export default App;
