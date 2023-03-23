import Todo from './components/Todo';
import Task from './components/Task';
import Api from './components/Test/Api';

function App() {
  return (
    <div className="App">
      <Todo  title="React" ders="Java" /> 
      <Task/>
      <Api/>
    </div>
  );
}

export default App;
