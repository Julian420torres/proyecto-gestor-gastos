import { MyRoutes } from "./index";
import { createContext, useState } from "react";
import { Light, Dark, AuthContextProvider } from "./index";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;

  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <QueryClientProvider client={queryClient}>
            <AuthContextProvider>
              <MyRoutes />
              <ReactQueryDevtools initialIsOpen={true} />
            </AuthContextProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
