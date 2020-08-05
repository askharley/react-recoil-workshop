import React, { useState } from "react";
import { Row, Col, Button, Input, ListGroupItem } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../store";
import { teamColours } from "../../utils/constants";

export default function Teams() {
  const dispatch = useDispatch();
  const [teamName, setTeamName] = useState("");

  const addTeam = () => {
    dispatch(actionCreators.addTeam(teamName));
    setTeamName("");
  };

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
  const teams = useSelector(state => state.teams);

  return (
    <div className="mt-3">
      {teams.map(team => (
        <ListGroupItem color={teamColours[team.id]}>{team.name}</ListGroupItem>
      ))}
    </div>
  );
}
