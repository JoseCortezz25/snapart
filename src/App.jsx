import { Header } from "./components/Header/Header";
import { App as AppRoutes } from "./routes/App";

function App() {
  return (
    <div className="App container">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
