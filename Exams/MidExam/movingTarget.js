function movingTarget(arr) {
  let targets = arr.shift().split(" ").map(Number);

  for (let i = 0; i < arr.length; i++) {
    let tokens = arr[i].split(" ");
    let command = tokens[0];
    if (command == "End") {
      console.log(targets.join("|"));
      break;
    }
    let idx = Number(tokens[1]);
    let value = Number(tokens[2]);

    if (command == "Shoot") {
      if (idx < targets.length) {
        targets[idx] -= value;
        if (targets[idx] <= 0) {
          targets.splice(idx, 1);
        }
      } else {
        continue;
      }
    } else if (command == "Add") {
      if (targets.includes(targets[idx])) {
        targets.splice(idx, 0, value);
      } else {
        console.log("Invalid placement!");
      }
    } else if ((command = "Strike")) {
      if (idx < targets.length && idx >= 0) {
        if (idx + value >= targets.length || idx - value < 0) {
          console.log("Strike missed!");
        } else {
          targets.splice(idx - value, value * 2 + 1);
        }
      }
    }
  }
}
movingTarget([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 3",
  "Add 22 3",
  "Add 2 1",
  "End",
]);
