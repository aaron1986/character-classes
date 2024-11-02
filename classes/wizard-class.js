/*
Class Wizard extends Warrior
    Constructor()
        Call super() with strengthValue for intelligence, weaknessValue for speed (random values up to 50)

    Method getDetails()
        Return "Wizard with intelligence strength of (strength) and speed weakness of (weakness). Total Hit Value: (totalHitValue)"
End Class
*/

const { Warrior } = require("./warrior-class")

class Wizard extends Warrior {
    constructor() {
        const strengthValue = 35;
        const weaknessValue = 25;
        super(strengthValue, weaknessValue)
    }

    //method
    getDetails() {
        `Wizard with intelligence strength of ${strengthValue} and speed weakness of ${weaknessValue}. Total Hit Value: ${this.totalHits}`
    }
}

module.exports = { Wizard }