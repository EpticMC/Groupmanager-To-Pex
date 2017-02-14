var gm2pex = true;
function fswitch(tmp){
	gm2pex = !gm2pex;
	if (gm2pex == true){
		document.getElementById('s-t-f').innerHTML = "Switch the fields to \"PEX to GM\"";
		document.getElementById('w-t-w').innerHTML = "GM TO PEX";
		$("#title-l").fadeOut("fast", function(){
  			$("#title-l").html("Groupmanager to Pex Converter").fadeIn("middle");
		});
	}
	else{
		document.getElementById('s-t-f').innerHTML = "Switch the fields to \"GM to PEX\"";
		document.getElementById('w-t-w').innerHTML = "PEX TO GM";
		$("#title-l").fadeOut("fast", function(){
  			$("#title-l").html("Pex to Groupmanager Converter").fadeIn("middle");
		});
	}
	return;
}
function fconvert(text){
	console.log(text);
}
