let time_waste = [
  ["start", "a", 5],
  ["start", "b", 6],
  ["start", "c", 10],
  ["a", "d", 4],
  ["b", "d", 5],
  ["c", "d", 6],
  ["c", "e", 5],
  ["d", "f", 3],
  ["e", "f", 1],
  ["f", "end_1", 5],
  ["f", "end_2", 10],
];
let checkpoints = [
  ["start", 0],
  ["a", 24],
  ["b", 3],
  ["c", 10],
  ["d", 7],
  ["e", 24],
  ["f", 3],
  ["end_1", 4],
  ["end_2", 7],
];

const findPath = (time_waste, checkpoints) => {
  let paths = [];

  let tree = { elem: "start", children: [] };
  recursiveTree(tree, time_waste);
  iterateTree(tree, paths, []);
  let maxCheckpoint = Number.NEGATIVE_INFINITY,
    maxPath;
  let tempCheckpoint, tempTimeWaste;
  paths.forEach((path) => {
    tempCheckpoint = 0;
    tempTimeWaste = 0;
    path.forEach((checkpoint, index) => {
      tempCheckpoint += checkpoints.find((elem) => {
        return elem[0] == checkpoint;
      })[1];
      tempTimeWaste += time_waste.find((elem) => {
        return elem[0] == checkpoint && elem[1] == path[index + 1];
      })
        ? time_waste.find((elem) => {
            return elem[0] == checkpoint && elem[1] == path[index + 1];
          })[2]
        : 0;
    });
    if (tempCheckpoint - tempTimeWaste > maxCheckpoint) {
      maxPath = path;
      maxCheckpoint = tempCheckpoint - tempTimeWaste;
    }
  });
  return { maxPath, maxCheckpoint };
};

const iterateTree = (tree, paths, previousPath) => {
  if (tree.children.length > 0) {
    tree.children.forEach((seed) => {
      iterateTree(seed, paths, previousPath.concat(seed.elem));
    });
  } else {
    return paths.push(previousPath);
  }
};
const recursiveTree = (branch, time_waste) => {
  const seeds = time_waste.filter((elem) => elem[0] === branch.elem);
  seeds.forEach((seed) => {
    const tempBranch = { elem: seed[1], children: [] };
    branch.children.push(recursiveTree(tempBranch, time_waste));
  });
  return branch;
};

console.log(findPath(time_waste, checkpoints));
