let html = '<a class="nope" href="/yep">Yep</a>';
html = html.replace(/<a .*?(href=".*?").*?>/, '<a $1>');

console.log(html);
// <a href="/yep">Yep</a>