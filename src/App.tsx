import Main from './Pages';
import { DataContextProvider } from "./store";


function App() {
  return (
    <DataContextProvider>
      <Main />
    </DataContextProvider>
  );
}

export default App;
