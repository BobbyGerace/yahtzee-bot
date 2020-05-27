# YahtzeeBot

This is a playable implementation of a bot using an optimal Yahtzee strategy as described in [this paper](http://gunpowder.cs.loyola.edu/~jglenn/research/optimal_yahtzee.pdf).

## How it works

For any given turn, we can calculate the average amount of points to be gained by trying every possible combination of dice to keep, for every possible roll. At the end of the turn, we can compare the value of scoring different categories by looking at the average score of the next turn when starting in those states. We can do this by starting at the end of the game with fewer open categories, and caching those values as we work our way backwards. 

This process takes about an hour, but once completed, that cache is written to a file and is used by the bot on the front end to compute the optimal strategy for each turn. The bot does still have to calculate the intermediate states (all the rolls and keeps), which is still pretty resource intensive, so it does this from inside a web worker so it doesn't block the main thread.

The bot uses the same code that was used to build the cache, but transpiled to JS using ScalaJS

## How to build/test

To build table file:
```
sbt yahtzeeBotJVM/run
```

To build JS file: 
```
sbt fastOptJS
```

To test:
```
sbt yahtzeeBotJVM/test
```

Use `http-server` or something similar to serve the web page