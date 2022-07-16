import './App.css';
import { unstable_HistoryRouter as HistoryRouter, } from "react-router-dom";
import { Router } from '../Router';
import { MenuBar } from '../MenuBar';
import { createBrowserHistory } from "history";


const history = createBrowserHistory({ window });


export function App() {
  return (
    <HistoryRouter history={history}>
      <MenuBar />
      <Router />
    </HistoryRouter>
  );
}