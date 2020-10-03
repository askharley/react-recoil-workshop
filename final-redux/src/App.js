import React from "react";
import { useSelector } from "react-redux";
import { Jumbotron, Card, CardBody, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Tabs from "./components/Tabs";

function App() {
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

export default App;
