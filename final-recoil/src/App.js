import React, { useEffect } from "react";
import { GameTabs } from "./components";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Card, CardBody, Row, Col } from "reactstrap";
import { useRecoilValue } from "recoil";
import {
  teamCountState,
  playerCountState,
  entityCountState
} from "./store/selectors";

export default function App() {
  const teamCount = useRecoilValue(teamCountState);
  const playerCount = useRecoilValue(playerCountState);
  // const { teams, players } = useRecoilValue(entityCountState);

  useEffect(() => {
    console.log("Render - Teams");
  }, [teamCount]);

  useEffect(() => {
    console.log("Render - Players");
  }, [playerCount]);

  return (
    <div className="App">
      <Jumbotron>
        <h1 className="display-3">Discordia</h1>
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
