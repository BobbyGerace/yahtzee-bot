type DieValue = 1 | 2 | 3 | 4 | 5 | 6;
export type Dice = [
  DieValue, // Value of die 1
  DieValue, // Value of die 2
  DieValue, // Value of die 3
  DieValue, // Value of die 4
  DieValue, // Value of die 5
];

type Count = 0 | 1 | 2 | 3 | 4 | 5;
export type DiceCounts = [
  Count, // # of 1's
  Count, // # of 2's
  Count, // # of 3's
  Count, // # of 4's
  Count, // # of 5's
  Count, // # of 6's
];

// Whether die #i is marked as kept
export type Keeps = [
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
];
