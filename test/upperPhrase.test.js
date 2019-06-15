var {toUpperPhrase} = require('../controller/upperPhrase');

test('test of controller/toUpperPhrase.js',() => {
	expect(toUpperPhrase("success")).toEqual({"result": "SUCCESS"});
});