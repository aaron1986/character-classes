/*
Class Spirit extends Wizard
    Constructor()
        Call super() with strengthValue for secrecy, weaknessValue for fighting (random values up to 50)

    Method getDetails()
        Return "Spirit with secrecy strength of (strength) and fighting weakness of (weakness). Total Hit Value: (totalHitValue)"
End Class
*/
const { Wizard} = require("./wizard-class")

class Spirit extends Wizard{
    constructor() {
        const strengthValue = 25
        const weaknessValue = 10
        super(strengthValue, weaknessValue)
    }

    //method
    getDetails() {
        `Return "Spirit with secrecy strength of ${strengthValue} and fighting weakness of ${weaknessValue}. Total Hit Value: ${totalHitValue}`
    }
}

module.exports = { Spirit }