var STATIC_IMPORT = 'I am a static string to be modified';

var TFP = (function(import_string) {
    var mod_import = import_string;
    var pArray = [1, 3, 5, 7, 9];
    var pString = 'a private string';
    var pushPArray = function(num) {
        pArray.push(num);
    };

    return {
        status: 'namespace',
        purpose: 'to encapsulate data specific to TFP related things',
        getPString: function() {
            return pString;
        },
        getPArrayLength: function() {
            return pArray.length;
        },
        addToPArray: function(num) {
            num = num || 0;
            pushPArray(num);
            return 'added element to the private array';
        },
        reverseImport: function() {
            return mod_import.split('').reverse().join('');
        }
    };
})(STATIC_IMPORT);

var AUG_TFP = (function(oldModule) {
    var augArray = [2, 4, 6, 8];
    var augString = ' I am a part of the augmented module';
    oldModule.concat_strings = function() {
        return oldModule.getPString() + augString;
    };
    return oldModule;
})(TFP);