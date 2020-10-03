import React, { useState } from "react";
import { Row, Col, Button, Input, ListGroupItem } from "reactstrap";
import Select from "react-select";
import { teamColours } from "../../utils/constants";

function Players() {
  const teamDictionary = [];
  const [playerName, setPlayerName] = useState("");
  const [playerTeam, setPlayerTeam] = useState();

  const addPlayer = () => { };

  return (
    <>
      <Row className="mt-3">
        <Col md="5">
          <Input
            type="text"
            placeholder="Add player..."
            value={playerName}
            onChange={e => setPlayerName(e.target.value)}
          />
        </Col>
        <Col md="5">
          <Select
            options={teamDictionary}
            onChange={data => setPlayerTeam(data.value)}
          />
        </Col>
        <Button color="primary" type="submit" onClick={addPlayer}>
          Add
        </Button>
      </Row>
      <PlayerList />
    </>
  );
}

function PlayerList() {
  const players = [];

  return (
    <div className="mt-3">
      {players.map(player => (
        <ListGroupItem color={teamColours[player.team]}>
          {player.name}
        </ListGroupItem>
      ))}
    </div>
  );
}

export default Players;
