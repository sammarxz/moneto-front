import { ThemeUIProvider } from "theme-ui";

import { defaultTheme } from "@/styles/themes";

import { Transactions } from "@/pages";

function App() {
  return (
    <ThemeUIProvider theme={defaultTheme}>
      <Transactions />
    </ThemeUIProvider>
  );
}

export default App;
