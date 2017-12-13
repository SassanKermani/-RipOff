document.addEventListener('DOMContentLoaded', function() {

	boardSize = 10;				//for the love of god make this nubmer odd
	board = [];
	
	var character = [];
	var numberOfPlayers = 8;

	var bigStartButton = true;						//nothing works if this is false



	function setUp(){
		
		//enforces making the board size odd
		if ( boardSize % 2 == 0 ){
			boardSize = boardSize + 1;
		}

		//set up the board as a 2d array with its lenth
		for(let i = 0; i < boardSize; i++){
			
			board[i] = []		//so board is a 2d array

			for(let ii = 0; ii < boardSize; ii++){
				
				board[i][ii] = "_"			//sets board sopots  to smothing not distarcting

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
					character[i][0] = "0";									//car simbel for user
					character[i][1] = -500;	//*								//car power lv to kill other cars
					character[i][2] = Math.floor(0);	//car position on the x axes
					character[i][3] = Math.floor(0);	//car position on the y axes
					character[i][4] = true;									//car if alive or not 

					console.log("case " + i );
					break;

				//sets up 1
				case 2:
					character[i][0] = "1";									//car simbel for user
					character[i][1] = 1;									//car power lv to kill other cars
					character[i][2] = Math.floor(0);			//car position on the x axes
					character[i][3] = Math.floor(boardSize  -1);		//car position on the y axes
					character[i][4] = true;									//car if alive or not 

					console.log("case " + i );
					break;
				
				//sets up 2
				case 3:
					character[i][0] = "2";									//car simbel for user
					character[i][1] = 2;									//car power lv to kill other cars
					character[i][2] = Math.floor(boardSize - 1);		//car position on the x axes
					character[i][3] = Math.floor(0);			//car position on the y axes
					character[i][4] = true;									//car if alive or not 

					console.log("case " + i );
					break;

				//sets up 3
				case 4:
					character[i][0] = "3";									//car simbel for user
					character[i][1] = 3;									//car power lv to kill other cars
					character[i][2] = Math.floor(boardSize - 1);		//car position on the x axes
					character[i][3] = Math.floor(boardSize - 1);		//car position on the y axes
					character[i][4] = true;									//car if alive or not 

					console.log("case " + i );
					break;

				//sets up 4
				case 5:
					character[i][0] = "4";									//car simbel for user
					character[i][1] = 4;									//car power lv to kill other cars
					character[i][2] = 0;									//car position on the x axes
					character[i][3] = 0;									//car position on the y axes
					character[i][4] = false;									//car if alive or not 

					console.log("case " + i );
					break;

				//sets up 5
				case 6:
					character[i][0] = "5";									//car simbel for user
					character[i][1] = 5;									//car power lv to kill other cars
					character[i][2] = 0;									//car position on the x axes
					character[i][3] = boardSize - 1;							//car position on the y axes
					character[i][4] = false;									//car if alive or not 

					console.log("case " + i );
					break;


				//sets up 6
				case 7:
					character[i][0] = "6";									//car simbel for user
					character[i][1] = 6;									//car power lv to kill other cars
					character[i][2] = 0;									//car position on the x axes
					character[i][3] = Math.floor(boardSize / 2) + 1;		//car position on the y axes
					character[i][4] = false;									//car if alive or not 

					console.log("case " + i );
					break;

				//sets up 7
				case 8:
					character[i][0] = "7";									//car simbel for user
					character[i][1] = 7;									//car power lv to kill other cars
					character[i][2] = boardSize - 1;						//car position on the x axes
					character[i][3] = Math.floor(boardSize / 2) + 1;		//car position on the y axes
					character[i][4] = false;									//car if alive or not 

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


	//handles colition 
	function doCollision(){
		for(let i = 0; i < boardSize; i ++){
			for(let ii = 0 ; ii > boardSize; ii++){
				//this is now going though everyspot 

				let most = -500 								//index of largest thing at spt i = X ii = Y

				for(let iii = 0; iii < numberOfPlayers; iii++){

					if ( character[iii][2] == i  &  character[iii][3] == ii & character[iii][4] == true ){	//gets first carictor in there
						if(most == -500){				//this is so you can get first carictor in there
							most = iii;
						}else{
							if( character[iii][1] > character[most][0] & character[iii][4] == true  ){		//sees if new carictoris biger 
								
								character[most][4] = false;		//kills smaller power lv carictor
								most = iii;						//asines new bigest power lv carictor
								console.log("colition hapend");
							}
						}
					}
				}
			}
		}
	}

	doCollision();

	function drawBoard(){
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

				if(tempVar = false){				//if there is not a carictor
					board[i][ii] = "_";				//sets to defult
				}

			}
		}
	}

	drawBoard();

	//the engine of the dam thing

	

});

















































