# Best Sky trail Path

We have a Ski trail that goes from "start" to a possible end(END_1 or END_2). There're a few different paths, defined on the **time_waste** array and there's a score for each checkpoint defined on the **checkpoints** array

Find the _best_ possible path. Path meaning the addition of the scores from the checkpoints of the path and the subtraction of the time wasted between the two points.

I.E.: A possible path can be START,A,D,F,END_1. The score is 38 and the wasted time is 17 so the final score is 21

```
time_waste = [
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
```

```
checkpoints = [
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

```
