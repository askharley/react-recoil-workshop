import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button, Input, ListGroupItem } from "reactstrap";
import Select from "react-select";
import { actionCreators } from "../store";
import { teamColours } from "../utils/constants";
import { createDictionary } from "../utils/helpers";

function Players() {
  const dispatch = useDispatch();
  const teams = useSelector(state => state.teams);
  const [playerName, setPlayerName] = useState("");
  const [playerTeam, setPlayerTeam] = useState();

  const addPlayer = () => {
    dispatch(actionCreators.addPlayer({ name: playerName, team: playerTeam }));
    setPlayerName("");
  };

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
            options={createDictionary(teams)}
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
  const players = useSelector(state => state.players);

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