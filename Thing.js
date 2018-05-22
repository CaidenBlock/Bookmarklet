var ting = prompt("Thing:");
var censor = ["To-do"];
var halias = ["HELP", "?"];
var thing = ting.toUpperCase();
if (thing=="GMAIL") window.open("https://gmail.com","_self");
else if (thing=="SKYWARD") window.open("https://skyward.iscorp.com/scripts/wsisa.dll/WService=wsedumchenryil/seplog01.w","_self");
else if (thing=="GITHUB") window.open("https://github.com/CaidenBlock/Bookmarklet/edit/master/Thing.js","_self");
else if (thing=="TEST") document.write("<b>You're Harry, Wizard<b>");
else if (thing=="PEARSON") window.open("https://accounts.google.com/o/saml2/initsso?idpid=C00t0cavg&spid=701197821690&forceauthn=false","_self");
else if (thing=="SHARE") {
var ID = prompt("Type person's ID \nE.g. 'cblock700':");
var IDlc = ID.toLowerCase();
if( IDlc=="cblock700") alert("That was the example...\nWhy would you even put me? I made this!");
else window.open("mailto:" + ID + "@d15.org?subject=Bookmark%20Thing&body=javascript:(function(d,u,s){s=d.createElement(\'script\');s.type=\'text\/javascript\';s.charset=\'utf-8\';s.src=u;d.body.appendChild(s)})(document,\'https:\/\/cdn.rawgit.com\/CaidenBlock\/Bookmarklet\/master\/Thing.js\')");
}
else if (thing=="EDIT") {
  var edit = window.confirm("Edit\n\nOK = ON\nCancel = OFF");
     if( edit==true) {document.body.contentEditable = 'true'; document.designMode='on'; void 0}
     else {document.body.contentEditable = 'false'; document.designMode='false'; void 0}
}
else if (thing=="BREAKFAST") alert("Waffles");
else if (thing=="INSPECT") {
  var firebug = document.createElement('script');
  firebug.setAttribute('src', 'http://getfirebug.com/releases/lite/1.2/firebug-lite-compressed.js');
  document.body.appendChild(firebug);
  (function() {
      if (window.firebug.version) {
         firebug.init();
     } else {
         setTimeout(arguments.callee);
     }
  })();
  void(firebug);
}
else if (thing=="TEST2") { 
  var thinglist = document.createElement('script');
  thinglist.src = 'https://rawgit.com/CaidenBlock/Bookmarklet/master/ThingEntries.js';
  document.body.appendChild(thinglist);
  alert(thinglist.entries);
}
else if (thing=="EASTER EGG") window.open("https:en.wikipedia.org/wiki/Easter_egg_(media)");
else if (thing=="TODO") alert("Notepad\n Google form submit stuff\neverything");
else if (thing=="CREATOR") alert("Caiden Block made this!");
else if (thing=="impossible") alert("Actully this is impossible to get!");
else if (thing=="PA55W0RDHACK123") alert("I hope you figured this out by looking at the code...");
else if (thing=="SHOULDNTAPPEAR") alert("This message should not appear. Please contact me if it does.");
else if (thing=="RADICAL") alert("Totally Tubular!");
else if( thing.indexOf('CAIDEN') >= 0) alert("Caiden was here");
else if( thing.indexOf('C@IDEN') >= 0) alert("Caiden was here");
else if( thing.indexOf('C@ID3N') >= 0) alert("Caiden was here");
else if( thing.indexOf('CAID3N') >= 0) alert("Caiden was here");
else if( thing.indexOf('JOEY') >= 0) alert("Joey was here");
else if( thing.indexOf('DIEGO') >= 0) alert("Diego was here");
else if(censor.some(v => v===thing))alert("Censored");
else if(halias.some(v => v===thing))alert("🅢🅘🅣🅔🅢\:\nGmail\nPearson\nSkyward\n\n🅕🅤🅝\:\nEdit\nInspect\nYou can find the rest of the secrets");
else alert(ting);

