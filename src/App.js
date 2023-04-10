import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './components/Loader/Loader';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
