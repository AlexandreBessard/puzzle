import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';

const PuzzlePage = () => (
  <div>
    <div>PUZZLE 1 IN DETAILS</div>
  </div>
)

function App() {
  return (
    <div>
      {/* Switch will not render /puzzle1 even it is a match but without the 'exact'  */}
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/puzzle/' component={HomePage} />
      <Route excat path='/puzzle/puzzle-detail/' component={PuzzlePage} />
      </Switch>
    </div>
  );
}

export default App;
