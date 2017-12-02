var ting = prompt("Thing:");
var censor = ["DICK", "FUCK", "SHIT", "ASS", "DICK", "PENIS", "FAGGOT"];
var halias = ["HELP", "?"];
var thing = ting.toUpperCase();
if (thing=="GMAIL") window.open("https://gmail.com","_self");
else if (thing=="SKYWARD") window.open("https://skyward.iscorp.com/scripts/wsisa.dll/WService=wsedumchenryil/seplog01.w","_self");
else if (thing=="TEST") document.write("<b>You're Harry, Wizard<b>");
else if (thing=="PEARSON") window.open("https://accounts.google.com/o/saml2/initsso?idpid=C00t0cavg&spid=701197821690&forceauthn=false","_self");
else if (thing=="SHARE") {
var ID = prompt("Type person's ID \nE.g. 'cblock700':");
var IDlc = ID.toLowerCase();
if( IDlc=="cblock700") alert("That was the example...\nWhy would you even put me? I made this!");
else window.open("mailto:" + ID + "@d15.org?subject=Bookmark%20Thing&body=javascript:(function(d,u,s){s=d.createElement(\'script\');s.type=\'text\/javascript\';s.charset=\'utf-8\';s.src=u;d.body.appendChild(s)})(document,\'https:\/\/cdn.rawgit.com\/CaidenBlock\/Bookmarklet\/master\/Thing.js\')");
}
else if (thing=="EDIT") {
  var edit = window.confirm("Edit?\nOK = ON\nCancel = OFF?");
     if( edit==true) {document.body.contentEditable%20=%20'true';%20document.designMode='on';%20void%200}
     else {document.body.contentEditable%20=%20'false';%20document.designMode='false';%20void%200}
}
else if (thing=="Easter Egg") window.open("https:en.wikipedia.org/wiki/Easter_egg_(media)");
else if (thing=="Creator") alert("Caiden Block made this!");
else if (thing=="Radical") alert("Totally Tubular!");
else if( thing.indexOf('CAIDEN') >= 0) alert("Caiden was here");
else if( thing.indexOf('JOEY') >= 0) alert("Joey was here");
else if(censor.some(v => v===thing))alert("Censored");
else if(halias.some(v => v===thing))alert("🅢🅘🅣🅔🅢\:\nGmail\nPearson\nSkyward\n\n🅕🅤🅝\:\nEdit\nYou can find the rest of the secrets");
else alert(ting);

