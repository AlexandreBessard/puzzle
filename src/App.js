import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';

const PuzzlePage = () => (
  <div>
    <div>LIST OF ALL PUZZLES DISPLAY HERE</div>
  </div>
)

function App() {
  return (
    <div>
      {/* Switch will not render /puzzle1 even it is a match but without the 'exact'  */}
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/puzzle/' component={HomePage} />
      <Route exact path='/puzzle/puzzle-detail/' component={PuzzlePage} />
      </Switch>
    </div>
  );
}

export default App;
