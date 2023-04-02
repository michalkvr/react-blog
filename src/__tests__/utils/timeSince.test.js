import { describe, test, expect } from 'vitest';
import timeSince from '~/utils/timeSince';

describe('timeSince', () => {
  test('timeSince returns "just now" for current time', () => {
    const now = new Date();
    const expected = 'just now';
    const actual = timeSince(now);
    expect(actual).toBe(expected);
  });
  test('timeSince returns "1 minute ago" for time 1 minute ago', () => {
    const now = new Date();
    const oneMinuteAgo = new Date(now.getTime() - 60 * 1000);
    const expected = '1 minute ago';
    const actual = timeSince(oneMinuteAgo);
    expect(actual).toBe(expected);
  });
  test('timeSince returns "2 hours ago" for time 2 hours ago', () => {
    const now = new Date();
    const twoHoursAgo = new Date(now.getTime() - 2 * 60 * 60 * 1000);
    const expected = '2 hours ago';
    const actual = timeSince(twoHoursAgo);
    expect(actual).toBe(expected);
  });
  test('timeSince returns "3 days ago" for time 3 days ago', () => {
    const now = new Date();
    const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);
    const expected = '3 days ago';
    const actual = timeSince(threeDaysAgo);
    expect(actual).toBe(expected);
  });
  test('timeSince returns "1 year ago" for time 1 year ago', () => {
    const now = new Date();
    const oneYearAgo = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
    const expected = '1 year ago';
    const actual = timeSince(oneYearAgo);
    expect(actual).toBe(expected);
  });
  test('timeSince returns "10 years ago" for time 10 years ago', () => {
    const now = new Date();
    const tenYearsAgo = new Date(
      now.getTime() - 10 * 365 * 24 * 60 * 60 * 1000
    );
    const expected = '10 years ago';
    const actual = timeSince(tenYearsAgo);
    expect(actual).toBe(expected);
  });
});
