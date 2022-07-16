import './App.css';
import { unstable_HistoryRouter as HistoryRouter, } from "react-router-dom";
import { Router } from '../Router';
import { MenuBar } from '../MenuBar';
import { createBrowserHistory } from "history";
import { Container } from 'react-bootstrap';
import styled from 'styled-components';


const history = createBrowserHistory({ window });


const StyledContainer = styled(Container)`
  padding-top: 15px;
  padding-bottom: 15px;
  margin-top: 56px;
`

export function App() {
  return (
    <HistoryRouter history={history}>
      <MenuBar />
      <StyledContainer fluid><Router /></StyledContainer>
    </HistoryRouter>
  );
}