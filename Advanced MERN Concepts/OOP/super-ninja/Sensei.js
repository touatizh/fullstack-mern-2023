const Ninja = require("../ninja/Ninja");

/**
 * A class representing a Sensei, an advanced ninja with wisdom.
 * @extends Ninja
 */
class Sensei extends Ninja {
    /**
     * Creates a new Sensei.
     * @param {string} name - The name of the Sensei.
     * @param {number} [wisdom=10] - The wisdom level of the Sensei. Defaults to 10.
     */
    constructor(name, wisdom = 10) {
        super(name, 200, 10, 10);
        this.wisdom = wisdom;
    }

    /**
     * Logs wisdom and increases the Sensei's health.
     * @method
     */
    speakWisdom() {
        super.drinkSake(200);
        const wisdomQuote = "When I wrote this code, only God and I understood what I did. Now only God knows.";
        console.log(wisdomQuote);
    }
}
