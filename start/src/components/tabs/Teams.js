import React, { useState } from "react";
import { Row, Col, Button, Input, ListGroupItem } from "reactstrap";
import { teamColours } from "../../utils/constants";

export default function Teams() {  
  const [teamName, setTeamName] = useState();  

  const addTeam = () => { };

  return (
    <>
      <Row className="mt-3">
        <Col md="10">
          <Input
            type="text"
            placeholder="Add team..."
            value={teamName}
            onChange={e => setTeamName(e.target.value)}
          />
        </Col>
        <Button color="primary" type="submit" onClick={addTeam}>
          Add
        </Button>
      </Row>
      <TeamList />
    </>
  );
}

function TeamList() {
  const teams = [];

  return (
    <div className="mt-3">
      {teams.map(team => (
        <ListGroupItem color={teamColours[team.id]}>{team.name}</ListGroupItem>
      ))}
    </div>
  );
}
