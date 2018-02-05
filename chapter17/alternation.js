const html = 'HTML with <a href="/one">one link</a>, and some JavaScript.' + '<script src="stuff.js"></script>';

// 1st attempt
// const matches = html.match(/area|a|link|script|source/ig); 
// output: [ 'a', 'link', 'a', 'a', 'a', 'a', 'Script', 'script', 'script' ]

// 2nd attempt 
const matches = html.match(/<area|<a|l<ink|<script|<source/ig); 
// output: [ '<a', '<script' ]  

console.log(matches);