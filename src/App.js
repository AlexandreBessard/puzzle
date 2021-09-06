import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

import './App.css';


function App() {
  return (
    <div>
      <Header />
      {/* Switch will not render /puzzle1 even it is a match but without the 'exact'  */}
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/puzzle/' component={HomePage} />
      <Route exact path='/puzzle/shop/' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
