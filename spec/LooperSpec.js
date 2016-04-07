describe('Looper', () => {
    var myLooper;
    beforeEach(function() {
        myLooper = new Looper();
    });
    describe('init', () => {
        it('initializes with an array of strings', function() {
            expect(myLooper.strings).toBeArray();
        });

    });
    describe('#str', () => {
        it('defaults to "abcdefghij"', function() {
            expect(myLooper.strings[0]).toEqual("abcdefghij");
        });
    });
    describe('#addString', () => {
        it('adds a new string to #strings', function() {
            myLooper.addString("lol");
            expect(myLooper.strings.length).toBe(2);
        });
    });
    describe('LooperIterators', () => {
        beforeEach(function() {
            myLooper.addString("jklol");

        });
        describe('#charSumForEach ', () => {
            it('sets the Looper.totalChars via forEach', function() {
                myLooper.charSumForEach();
                // alert(myLooper.totalChars);
                expect(myLooper.totalChars).toBeTruthy();
            });
        });
        describe('#charSumBadIterator', () => {
            it('sets the Looper.totalChars via nested iterations', function() {
                myLooper.charSumBadIterator();
                // alert(myLooper.totalChars);
                expect(myLooper.totalChars).toBeTruthy();
            });
        });
        describe('#charSumGoodIterator', () => {
            it('sets the Looper.totalChars via fewer object queries', function() {
                myLooper.charSumGoodIterator();
                // alert(myLooper.totalChars);
                expect(myLooper.totalChars).toBeTruthy();
            });
        });
    });


});