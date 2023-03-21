import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//npm start to start web
function App() {
  return (
    <Router>    
      <navbar>
      <br/>
      <route path="/" exact component={ExerciseList} />
      <route path="/edit/:id" component={EditExercise} />
      <route path="/create" component={CreateExercise} />
      <route path="/user" component={CreateUser} />
      </navbar>
    </Router>

  );
}

export default App;
