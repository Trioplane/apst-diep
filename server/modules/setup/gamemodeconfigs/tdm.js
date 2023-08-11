// you can edit this!
let teams = 2,
  bots_per_team = 5;

let modeName = "1TDM";

// you can edit anything below this if you know what you're doing

let room = Array(15)
  .fill(() => Array(15).fill())
  .map((x) => x());

switch (teams) {
  case 1:
    room[0][0] = room[1][0] = room[0][1] = "bas1";
    room[1][1] = "bap1";
    break;
  case 2:
    // blue team
    for (let i = 0; i < 15; i++) {
      if (i == 7) room[i][0] = "bap1";
      else room[i][0] = "bas1";
    }

    // red team
    for (let i = 0; i < 15; i++) {
      if (i == 7) room[i][14] = "bap2";
      else room[i][14] = "bas2";
    }
    break;

  case 3:
    room[6][0] = room[7][0] = "roid"; // top
    room[0][6] = room[0][7] = "roid"; // left
    room[14][6] = room[14][7] = "roid"; // right
    room[6][14] = room[7][14] = "roid"; // bottom
    break;

  case 4:
    room[0][0] = "bas1";
    room[14][0] = "bas2";
    room[0][14] = "bas3";
    room[14][14] = "bas4";

  default:
    break;
}

if (teams == 1) {
  modeName = "1 Team";
} else if (teams == 2) {
  modeName = "2 Teams";
} else if (teams == 3) {
  modeName = "3 Teams";
} else if (teams == 4) {
  modeName = "4 Teams";
}

// if (teams > 4) {
// 	   room[14][0] = room[14][1] = room[13][0] = "bas5";
// 	   room[13][1] = "bap5";
// }
// if (teams > 5) {
// 	   room[14][0] = room[14][1] = room[13][0] = "bas6";
// 	   room[13][1] = "bap6";
// }
// if (teams > 6) {
// 	   room[14][0] = room[14][1] = room[13][0] = "bas7";
// 	   room[13][1] = "bap7";
// }
// if (teams > 7) {
// 	   room[14][0] = room[14][1] = room[13][0] = "bas8";
// 	   room[13][1] = "bap8";
// }

module.exports = {
  MODE: "tdm",
  TEAMS: teams,
  BOTS: bots_per_team * teams,
  X_GRID: 15,
  Y_GRID: 15,
  WIDTH: 5000,
  HEIGHT: 5000,
  ROOM_SETUP: room,
  MODE_NAME: modeName,
};
