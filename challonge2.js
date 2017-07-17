function updateClass(){
	document.getElementById("cont").addEventListener("mousemove",function(){
		var elems = document.getElementsByClassName("item");
		for (i=0;i<elems.length;i++){
			elems[i].classList.add((elems[i].innerHTML).toUpperCase());
		}
	})
}

function highlightAll(){
	var elems  = document.getElementsByClassName("item");

	for (j=0;j<elems.length;j++){
		elems[j].addEventListener("mouseover",function(){
			var c = document.getElementsByClassName((this.innerHTML).toUpperCase());
			for (k=0;k<c.length;k++){
				c[k].classList.add("change");
			}
		})
	}
}

function removeHighlightAll(){
	var elems  = document.getElementsByClassName("item");

	for (j=0;j<elems.length;j++){
		
		elems[j].addEventListener("mouseout",function(){
			var c = document.getElementsByClassName((this.innerHTML).toUpperCase());
			for (k=0;k<c.length;k++){
				c[k].classList.remove("change");
			}
		})
	}
}

function resetBracket(){
	document.getElementById("reset").addEventListener("click",function(){
		location.reload();
	})
}

function getTeamNames(){
	var textVal = "";
	document.getElementById("gen").addEventListener("click",function(){
		textVal = document.getElementById("textArea").value;
		textVal = textVal.split("\n");
		textVal = textVal.filter(function(e){
			return e != "" && e.length <=12 ;});
		

		if (textVal.length < 8){
			alert("Please provide 8 team names.\nMaximum of 8 characters each.");
		}
		else{
			document.getElementById("rand").disabled = false;
			document.getElementById("textArea").value = "";
			var players1 = document.getElementsByClassName("elim");
			var players2 = document.getElementsByClassName("semi");
			var players3 = document.getElementsByClassName("fin");
			for (i=0;i<8;i++){
				players1[i].classList.remove((players1[i].innerHTML).toUpperCase());
				players1[i].innerHTML = textVal[i];
			}
			for (j=0;j<4;j++){
				players2[j].classList.remove((players2[j].innerHTML).toUpperCase());
				players2[j].innerHTML = "waiting"
			}
			for (k=0;k<2;k++){
				players3[k].classList.remove((players3[k].innerHTML).toUpperCase());
				players3[k].innerHTML = "waiting";
			}
		}

	});
}

function updateNames(){
	var elems = document.getElementsByClassName("item");
	for (a=0;a<elems.length;a++){
		elems[a].addEventListener("click",function(){
			var currClass = this.innerHTML;
			var res = prompt("Enter new team/player name:",currClass);

			if (res === null || /^\s/.test(res) || res.length > 12){
				alert("Please provide a team/player name.\nMin: 1 character\nMax: 12 characters");

			}
			else if (res != ""){
				this.classList.remove((currClass).toUpperCase());

				this.innerHTML = res;
				
				var items = document.getElementsByClassName("item");
				for (i=0;i<items.length;i++){
					items[i].classList.remove("change");
				}
			}
		})
	}
}

function randomizeTeams(){
	var elements = document.getElementsByClassName("elim");
	var teams = [];
	for (i=0;i<elements.length;i++){
		teams.push(elements[i].innerHTML);
	}

	var list = [];
	while (list.length != 8){
		var randNum = Math.floor(Math.random()*teams.length);
		var choice = teams[randNum];
		if (!list.includes(choice)){
			list.push(choice);
		}
	}
	return	list;
}

function randomizeBracket(array){
	var x = array;
	var elements = document.getElementsByClassName("elim");
	for (i=0;i<elements.length;i++){
		elements[i].innerHTML = x[i];
	}
}

function randomButton(){
	document.getElementById("rand").addEventListener("click",function(){
		var players1 = document.getElementsByClassName("elim");
		for (i=0;i<8;i++){
			players1[i].classList.remove((players1[i].innerHTML).toUpperCase());
		}
		randomizeBracket(randomizeTeams());
	});
}


updateClass();
highlightAll();
removeHighlightAll();
getTeamNames();
resetBracket();
updateNames();
randomButton();

/*document.getElementById("heyscore").addEventListener("click",function(){
	document.getElementById("hey2").classList.remove("WAITING");
	document.getElementById("hey2").innerHTML = document.getElementById("hey").innerHTML;
})*/







