import { selector } from "recoil";
import { teamListState, playerListState } from "./atoms";

export const teamDictionaryState = selector({
  key: "teamDictionaryState",
  get: ({ get }) => {
    const teams = get(teamListState);

    let dictionary = [];

    teams.forEach(element => {
      dictionary.push({
        label: element.name,
        value: element.id
      });
    });

    return dictionary;
  }
});

export const teamCountState = selector({
  key: "teamCountState",
  get: ({ get }) => {
    const teams = get(teamListState);

    return teams.length;
  }
});

export const playerCountState = selector({
  key: "playerCountState",
  get: ({ get }) => {
    const players = get(playerListState);

    return players.length;
  }
});

export const entityCountState = selector({
  key: "entityCountState",
  get: ({ get }) => {
    const teams = get(teamListState);
    const players = get(playerListState);

    return { teams: teams.length, players: players.length };
  }
});
