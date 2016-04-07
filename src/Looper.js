function Looper(str = "abcdefghij") {
    this.strings = [str];
}
Looper.prototype.addString = function(newStr = 'hij') {
    this.strings.push(newStr);
};
Looper.prototype.charSumForEach = function() {
    console.time("charSumForEach");
    this.totalChars = 0;
    this.strings.forEach(function(el) {
        this.totalChars += el.length;
    }, this);
    console.timeEnd("charSumForEach");
    return this.totalChars;
};
Looper.prototype.charSumBadIterator = function() {
    console.time("charSumBadIterator");
    this.totalChars = 0;
    for (var i = 0; i < this.strings.length; i++) {
        var currStr = this.strings[i];
        var currLength = currStr.length;
        this.totalChars += currLength;
    }
    console.timeEnd("charSumBadIterator");
    return this.totalChars;
};
Looper.prototype.charSumGoodIterator = function(first_argument) {
    console.time("charSumGoodIterator");
    this.totalChars = 0;
    for (var i = 0, strCount = this.strings.length, currStr = this.strings[i]; i < strCount; i++) {
        this.totalChars += currStr.length;
    }
    console.timeEnd("charSumGoodIterator");
    return this.totalChars;
};