import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>    
      <Navbar/> 
      <br/> 
      <Routes> 
      <Route path="/" exact element={<ExercisesList />} /> 
      <Route path="edit/:id" element={<EditExercise />} /> 
      <Route path="create" element={<CreateExercise />} /> 
      <Route path="user" element={<CreateUser />} /> 
      </Routes>
    </Router>

  );
}

export default App;
