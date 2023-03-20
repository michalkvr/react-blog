import TimeAgoLib from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

const LOCALE = 'en-US';

const timeSince = (date: Date) => {
  TimeAgoLib.addDefaultLocale(en);
  const timeAgoFormatter = new TimeAgoLib(LOCALE);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (yesterday.toDateString() === date.toDateString()) return 'Yesterday';
  return timeAgoFormatter.format(date);
};

export default timeSince;
