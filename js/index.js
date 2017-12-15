document.addEventListener('DOMContentLoaded', function() {

	boardSize = 30;				//for the love of god make this nubmer odd
	board = [];
	
	var character = [];
	var numberOfPlayers = 10;

	var bigStartButton = true;						//nothing works if this is false
	//var TheNumberofTotalTurnsYouGet = 200;		killed this feture may add it back later

	var level = 1;								//number of times player has beat the bard 
	var score = 0;

	var vewPortForTheUserOfTheBoard = document.getElementById("mainBoard");

	function setUp(){
		
		//enforces making the board size odd
		if ( boardSize % 2 == 0 ){
			boardSize = boardSize + 1;
			console.log( "boardSize " + boardSize);
		}

		//set up the board as a 2d array with its lenth
		for(let i = 0; i < boardSize; i++){
			
			board[i] = []		//so board is a 2d array

			for(let ii = 0; ii < boardSize; ii++){
				
				board[i][ii] = "__"			//sets board sopots  to smothing not distarcting

			}
		}

		//set up player array wit there X Y and power levals
		for(let i = 0; i < numberOfPlayers; i++){
			character[i] = [];
			switch( i  ){
				
				case 0:
					character[i][0] = "@";								//car simbel for user
					character[i][1] = 0									//car power lv to kill other cars
					character[i][2] = Math.floor(boardSize / 2);	//car position on the x axes
					character[i][3] = Math.floor(boardSize / 2);	//car position on the y axes
					character[i][4] = true;								//car if alive or not 

					console.log("case " + i );
					break;

				//sets up 1
				case 1:
					character[i][0] = ".0.";									//car simbel for user
					character[i][1] = -1;	//*								//car power lv to kill other cars
					character[i][2] = Math.floor(0);	//car position on the x axes
					character[i][3] = Math.floor(0);	//car position on the y axes
					character[i][4] = true;									//car if alive or not 

					console.log("case " + i );
					break;

				//sets up 1
				case 2:
					character[i][0] = ".1.";									//car simbel for user
					character[i][1] = 1;									//car power lv to kill other cars
					character[i][2] = Math.floor(0);			//car position on the x axes
					character[i][3] = Math.floor(boardSize  -1);		//car position on the y axes
					character[i][4] = true;									//car if alive or not 

					console.log("case " + i );
					break;
				
				//sets up 2
				case 3:
					character[i][0] = ".2.";									//car simbel for user
					character[i][1] = 2;									//car power lv to kill other cars
					character[i][2] = Math.floor(boardSize - 1);		//car position on the x axes
					character[i][3] = Math.floor(0);			//car position on the y axes
					character[i][4] = true;									//car if alive or not 

					console.log("case " + i );
					break;

				//sets up 3
				case 4:
					character[i][0] = ".3.";									//car simbel for user
					character[i][1] = 3;									//car power lv to kill other cars
					character[i][2] = Math.floor(boardSize - 1);		//car position on the x axes
					character[i][3] = Math.floor(boardSize - 1);		//car position on the y axes
					character[i][4] = true;									//car if alive or not 

					console.log("case " + i );
					break;

				//sets up 4
				case 5:
					character[i][0] = ".4.";									//car simbel for user
					character[i][1] = 4;									//car power lv to kill other cars
					character[i][2] = Math.floor(boardSize / 2);			//car position on the x axes
					character[i][3] = 0;									//car position on the y axes
					character[i][4] = true;									//car if alive or not 

					console.log("case " + i );
					break;

				//sets up 5
				case 6:
					character[i][0] = ".5.";									//car simbel for user
					character[i][1] = 5;									//car power lv to kill other cars
					character[i][2] = 0;									//car position on the x axes
					character[i][3] = Math.floor(boardSize / 2);							//car position on the y axes
					character[i][4] = true;									//car if alive or not 

					console.log("case " + i );
					break;


				//sets up 6
				case 7:
					character[i][0] = ".6.";									//car simbel for user
					character[i][1] = 6;									//car power lv to kill other cars
					character[i][2] = Math.floor(boardSize / 2);									//car position on the x axes
					character[i][3] = Math.floor(boardSize - 1);		//car position on the y axes
					character[i][4] = true;									//car if alive or not 

					console.log("case " + i );
					break;

				//sets up 7
				case 8:
					character[i][0] = ".7.";									//car simbel for user
					character[i][1] = 7;									//car power lv to kill other cars
					character[i][2] = Math.floor(boardSize - 1);;						//car position on the x axes
					character[i][3] = Math.floor(boardSize / 2);						//car position on the y axes
					character[i][4] = true;									//car if alive or not 

					console.log("case " + i );
					break;

				//sets up 8
				case 9:
					character[i][0] = "8";									//car simbel for user
					character[i][1] = 8;									//car power lv to kill other cars
					character[i][2] = 0;									//car position on the x axes
					character[i][3] = Math.floor(boardSize / 2) + 1;		//car position on the y axes
					character[i][4] = false;									//car if alive or not 

					console.log("case " + i );
					break;

				//sets up 9
				case 10:
					character[i][0] = "9";									//car simbel for user
					character[i][1] = 9;									//car power lv to kill other cars
					character[i][2] = boardSize - 1;						//car position on the x axes
					character[i][3] = boardSize - 1;						//car position on the y axes
					character[i][4] = false;									//car if alive or not 

					console.log("case " + i );
					break;

				default:
					console.log("this is the default " + i);
					alert("it broke what did you do");
			}
		}
		console.log( "board ");
		console.log( board);
		console.log("character")
		console.log(character)
	}

	setUp();		//calls the funcion for seting up the game


	//handles colition  ORIGINAL
	// function doCollision(){
	// 	for(let i = 0; i < boardSize; i ++){
	// 		for(let ii = 0; ii < boardSize; ii++){
	// 			//this is now going though everyspot 

	// 			let most = -500 								//index of largest thing at spt i = X ii = Y

	// 			for(let iii = 0; iii < numberOfPlayers; iii++){

	// 				if ( character[iii][2] == i  &  character[iii][3] == ii & character[iii][4] == true ){	//gets first carictor in there
	// 					if(most == -500){				//this is so you can get first carictor in there
	// 						most = iii;
	// 					}else{
	// 						if( character[iii][1] > character[most][1] & character[iii][4] == true  ){		//sees if new carictoris biger 
								
	// 							character[most][4] = false;		//kills smaller power lv carictor
	// 							most = iii;						//asines new bigest power lv carictor
	// 							console.log("teast result One");

	// 						}else{
	// 							character[iii][4] = false;
	// 							console.log("teast result two");

	// 							if(character[most][0] == "@"){
	// 								character[most][1] = character[most][1] + 1;
	// 							}

	// 						}
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}


	//handles colition COPY THIS IS A COPY IT IT FOR TEASTING PURPESES ONLY 
	function doCollision(){
		for(let i = 0; i < boardSize; i ++){
			for(let ii = 0; ii < boardSize; ii++){
				//this is now going though everyspot 

				let most = -500 								//index of largest thing at spt i = X ii = Y

				for(let iii = 1; iii < numberOfPlayers; iii++){
					
					if(character[0][2] == character[iii][2] & character[0][3] == character[iii][3] & character[iii][4] == true ){
						if(character[0][1] >= character[iii][1] ){

							character[iii][4] = false;
							character[0][1] = character[0][1] + 1;
							score = score + 1;  

						}else{
							character[0][4] = false;
						}
					}

				}
			}
		}

		//levles up player charictor 
		for(let i = 0; i < numberOfPlayers; i++){

		}
	}

	doCollision();

	function drawBoard(){
		vewPortForTheUserOfTheBoard.innerHTML = "";
		for(let i = 0; i < boardSize; i++){					
			for(let ii = 0; ii < boardSize; ii ++){
				//gose though all spots on board

				let tempVar = false;

				for(let iii = 0; iii < numberOfPlayers; iii++){
					//goset though all carictors
					//console.log(iii)
					if(character[iii][2] ==	 i & character[iii][3] == ii & character[iii][4] == true){			//if carictor
						board[i][ii] = character[iii][0];				// sets carictor on board
						tempVar = true;									//so its not overwriten by defult
					}
				}

				if(tempVar == false){				//if there is not a carictor
					board[i][ii] = "__";				//sets to defult
				}

				//adds stuff to the vewPortForTheUserOfTheBoard 
				vewPortForTheUserOfTheBoard.innerHTML = vewPortForTheUserOfTheBoard.innerHTML + board[i][ii];

			}
			vewPortForTheUserOfTheBoard.innerHTML = vewPortForTheUserOfTheBoard.innerHTML + " <br> ";
		}
		vewPortForTheUserOfTheBoard.innerHTML = vewPortForTheUserOfTheBoard.innerHTML + " <br> ";
		vewPortForTheUserOfTheBoard.innerHTML = vewPortForTheUserOfTheBoard.innerHTML + " <br> ";
		vewPortForTheUserOfTheBoard.innerHTML = vewPortForTheUserOfTheBoard.innerHTML + " <br> ";
		
		// //winning logic puting it hear because you update the bord for everthing anyway this just makes it convenyent
		
		// let titleOfThePage = document.getElementById("title");

		// let isThePlayerDead = false;			//is the player dead 
		// let isEveryThingEalsDead = true;		// is Every Thing Eals Dead


		// if( character[0][4] == false ){
		// 	isThePlayerDead = true 				//cheacks if player is dead
		// }

		// for(let i = 1; i < numberOfPlayers; i++){
		// 	if( character[i][4]   ==  true ){
		// 		isEveryThingEalsDead = false;			// if one is alive there not all dead
		// 		//console.log("ran winning logic")
		// 	}
		// }

		// if(isThePlayerDead == true){

		// 	vewPortForTheUserOfTheBoard.innerHTML = "YOU LOST!";
		
		// }

		// if(isEveryThingEalsDead == true){
		// 	vewPortForTheUserOfTheBoard.innerHTML = "YOU WIN!";
		// }

		winningLogic();

	}

	drawBoard();


	function winningLogic(){
		//winning logic puting it hear because you update the bord for everthing anyway this just makes it convenyent
		
		let titleOfThePage = document.getElementById("title");

		let isThePlayerDead = false;			//is the player dead 
		let isEveryThingEalsDead = true;		// is Every Thing Eals Dead


		if( character[0][4] == false ){
			isThePlayerDead = true 				//cheacks if player is dead
		}

		for(let i = 1; i < numberOfPlayers; i++){
			if( character[i][4]   ==  true ){
				isEveryThingEalsDead = false;			// if one is alive there not all dead
				//console.log("ran winning logic")
			}
		}

		if(isThePlayerDead == true){

			vewPortForTheUserOfTheBoard.innerHTML = "YOU LOST! <br> <br> you where at level " + level +  "<br> <br> Your socre was "+ score;
		
		}

		if(isEveryThingEalsDead == true){
			//vewPortForTheUserOfTheBoard.innerHTML = "YOU WIN!";
			setUp();
			drawBoard();
			level = level + 1;
		}

	}



	//killed this feture it was taking to long i got a time table to keep might come back later for it
	// document.getElementById("Start").addEventListener("click", theRubeGoldbergMachine);

	// function theRubeGoldbergMachine(){

	// 	for(let i = 0; i < TheNumberofTotalTurnsYouGet; i++){
	// 		setTimeout( moveThings, 3000);
	// 	}

	// }
	
	// function moveThings(){
	// 	window.addEventListener('keypress', function (e){
	// 		console.log("e keycode = " + e.keycode );



	// 	})
	// }


	//the engine of the dam thing
	document.getElementById("Start").addEventListener("click", theRubeGoldbergMachine);

	function theRubeGoldbergMachine(){
		window.addEventListener('keypress', function (e){

			console.log( "e = " + e.keyCode );

			//gose up use w to do it
			if(e.keyCode == 119 & character[0][2] != 0){
				character[0][2] = character[0][2] + -1;
				console.log(board);

				doCollision();
				drawBoard();
				console.log(board);
			}

			//gose down use s to do it
			if(e.keyCode == 115 & character[0][2]  < boardSize - 1){
				character[0][2] = character[0][2] + 1;

				doCollision();
				drawBoard();
				console.log(board);
			}

			//gose left use a to do it
			if(e.keyCode == 97 & character[0][3] != 0){
				character[0][3] = character[0][3] + -1;
				console.log(board);

				doCollision();
				drawBoard();
				console.log(board);
			}

			//gose right use d to do it
			if(e.keyCode == 100 & character[0][3]  < boardSize - 1){
				character[0][3] = character[0][3] + 1;

				doCollision();
				drawBoard();
				console.log(board);
			}

			aiOfTheNonPlayerPices();
		});

		
	}	

	function aiOfTheNonPlayerPices(){
		
		for( let i = 1; i < numberOfPlayers; i++ ){
			if( character[0][1] < character[i][1] ){

				if( Math.floor((Math.random() * 2) + 1) == 1 ){

					if( character[0][2] > character[i][2] ){
						character[i][2] = character[i][2] + 1;
					}
					if( character[0][2] < character[i][2] ){
						character[i][2] = character[i][2] - 1;
					}

				}else{

					if( character[0][3] > character[i][3] ){
						character[i][3] = character[i][3] + 1;
					}
					if( character[0][3] < character[i][3] ){
						character[i][3] = character[i][3] - 1;
					}

				}

			}
		}
	};


});