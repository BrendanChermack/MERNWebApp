import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import ExerciseList from "./components/exercise-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
//npm start to start web
function App() {
  return (
    <Router> 
    <Navbar /> 
    <br/> 
        <Routes> 
            <Route path="/" exact component={<ExerciseList />} /> 
            <Route path="edit/:id" component={<EditExercise />} /> 
            <Route path="create" component={<CreateExercise />} /> 
            <Route path="user" component={<CreateUser />} /> 
        </Routes>
    </Router>

  );
}

export default App;
