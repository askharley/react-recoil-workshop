import React from "react";
import { useRecoilValue } from "recoil";
import { Jumbotron, Card, CardBody, Row, Col } from "reactstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from "./components/Tabs";
import { teamCountState, playerCountState } from "./store/selectors";

function App() {
  const teamCount = useRecoilValue(teamCountState);
  const playerCount = useRecoilValue(playerCountState);

  return (
    <div className="App">
      <Jumbotron>
        <h1 className="display-3">Team Track</h1>
        <h4>
          <Row>
            <Col>Teams: {teamCount}</Col>
            <Col>Players: {playerCount}</Col>
          </Row>
        </h4>
      </Jumbotron>
      <Card>
        <CardBody>
          <Tabs />
        </CardBody>
      </Card>
    </div>
  );
}

export default App;
