var ting = prompt("Thing:");
var censor = ["DICK", "FUCK", "SHIT", "ASS", "DICK", "PENIS", "VAGINA"];
var thing = ting.toUpperCase();
if (thing=="GMAIL") window.open("https://gmail.com","_self");
else if (thing=="PEARSON") window.open("https://accounts.google.com/o/saml2/initsso?idpid=C00t0cavg&spid=701197821690&forceauthn=false","_self");
else if (thing=="SHARE") {
var ID = prompt("Type person's ID \nE.g. 'cblock700':");
var IDlc = ID.toLowerCase();
if( IDlc=="cblock700") alert("That was the example...\nWhy would you even put me? I made this!");
else window.open("mailto:" + ID + "@d15.org?subject=Bookmark%20Thing&body=javascript:(function(d,u,s){s=d.createElement(\'script\');s.type=\'text\/javascript\';s.charset=\'utf-8\';s.src=u;d.body.appendChild(s)})(document,\'https:\/\/cdn.rawgit.com\/CaidenBlock\/Bookmarklet\/master\/Thing.js\')");
}
else if (thing=="Easter Egg") window.open("https:en.wikipedia.org/wiki/Easter_egg_(media)");
else if (thing=="Creator") alert("Caiden Block made this!");
else if (thing=="Radical") alert("Totally Tubular!");
else if( thing.indexOf('CAIDEN') >= 0) alert("Caiden was here");
else if( thing.indexOf('JOEY') >= 0) alert("Joey was here");
else if(censor.some(v => v===thing))alert("Censored");
else alert(ting);

