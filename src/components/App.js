import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"; //bootstrap import
import NavBar from "./navbar/NavBar";
import ExercisesList from "./exercises/ExercisesList";
import EditExercise from "./exercises/EditExercise";
import CreateExercise from "./exercises/CreateExercise";
import CreateUser from "./users/CreateUser";



function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
