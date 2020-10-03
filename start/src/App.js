import React from "react";
import GameTabs from "./components/GameTabs";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Card, CardBody, Row, Col } from "reactstrap";

export default function App() {
  const teamCount = 0;
  const playerCount = 0;

  return (
    <div className="App">
      <Jumbotron>
        <h1 className="display-3">Team Tracker</h1>
        <h4>
          <Row>
            <Col>Teams: {teamCount}</Col>
            <Col>Players: {playerCount}</Col>
          </Row>
        </h4>
      </Jumbotron>
      <Card>
        <CardBody>
          <GameTabs />
        </CardBody>
      </Card>
    </div>
  );
}
