/*
Class Warrior extends Character
    Constructor()
        Call super() with strengthValue for fighting, weaknessValue for secrecy (random values up to 50)

    Method getDetails()
        Return "Warrior with fighting strength of (strength) and secrecy weakness of (weakness). Total Hit Value: (totalHitValue)"
End Class
*/

const { Character } = require("./character")

class Warrior extends Character {
    constructor() {
        // Set specific values for Warrior's strength and weakness
        const strengthValue = 45;
        const weaknessValue = 35;
        super(strengthValue, weaknessValue)
    }

    getDetails() {
        return `Warrior with fighting strength of ${this.strength} and secrecy weakness of ${this.weakness}. Total Hit Value: ${this.totalHits}`
    }
}

module.exports = { Warrior }