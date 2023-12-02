/**
 * Represents a Ninja with name, health, strength, and speed attributes.
 * @class
 */
class Ninja {
    /**
     * Creates a new Ninja.
     * @constructor
     * @param {string} name - The name of the Ninja.
     * @param {number} [health=100] - The health of the Ninja (default is 100).
     * @param {number} [speed=3] - The speed of the Ninja (default is 3).
     * @param {number} [strength=3] - The strength of the Ninja (default is 3).
     */
    constructor(name, health = 100, speed = 3, strength = 3) {
        /**
         * The name of the Ninja.
         * @type {string}
         */
        this.name = name;

        /**
         * The health of the Ninja.
         * @type {number}
         */
        this.health = health;

        /**
         * The strength of the Ninja.
         * @type {number}
         */
        this.strength = strength;

        /**
         * The speed of the Ninja.
         * @type {number}
         */
        this.speed = speed;
    }


    /**
     * Logs the Ninja's name to the console.
     * @method
     */
    sayName() {
        console.log(this.name);
    }

    /**
     * Logs the Ninja's name, strength, speed, and health to the console.
     * @method
     */
    showStats() {
        console.log(
            `Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`
        );
    }

    /**
     * Adds +10 health to the ninja, up to a maximum of 100. 
     * If the resulting health exceeds the maximum allowed (defaulted to 100), it is capped at the maximum value.
     * @method
     * @param {number} [maxHealth=100] - The maximum health limit. Defaults to 100.
     * @returns {Ninja} The current Ninja instance for method chaining.
     */
    drinkSake(maxHealth = 100) {
        const healthIncrease = 10;
        this.health = (this.health + healthIncrease) >= maxHealth ? maxHealth : this.health + healthIncrease;
        return this;
    }
}

module.exports = Ninja