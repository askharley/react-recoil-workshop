import React, { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { Row, Col, Button, Input, ListGroupItem } from "reactstrap";
import Select from "react-select";
import { teamColours } from "../utils/constants";
import { playerListState, inputState } from "../store/atoms";
import { teamDictionaryState } from "../store/selectors";

function Players() {
  const [playerList, setPlayerList] = useRecoilState(playerListState);
  const teamDictionary = useRecoilValue(teamDictionaryState);
  const [playerName, setPlayerName] = useRecoilState(inputState);
  const [playerTeam, setPlayerTeam] = useState();

  const addPlayer = () => {
    const players = [
      ...playerList,
      {
        id: playerList.length,
        name: playerName,
        team: playerTeam
      }
    ];

    setPlayerList(players);
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
            options={teamDictionary}
            onChange={data => setPlayerTeam(data.value)}
          />
        </Col>
        <Button
          color="primary"
          type="submit"
          onClick={() => {
            addPlayer();
            setPlayerName("");
          }}
        >
          Add
        </Button>
      </Row>
      <PlayerList />
    </>
  );
}

function PlayerList() {
  const players = useRecoilValue(playerListState);

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
