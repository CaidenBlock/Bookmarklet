var ting = prompt("Thing:");
var thing = ting.toUpperCase();
if (thing=="GMAIL") window.open("https://gmail.com","_self");
else if (thing=="PEARSON") window.open("https://accounts.google.com/o/saml2/initsso?idpid=C00t0cavg&spid=701197821690&forceauthn=false","_self");
else if (thing=="SHARE") {
var ID = prompt("Type person's ID \nE.g. 'cblock700':");
window.open("mailto:" + ID + "@d15.org?subject=Bookmark%20Thing&body=javascript:(function(d,u,s){s=d.createElement(\'script\');s.type=\'text\/javascript\';s.charset=\'utf-8\';s.src=u;d.body.appendChild(s)})(document,\'https:\/\/cdn.rawgit.com\/CaidenBlock\/Bookmarklet\/master\/Thing.js\')");
}
else if (thing=="SHELL") alert("WIP")
else if (thing=="DONGLES") alert("iPhone 7 has many Dongles");
else if( thing.indexOf('CAIDEN') >= 0)alert("Caiden was here");
else if( thing.indexOf('JOEY') >= 0)alert("Joey was here");
else if( thing.indexOf('DICK') >= 0)alert("Censored");
else if( thing.indexOf('FUCK') >= 0)alert("Censored");
else if( thing.indexOf('SHIT') >= 0)alert("Censored");
else if( thing.indexOf('ASS') >= 0)alert("Censored");
else alert(ting);
