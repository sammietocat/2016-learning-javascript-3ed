// set env var by 
// + export DEBUG=1 in unix 
// + set DEBUG=1 in windows 

const debug = process.env.DEBUG === "1" ? console.log : function () {};

debug("Visible only if environment variable DEBUG is set!");