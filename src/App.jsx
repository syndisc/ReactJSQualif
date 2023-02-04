import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { THEME, ThemeContext } from './Library/theme';
import Home from "./Pages/Home";
import Detail from "./Pages/Detail"

export default function App() {
  const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
    cache: new InMemoryCache(),
  });


  const[theme, setTheme] = useState(THEME.light)

  const handleTheme = () =>{
    if(theme == THEME.light)setTheme(THEME.dark)
    else setTheme(THEME.light)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div style={{
        background: theme.backgroundColor
      }}><button onClick={handleTheme}>{theme == THEME.light ? "🔆":"🎇"}</button><Home/></div>
    },
    {
      path: "/:id",
      element:<Detail/>
    }
  ])


  return <ApolloProvider client={client}>
        <ThemeContext.Provider value={theme}>
          <RouterProvider router={router}/>
          
        </ThemeContext.Provider>
      </ApolloProvider>

}


