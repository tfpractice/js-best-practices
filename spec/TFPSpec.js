describe('TFP', () => {
    it('is defined', function() {
        expect(TFP).toBeDefined();
    });
    describe('STATIC_IMPORT', () => {
        it('id defined in the smae scope as TFP', function() {
            expect(STATIC_IMPORT).toBeDefined();
        });
        it('is is assigned a string that ends with "string to be modified" ', function() {
            expect(STATIC_IMPORT).toEndWith('string to be modified');
        });
    });
    it('has a status attribute that is "namespace"', function() {
        expect(TFP.status).toEqual('namespace');
    });
    it('has a purpose attribute that starts with "to encapsulate"', function() {
        expect(TFP.purpose).toStartWith('to encapsulate');
    });
    describe('getPString', () => {
        it('returns the modules private variable "a private string"', function() {
            expect(TFP.getPString()).toEqual('a private string');
        });
    });
    describe('#getPArrayLength', () => {
        it('returns the length (default 5) of the private PArray', function() {
            expect(TFP.getPArrayLength()).toEqual(5);
        });
    });
    describe('#addToPArray', () => {
        it('returns a string starting with "added element" ', function() {
            expect(TFP.addToPArray()).toStartWith('added element');
        });
        describe('#getPArrayLength', () => {
            it('returns a value greater than five', function() {
                expect(TFP.getPArrayLength()).toBeGreaterThan(5);
            });
        });
    });
    describe('#reverseImport', () => {
        it('returns a reversed version of STATIC_IMPORT (as private var _mod_import)', function() {
            var revImport = STATIC_IMPORT.split('').reverse().join('');
            expect(TFP.reverseImport()).toEqual(revImport);
        });
        it('leaves the origin STATIC_IMPORT unmodified', function() {
            expect(STATIC_IMPORT).toEndWith('string to be modified');
        });
    });
});
describe('AUG_TFP', () => {
    it('is defined globally', function() {
        expect(AUG_TFP).toBeDefined();
    });
    describe('it augents the old TFP module', () => {
        it('still has a status attribute that is "namespace"', function() {
            expect(AUG_TFP.status).toEqual('namespace');
        });
        describe('#concat_strings', () => {
            it('adds its own  private augString to original string via method call', function() {
                expect(AUG_TFP.concat_strings()).toEndWith('augmented module');
            });
        });
    });
});