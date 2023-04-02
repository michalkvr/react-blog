import { describe, test, expect } from 'vitest';
import slugify from '~/utils/slugify';

describe('slugify', () => {
  test('should replace spaces with dashes', () => {
    const input = 'hello world';
    const expectedOutput = 'hello-world';
    const output = slugify(input);
    expect(output).toBe(expectedOutput);
  });

  test('should remove special characters', () => {
    const input = 'h@e#l$l%o^&*(';
    const expectedOutput = 'hello';
    const output = slugify(input);
    expect(output).toBe(expectedOutput);
  });

  test('should convert all characters to lowercase', () => {
    const input = 'HeLLo WoRld';
    const expectedOutput = 'hello-world';
    const output = slugify(input);
    expect(output).toBe(expectedOutput);
  });

  test('should handle empty strings', () => {
    const input = '';
    const expectedOutput = '';
    const output = slugify(input);
    expect(output).toBe(expectedOutput);
  });

  test('should handle strings with only special characters', () => {
    const input = '@#$%^&*()';
    const expectedOutput = '';
    const output = slugify(input);
    expect(output).toBe(expectedOutput);
  });
});
