/**
 * A class representing a Card with name and cost attributes.
 * @class
 */
class Card {
    /**
     * Creates a new Card.
     * @constructor
     * @param {string} name - The name of the card.
     * @param {Number} cost - The cost to play the card.
     */
    constructor(name, cost) {
        /**
         * The name of the card.
         * @type {string}
         */
        this.name = name;

        /**
         * The cost to play the card.
         * @type {Number}
         */
        this.cost = cost;
    }
}


/**
 * A class representing a Unit, a specific type of Card.
 * Units have `resilience` and `power` attributes and they can target other Units
 * @extends Card
 */
class Unit extends Card {
    /**
     * Creates a new Unit.
     * @constructor
     * @param {string} name - The name of the unit.
     * @param {Number} cost - The cost to play the unit.
     * @param {Number} power - The unit's power level.
     * @param {Number} resilience - The unit's resilience level.
     */
    constructor(name, cost, power, resilience) {
        super(name, cost);

        /**
         *  The unit's power level.
         * @type {Number}
         */
        this.power = power;

        /**
         *  The unit's resilience level.
         * @type {Number}
         */
        this.resilience = resilience;
    }

    /**
     * Attacks a target reducing its resilience by the unit's power.
     * If the target's resilience drops to 0 or below the target is destroyed.
     * @method
     * @param {Unit} target - The target unit.
     * @returns {Unit} The current Unit instance for method chaining.
     */
    attack(target) {
        console.log(`Attacking ${target.name}...`)
        target.resilience -= this.power;
        if (target.resilience <= 0) console.log(`${target.name} destroyed!`);
    }
    /**
     * Displays current unit stats.
     * @returns {string} - A string representation of current unit stats
     */
    showStats() {
        return `Name: ${this.name}, Power: ${this.power}, Resilience: ${this.resilience}`
    }
}


/**
 * A class representing an Effect, a specific type of Card.
 * Effects have `text` and target a unit's `stat` by increasing or reduce it by `magnitude`.
 * Effects have to be played with a Unit to target
 * @extends Card
 */
class Effect extends Card {
    /**
     * Creates a new Effect.
     * @constructor
     * @param {string} name - The name of the effect.
     * @param {Number} cost - The cost to play the effect.
     * @param {string} text - The card's effect on target. 
     */
    constructor(name, cost, text) {
        super(name, cost);

        /**
         *! Check if the text follows the format: "Raise/Lower/Increase/Reduce the target's `resilience/power` by `amount`" and throw an error otherwise.
         */
        // Define the pattern using a regular expression
        const textPattern = /^(Raise|Lower|Increase|Reduce) the target's (resilience|power) by (\d+)\.$/;
        if (!textPattern.test(text)) {
            throw new Error(`Invalid effect text. Text should follow the pattern: "Raise/Lower/Increase/Reduce the target's resilience/power by amount"`);
        }

        /**
         * The card's effect on target.
         * @type {string}
         */
        this.text = text;

        // Extract action, stat, and magnitude from the text using match method
        const matches = text.match(textPattern);

        /**
         * The card's effect, either raise or lower.
         * @type {string}
         */
        this.action = matches[1];

        /**
         * The card's effect target stat.
         * @type {string}
         */
        this.stat = matches[2];

        /**
         * The card's effect magnitude.
         * @type {Number}
         */
        this.magnitude = parseInt(matches[3], 10);
    }

    /**
     * Apply the card's effect on target unit stat.
     * @method
     * @param {Unit} target - The target unit.
     * @returns {Unit} The current Unit instance for method chaining.
     */
    play(target) {
        if (target instanceof Unit) {
            console.log(`Applying effect on ${target.name}...`)
            switch (this.stat.toLowerCase()) {
                case "power":
                    if (this.action.toLowerCase() === "raise" || this.action.toLowerCase() === "increase") {
                        target.power += this.magnitude;
                        console.log(target.showStats());
                    }
                    else {
                        target.power -= this.magnitude;
                        console.log(target.showStats());
                    }
                    break;
                case "resilience":
                    if (this.action.toLowerCase() === "raise" || this.action.toLowerCase() === "increase") {
                        target.resilience += this.magnitude;
                        console.log(target.showStats());
                    }
                    else {
                        target.resilience -= this.magnitude;
                        console.log(target.showStats());
                    }
                    break;
                default:
                    throw new Error("Something went wrong. Please try again.")
            }
        }
        else {
            throw new Error("Target must be a unit!")
        }
    }
}

module.exports = {Unit, Effect}