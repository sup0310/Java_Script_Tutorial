// Dates and Time in JavaScript

// Create a new Date object representing the current date and time
const now = new Date();
// console.log('Current date and time:', now);
// console.log('Current date and time in String Format:', now.toString());
// console.log('Current date and time in ISO Format:', now.toISOString());
// console.log('Current date and time in UTC Format:', now.toUTCString());
// console.log('Current date and time in Local Format:', now.toLocaleString());
// console.log('Current date and time in Local Date Format:', now.toLocaleDateString());
// console.log('Current date and time in Local Time Format:', now.toLocaleTimeString());
// console.log('Current date and time in Time String Format:', now.toTimeString());

console.log(`
Current date and time: ${now},
Current date and time in Date String Format: ${now.toString()},
Current date in Date String Format: ${now.toDateString()},
Current date and time in ISO Format: ${now.toISOString()},
Current date and time in UTC Format: ${now.toUTCString()},
Current date and time in Local Format: ${now.toLocaleString()},
Current date and time in Local Date Format: ${now.toLocaleDateString()},
Current date and time in Local Time Format: ${now.toLocaleTimeString()},
Current date and time in Time String Format: ${now.toTimeString()},
Current date and time in JSON Format: ${now.toJSON()}
`);
console.log(typeof now);
console.log();


// Create a Date object from a specific date string
// const birthday = new Date('1990-05-15T08:30:00');
const birthday1 = new Date(2000, 9, 3); // can only follow YYYY, MM, DD format and month starts from 0 (January) to 11 (December)
console.log('Specific date 1:', birthday1.toDateString());

const birthday2 = new Date("2000-09-03"); // can follow YYYY-MM-DD format & MM-DD-YYYY format
console.log('Specific date 2:', birthday2.toDateString());
console.log();


// Convert Date to timestamp and back
const timestamp = now.getTime();
console.log('Timestamp (ms since 1970-01-01):', timestamp);
const fromTimestamp = new Date(timestamp);
console.log('Date from timestamp:', fromTimestamp);
console.log();


// Get components from a Date object
console.log('Year:', now.getFullYear());
console.log('Month (0-11):', now.getMonth() + 1); // Adding 1 to get the month in 1-12 range
console.log('Day of month:', now.getDate());
console.log('Hours:', now.getHours());
console.log('Minutes:', now.getMinutes());
console.log('Seconds:', now.getSeconds());
console.log();


// Format a date as a readable string
const formatted = now.toLocaleString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'short'
});
console.log('Formatted date:', formatted);
console.log();


// Modify date values
const tomorrow = new Date(now);
tomorrow.setDate(now.getDate() + 1);
console.log('Tomorrow:', tomorrow);
