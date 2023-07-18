import { ThemeUIProvider } from "theme-ui";

import { theme } from "./styles/themes/default";

import { Transactions } from "./pages/Transactions";

function App() {
  return (
    <ThemeUIProvider theme={theme}>
      <Transactions />
    </ThemeUIProvider>
  );
}

export default App;
