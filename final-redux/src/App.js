import React, { useEffect } from "react";
import { Tabs } from "./components";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Card, CardBody, Row, Col } from "reactstrap";
import { useSelector } from "react-redux";

export default function App() {
  const teamCount = useSelector(state => state.teams.length);
  const playerCount = useSelector(state => state.players.length);

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
          <Tabs />
        </CardBody>
      </Card>
    </div>
  );
}
