describe ('Fizzbuzz', function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('knows when a number is', function() {
    it('divisible by 3', function(){
      expect(fizzbuzz.isDivisibleBy(3, 3)).toBe(true);
    });
    it('NOT divisible by 3', function(){
      expect(fizzbuzz.isDivisibleBy(3, 1)).toBe(false);
    });
    it('divisible by 5', function(){
      expect(fizzbuzz.isDivisibleBy(5, 5)).toBe(true);
    });
    it('divisible by 15', function(){
      expect(fizzbuzz.isDivisibleBy(15, 15)).toBe(true);
    });

  });

  describe('Prints', function() {
    it('fizz when number is 3', function(){
      expect(fizzbuzz.says(3)).toEqual('fizz');
    });
    it('buzz when number is 5', function(){
      expect(fizzbuzz.says(5)).toEqual('buzz');
    });
    it('fizzbuzz when number is 15', function(){
      expect(fizzbuzz.says(15)).toEqual('fizzbuzz');
    });
  });
});




