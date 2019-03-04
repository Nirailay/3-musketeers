const starWars = require('./index');
const starWarsNames = require('./starwars-names.json');



describe('starwars-names', () => {
  describe('all', () => {
    test('should be a fulfilled array', () => {
      expect(starWars.all).toHaveLength(starWarsNames.length)
    });
	
	
    test('should be an array of strings', () => {
      expect(starWarsNames).ToBe(String);
    });
	

    test('should contain `Luke Skywalker`', () => {
      expect(starWarsNames).toContain('Luke Skywalker');
    });
	

    test('should not contain `Ben Quadinaros`', () => {
      expect(starWarsNames).not.toContain('Ben Quadinaros');
    });
  });

  describe('random', () => {
    test('should return a random item from the starWars.all', () => {
		const rand = random(2);
      expect(rand).toHaveReturned();
    });

	
    test('should return an array of random items if passed a number', () => {
      throw new Error('test not yet defined... remove the throw and write your test here');
    });
  });
});
