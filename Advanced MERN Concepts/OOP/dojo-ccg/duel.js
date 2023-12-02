const { Unit, Effect } = require("./Cards")

// First Turn
console.log("---------- First Turn ----------")
redBelt = new Unit(name="Red Belt Ninja", cost=3, power=3, resilience=4);
hardAlgo = new Effect(name="Hard Algorithm", cost=2, text="Increase the target's resilience by 3.");
hardAlgo.play(redBelt);

// Second Turn
console.log("---------- Second Turn ----------")
blackBelt = new Unit(name="Black Belt Ninja", cost=4, power=5, resilience=4);
unhandeledPromise = new Effect(name="Unhandled Promise Rejection", cost=1, text="Reduce the target's resilience by 2.");
unhandeledPromise.play(redBelt);

// Third Turn
console.log("---------- Third Turn ----------")
pairProg = new Effect(name="Pair Programming", cost=3, text="Increase the target's power by 2.");
pairProg.play(redBelt);
redBelt.attack(blackBelt);