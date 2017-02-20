var gm2pex = true;
function init(){
	if(window.innerWidth <= 800 && window.innerHeight <= 600) modal2.style.display = "block";
	else modal3.style.display = "block";
}
function convertSend(){
	var toConv = document.getElementById("input").value;
	if (toConv == null || toConv.replace(/\s/g,'') == '') modal1.style.display = "block";
	else {
		var _txt = $("#input").val(), _line = _txt.split("\n"), _count = _line.length;
		console.log(_count);
		if (_count > 1)  document.getElementById('processed').innerHTML = _count + " Lines Processed.";
		if (_count == 1) document.getElementById('processed').innerHTML = _count + " Line Processed.";
		fconvert(toConv);
	}
}
function fswitch(){
	div1  = $('#info1');
	div2  = $('#info2');
	cdiv1 = div1.clone();
	cdiv2 = div2.clone();
	gm2pex = !gm2pex;
	if (gm2pex == true){
		//document.getElementById('s-t-f').innerHTML = "Switch the fields to \"PEX to GM\"";
		//document.getElementById('w-t-w').innerHTML = "GM TO PEX";
		$("#s-t-f").fadeOut("fast", function(){
  			$("#s-t-f").html("Switch the fields to \"PEX to GM\"").fadeIn("fast");
		});
		$("#desc1").fadeOut("fast", function(){
  			$("#desc1").html("GroupManager to PermissionsEx").fadeIn("fast");
		});
		$("#w-t-w").fadeOut("fast", function(){
  			$("#w-t-w").html("GM TO PEX").fadeIn("fast");
		});
		$("#title-l").fadeOut("fast", function(){
  			$("#title-l").html("Groupmanager to Pex Converter").fadeIn("middle");
		});
		div1.replaceWith(cdiv2);
    	div2.replaceWith(cdiv1);
	}
	else{
		//document.getElementById('s-t-f').innerHTML = "Switch the fields to \"GM to PEX\"";
		//document.getElementById('w-t-w').innerHTML = "PEX TO GM";
		$("#s-t-f").fadeOut("fast", function(){
  			$("#s-t-f").html("Switch the fields to \"GM to PEX\"").fadeIn("fast");
		});
		$("#desc1").fadeOut("fast", function(){
  			$("#desc1").html("PermissionsEx to GroupManager").fadeIn("fast");
		});
		$("#w-t-w").fadeOut("fast", function(){
  			$("#w-t-w").html("PEX TO GM").fadeIn("fast");
		});
		$("#title-l").fadeOut("fast", function(){
  			$("#title-l").html("Pex to Groupmanager Converter").fadeIn("middle");
		});
		div1.replaceWith(cdiv2);
    	div2.replaceWith(cdiv1);
	}
	return gm2pex;
}
function fconvert(text){
	try {
		document.getElementById('output').value = "Parsing...";
		obj = YAML.parse(text);
		document.getElementById('output').value += "\nOK!";
		if(gm2pex == true){
			document.getElementById('output').value += "\nConverting from GroupManager to Pex...";
			convGmPex(text);
		}
		if (gm2pex == false){
			document.getElementById('output').value += "\nConverting from Pex to Groupmanager...";
			convPexGm(text);
		}
	} 
		catch (e) {
		document.getElementById('output').value += "\nError. The YAML Syntax of the code is invalid!" +
		"\n\nTo fix that, use a tool like:\nhttp://codebeautify.org/yaml-validator";
		modal4.style.display = "block";
	}
}
function convGmPex(inGm){
	return;
}
function convPexGm(inPex){
	return;
}
function selIn(){ document.getElementById('input').select().focus(); }
function selOut(){ document.getElementById('output').select().focus(); }
function clearOut(){ document.getElementById('output').value = ""; }
function clearIn(){ 
	document.getElementById('input').value = "";
	document.getElementById('processed').innerHTML = 0 + " Lines Processed.";
}
function copIn(){
	$("#input").select();
    document.execCommand('copy');
}
function copOut(){
	$("#output").select();
    document.execCommand('copy');
}
