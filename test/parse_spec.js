'use strict';

var parse = require('../src/parse');

describe('parse', function() {
  it('can parse an integer', function() {
    var fn = parse('42');
    expect(fn).toBeDefined();
    expect(fn()).toBe(42);
  });

  it('can parse a floating point number', function() {
    var fn = parse('4.2');
    expect(fn()).toBe(4.2);
  });

  it('can parse a floating point without an integer part', function() {
    var fn = parse('.42');
    expect(fn()).toBe(0.42);
  });

  it('can parse a number in scientific notation', function() {
    var fn = parse('42e3');
    expect(fn()).toBe(42000);
  });

  it('can parse scientific notation with a float coeffitient', function() {
    var fn = parse('.42e2');
    expect(fn()).toBe(42);
  });

  it('can parse scientific notation with negative exponents', function() {
    var fn = parse('4200e-2');
    expect(fn()).toBe(42);
  });

  it('can parse scientific notation with + sign', function() {
    var fn = parse('.42e+2');
    expect(fn()).toBe(42);
  });

  it('can parse upper case scientific notation', function() {
    var fn = parse('.42E2');
    expect(fn()).toBe(42);
  });

  it('will not parse invalid scientific notation', function() {
    expect(function() { parse('42e-'); }).toThrow();
    expect(function() { parse('42e-a'); }).toThrow();
  });

  it('can parse a string in single quates', function() {
    var fn = parse("'abc'");
    expect(fn()).toBe('abc');
  });

  it('can parse a string in double quates', function() {
    var fn = parse('"abc"');
    expect(fn()).toBe('abc');
  });

  it('will not parse a string with mismatching quates', function() {
    expect(function() { parse('"abc\''); }).toThrow();
  });

  it('can parse a string with single quates inside', function() {
    var fn = parse("'a\\\'b'");
    expect(fn()).toBe('a\'b');
  });

  it('can parse a string with double quates inside', function() {
    var fn = parse('"a\\\"b"');
    expect(fn()).toBe('a\"b');
  });

  it('will parse a string with unicod escapes', function() {
    var fn = parse('"\\u00A0"');
    expect(fn()).toEqual('\u00A0');
  });

  it('will not parse a string with invalid unicod escapes', function() {
    expect(function() { parse('"\\u00T0"'); }).toThrow();
  });
});
