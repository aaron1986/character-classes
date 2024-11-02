/*Class Character
    Properties:
        strength: Integer
        weakness: Integer
        totalHitValue: Integer

    Constructor(strengthValue, weaknessValue)
        Set strength = strengthValue
        Set weakness = weaknessValue
        Calculate totalHitValue as (strength - weakness)

    Method getDetails()
        Return "Character with strength of (strength) and weakness of (weakness). Total Hit Value: (totalHitValue)"
End Class

*/

class Character {
    constructor(strengthValue, weaknessValue) {
        this.strength = strengthValue
        this.weakness = weaknessValue
        this.totalHits = this.strength - this.weakness
    }

    //method 
    getDetails() {
        return `Character with strength of ${this.strength} and weakness of ${this.weakness}. Total Hit Value: ${this.totalHits}`
    }

} //end of character class

module.exports = { Character }