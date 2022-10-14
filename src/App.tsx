import Normalize from "./utils/Normalize";
import { ThemeProvider } from "styled-components";
import { themeColors } from "./utils/Theme";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <ThemeProvider theme={themeColors}>
      <Normalize />
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
