import ReactDOM from 'react-dom';
import React from 'react';
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from "./theme.ts";

export default function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline enableColorScheme />
          <Routes>
            <Route path="/" element={}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);