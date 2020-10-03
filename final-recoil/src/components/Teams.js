import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { Row, Col, Button, Input, ListGroupItem } from "reactstrap";
import { teamColours } from "../utils/constants";
import { teamListState, inputState } from "../store/atoms";

function Teams() {
  const [teamList, setTeamList] = useRecoilState(teamListState);
  const [teamName, setTeamName] = useRecoilState(inputState);

  const addTeam = () => {
    const newTeams = [
      ...teamList,
      {
        id: teamList.length,
        name: teamName
      }
    ];

    setTeamList(newTeams);
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
  const teams = useRecoilValue(teamListState);

  return (
    <div className="mt-3">
      {teams.map(team => (
        <ListGroupItem color={teamColours[team.id]}>{team.name}</ListGroupItem>
      ))}
    </div>
  );
}

export default Teams;
