function shootForWin(arr) {
  let targets = arr.shift().split(" ").map(Number);

  let shotTargetsCounter = 0;

  let line = arr.shift();

  while (line != "End") {
    let currentIdx = Number(line);
    let currentTarget = targets[currentIdx];

    if (currentIdx >= 0 && currentIdx < targets.length) {
      if (targets[currentIdx] != -1) {
        targets[currentIdx] = -1;
        shotTargetsCounter++;
      }
      for (let i = 0; i < targets.length; i++) {
        if (targets[i] > currentTarget && targets[i] != -1) {
          targets[i] -= currentTarget;
        } else if (targets[i] <= currentTarget && targets[i] != -1) {
          targets[i] += currentTarget;
        }
      }
    }
    line = arr.shift();
  }
  console.log(`Shot targets: ${shotTargetsCounter} -> ${targets.join(" ")}`);
}
shootForWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
