import React from "react";
import ReactDOM from "react-dom/client";
import ListagemRepoView from "./presentation/views/TodoView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/styles/global.scss';
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListagemRepoView />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
