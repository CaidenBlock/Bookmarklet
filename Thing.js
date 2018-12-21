//Sets initial vars
var halias = ["HELP", "?"];
var caiden = ["qwe", "asd", "hi"];
var halias = ["HELP", "?"];


//Makes initial prompt
var ting = prompt("Thing:");

//Uses input from prompt to Un-CaSe-SeNsItIzE
var thing = ting.toUpperCase();

//Beggining of Things
//Opens Gmail
if (thing=="GMAIL") window.open("https://gmail.com","_self");

//Opens Skyward
else if (thing=="SKYWARD") window.open("https://skyward.iscorp.com/scripts/wsisa.dll/WService=wsedumchenryil/seplog01.w","_self");

//Opens this.
else if (thing=="GITHUB") window.open("https://github.com/CaidenBlock/Bookmarklet/edit/master/Thing.js","_self");

//Opens Pearson Realize
else if (thing=="PEARSON") window.open("https://accounts.google.com/o/saml2/initsso?idpid=C00t0cavg&spid=701197821690&forceauthn=false","_self");

//Share probably Delete

/*else if (thing=="SHARE") {
    var ID = prompt("Type person's ID \nE.g. 'cblock700' or first initial, last name, three numbers###:");
var IDlc = ID.toLowerCase();
if( IDlc=="cblock700") alert("That was the example...\nWhy would you even put me? I made this!");
else window.open("mailto:" + ID + "@d15.org?subject=Bookmark%20Thing&body=javascript:(function(d,u,s){s=d.createElement(\'script\');s.type=\'text\/javascript\';s.charset=\'utf-8\';s.src=u;d.body.appendChild(s)})(document,\'https:\/\/cdn.rawgit.com\/CaidenBlock\/Bookmarklet\/master\/Thing.js\')");
}*/

//EDIT PAGE
else if (thing=="EDIT") {
  var edit = window.confirm("Edit\n\nOK = ON\nCancel = OFF");
     if( edit==true) {document.body.contentEditable = 'true'; document.designMode='on'; void 0}
     else {document.body.contentEditable = 'false'; document.designMode='false'; void 0}
}

//FIREBUG LITE
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

//USER ENTRIES
else if (thing=="TEST") { 
  var thinglist = document.createElement('script');
  thinglist.src = 'https://rawgit.com/CaidenBlock/Bookmarklet/master/ThingEntries.js';
  document.body.appendChild(thinglist);
  var customid = prompt("Custom ID:");
    if (operation[customid]=="open") window.open(newthing[customid],'_self');
    else if (operation[customid]=="say") alert(newthing[customid]);
  else alert("entry: " + entries[customid] + " operation: " + operation[customid] + " thing: " + newthing[customid]);
}

//NEW!!!
else if (thing=="NEW") {
    alert("Sorry, this feature is not avalible yet);

else if (thing=="UPDATE") alert("1.9.9-beta-r3.1\nThings are about to happen\nBe Prepared\n\nAdded Groundwork for JS-Page.");

//OLD STUFF

//var censor = ["To-do"];
//else if (thing=="TEST") document.write("<b>You're Harry, Wizard<b>");
//else if (thing=="BREAKFAST") alert("Waffles");
//else if (thing=="EASTER EGG") window.open("https:en.wikipedia.org/wiki/Easter_egg_(media)");
//else if (thing=="TODO") alert("Notepad\n Google form submit stuff\nMake Custom Things work.\neverything");
//else if (thing=="CREATOR") alert("Caiden Block made this!");
//else if (thing=="impossible") alert("Actully this is impossible to get!");
//else if (thing=="PA55W0RDHACK123") alert("I hope you figured this out by looking at the code...");
//else if (thing=="SHOULDNTAPPEAR") alert("This message should not appear. Please contact me if it does.");
//else if (thing=="RADICAL") alert("Totally Tubular!");
//else if( thing.indexOf('C@IDEN') >= 0) alert("Caiden was here.");
//else if( thing.indexOf('C@ID3N') >= 0) alert("Caiden was here.");
//else if( thing.indexOf('CAID3N') >= 0) alert("Caiden was here.");
//else if(censor.some(v => v===thing))alert("Censored");

else if( thing.indexOf('CAIDEN') >= 0) alert("Caiden was here.");
else if( thing.indexOf('JOEY') >= 0) alert("Joey was here.");
else if( thing.indexOf('DIEGO') >= 0) alert("Diego was here.");
else if( thing.indexOf('LANDON') >= 0) alert("Landon wasn't here.");
else if( thing.indexOf('TYLER') >= 0) alert("Tyler wasn't here.");
else if( thing.indexOf('EDWARD') >= 0) alert("Tyler wasn't here.");

//else if(halias.some(v => v===thing))alert("🅢🅘🅣🅔🅢\:\nGmail\nPearson\nSkyward\n\n🅕🅤🅝\:\nEdit\nInspect\nYou can find the rest of the secrets");
else alert(ting);

