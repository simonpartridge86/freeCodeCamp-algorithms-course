/*
Return true if the passed string looks like a valid US phone number.

The following are examples of valid formats for US numbers (refer to the tests below for other variants):
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
*/

function telephoneCheck(str) {
  const validFormat = /^1{0,1}\s*(\(\d{3}\)|\d{3})(\s|-)*\d{3}(\s|-)*\d{4}$/;
  return validFormat.test(str);
}

console.log("true", telephoneCheck("1 555-555-5555"));
console.log("true", telephoneCheck("5555555555"));
console.log("true", telephoneCheck("1 (555) 555-5555"));
console.log("false", telephoneCheck("1 555)555-5555"));
console.log("false", telephoneCheck("2 (757) 622-7382"));

/* regex explained:
^  = must start here
1{0,1} = matches 0 or 1 "1"s
\s* = matches any number of spaces (or none)
(\(\d{3}\)|\d{3}) = matches three digits surrounded by parentheses, or three digits alone
(\s|-)* = matches a hyphen (0 or some) followed by whitespace (0 or some)
\d{3} = matches three digits
(\s|-)* = same as above
\d{4} = matches 4 digits
$ = must end here

*/
