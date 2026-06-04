import Layout from "./components/layout/Layout";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
    </>
  );
}

export default App;