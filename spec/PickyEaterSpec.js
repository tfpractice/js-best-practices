describe('PickyEater', function() {
    var myEater, youngEater, southernEater, happyEater;
    beforeEach(function() {
        myEater = new PickyEater()
        youngEater = new PickyEater({
            age: 7
        })
        southernEater = new PickyEater({
            region: 'south'
        })
        happyEater = new PickyEater({
            mood: 'happy'
        })
    });
    describe('init', function() {
        it('initializes with a mood', function() {
            expect(myEater.mood).toBeTruthy();
        });
        it('initializes with a age', function() {
            expect(myEater.age).toBeTruthy();
        });
        it('initializes with a region', function() {
            expect(myEater.region).toBeTruthy();
        });
    });
    describe('#ternary_snack ', function() {
        it('has the #ternary_snack method on its prototype', function() {
            expect(PickyEater.prototype).toHaveMethod('ternary_snack')
        });
        describe('when mood is "sad"', function() {
            it('returns "comfort food" ', function() {
                expect(myEater.ternary_snack()).toBe('comfort food')
            });
        });
        describe('when mood is not "sad"', function() {
            it('returns "comfort food" ', function() {
                expect(happyEater.ternary_snack()).toBe('happy snack')
            });
        });
    });
    describe('#compound_ternary_drink', function() {
        it('is a method on the PickyEater prototype', function() {
            expect(PickyEater.prototype).toHaveMethod('compound_ternary_drink')
        });
        describe('#compound_ternary_drink', () => {
            describe('when mood is sad and region is midWest', () => {
                it('returns "sad, cold pop" ', function() {
                    expect(myEater.compound_ternary_drink()).toEqual('sad, cold pop');
                });

            });
        });
    });
    describe('#age_appropriate_anonymous_call', () => {
        it('is a method defined on the PickyEater prototype', function() {
            expect(PickyEater.prototype).toHaveMethod('age_appropriate_anonymous_call')
        });
        describe('when age is over 18', () => {
            it('calls a self-invoked anonymous function declaring its age range', function() {
                expect(myEater.age_appropriate_anonymous_call()).toEqual('adult');
            });

        });
    });
    describe('#age_switch', () => {
        it('is a method defined on the PickyEater prototype', function() {
            expect(PickyEater.prototype).toHaveMethod('age_switch')
        });
        describe('before called', () => {
            it('does not have a #catchphrase attribute(undefined) ', function() {
                expect(myEater.catchphrase).toBeUndefined();
            });

        });
        describe('after called', () => {
            it('creates a #catchphrase attribute', function() {
                myEater.age_switch()
                expect(myEater.catchphrase).toBeTruthy();
            });
        });

        describe('when age is < 4', () => {
            it('#catchphrase ends with "under four" ', function() {
                var underAge = new PickyEater({
                    age: 3
                })
                underAge.age_switch()
                expect(underAge.catchphrase).toEndWith('under four');
            });
        });
        describe('when age is between 4 and 7 ', () => {
            it('#catchphrase ends with "under seven" ', function() {
                var underAge = new PickyEater({
                    age: 6
                })
                underAge.age_switch()
                expect(underAge.catchphrase).toEndWith('under seven');
            });
        });
        describe('when age is equal to 7 ', () => {
            it('#catchphrase ends with "exactly seven" ', function() {
                var underAge = new PickyEater({
                    age: 7
                })
                underAge.age_switch()
                expect(underAge.catchphrase).toEndWith('exactly seven');
            });
        });
        describe('when age is less than 18 ', () => {
            it('#catchphrase ends with "under eighteen" ', function() {
                var underAge = new PickyEater({
                    age: 15
                })
                underAge.age_switch()
                expect(underAge.catchphrase).toEndWith('under eighteen');
            });
        });
        describe('when age is greater than  or equal to 22 ', () => {
            it('#catchphrase ends with "under an adult" ', function() {
                var underAge = new PickyEater({
                    age: 23
                })
                underAge.age_switch()
                expect(underAge.catchphrase).toEndWith('an adult');
            });
        });
        describe('when age is between 18 and 22 ', () => {
            it('#catchphrase ends with "unspecified default" ', function() {
                var underAge = new PickyEater({
                    age: 20
                })
                underAge.age_switch()
                expect(underAge.catchphrase).toStartWith('unspecified default');
            });
        });
    });


});