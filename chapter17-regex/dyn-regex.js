const users = ["mary", "nick", "arthur", "sam", "yvette"];
const text = "User @arthur started the backup and 15:15, " +
  "and @nick and @yvette restored it at 18:35.";
const userRegex = new RegExp(`@(?:${users.join('|')})\\b`, 'g');
const out = text.match(userRegex); // [ "@arthur", "@nick", "@yvette" ]
console.log(out);