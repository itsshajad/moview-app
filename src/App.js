import './App.css';
import AppBar from './AppBar/AppBar';
import Banner from './Banner/Banner';
import MovieRaw from './MovieRaw';

const API_KEY = 'c21c70709242dd71f2155bc6cd121d9e';

const request = {
  trending: `trending/all/week?api_key=${API_KEY}`,
  upcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  latest: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  toRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
};

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      {/* navigation section */}
      <AppBar />
=======
      <header className="App-header">
        <h1>Movies</h1>
      </header>
>>>>>>> a43a08414ee5168bfe0f9c46f85f00bd5f8905b0

      {/* banner section */}
      <Banner />

      {/* movies rows */}
      <MovieRaw title="Trending" request={request.trending} />
      <MovieRaw title="Upcoming" isSmallTile request={request.upcoming} />
      <MovieRaw title="Latest" isSmallTile request={request.latest} />
      <MovieRaw title="Top Rated" isSmallTile request={request.toRated} />
    </div>
  );
}

export default App;
