import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css" 
import CreateExercises from './components/create-exercise.component';



function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} ></Route>
      <Route path="/edit/:id" component={EditExercises} ></Route>
      <Route path="/create" component={CreateExercises} ></Route>
      <Route path="/user" component={CreateUser} ></Route>
    </Router>
  );
}

export default App;
