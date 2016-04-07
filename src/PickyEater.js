function PickyEater(prms = {
    mood: "sad",
    age: 22,
    region: 'midWest'
}) {
    this.mood = prms.mood;
    this.age = prms.age;
    this.region = prms.region;
    // this.catchphrase = "I have a catchphrase";
}

PickyEater.prototype.ternary_snack = function() {
    return (this.mood == 'sad' ? 'comfort food' : 'happy snack');
};
PickyEater.prototype.compound_ternary_drink = function() {
    return ((this.mood == 'sad' && this.region == 'midWest') ? 'sad, cold pop' : 'a coke ');
};
PickyEater.prototype.age_appropriate_anonymous_call = function() {
    return (this.age > 18) ? function() {
        return 'adult';
    }() : function() {
        return 'child';
    }();

};
PickyEater.prototype.age_switch = function() {
    switch (true) {
        case (this.age < 4):
            this.catchphrase = 'I am under four';
            break;
        case (this.age < 7):
            this.catchphrase = 'I am under seven';
            break;
        case (this.age == 7):
            this.catchphrase = "I am exactly seven";
            break;
        case (this.age < 18):
            this.catchphrase = "I am under eighteen";
            break;
        case (this.age >= 22):
            this.catchphrase = "I am an adult";
            break;
        default:
        this.catchphrase = "unspecified default catchphrase";

    }
};