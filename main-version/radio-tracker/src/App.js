import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/boostrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path='/' exact component={RadioList} />
      <Route path='/edit/:id' exact component={EditRadio} />
      <Route path='/create' exact component={CreateRadio} />
    </Router>
  );
}
export default App;
