rowls=[]
columnls=[]
pos=[
[" "," "," "],
[" "," "," "],
[" "," "," "],

]
def display_board():
    print ("*** **** *** * *** ***\n\
		    *    {}| {}  | {}    *\n\
		    *   ---| --- | ---   *\n\
		    *    {}| {}  | {}    *\n\
		    *   ---| --- | ---   *\n\
		    *    {}| {}  | {}    *\n\
            *** **** *** * *** ***",format(pos[0][0],pos[0][1],pos[0][2],pos[1][0],pos[1][1],pos[1][2],pos[2][0],pos[2][1],pos[2][2]));
def player_input(plyr):
	
	print("Player {}'s' turn ...",format(plyr));
	row=input("Enter row :");
	column=input("Enter column :");
	while(row in rowls or column in columnls or row>3 or column>3 ) :
	 print("This position has been choosen or position conflict! choose another position",format(plyr));
	 row=input("Enter row :");
	 column=input("Enter column :");
	rowls.append(row);
	columnls.append(column);
	pos[row][column]=plyr;

def check_win(p):
 winner=False;
 ligne=[]
 for i in range(3):
   li=[]
   col=[]
   dia1=[]
   dia2=[]

   for j in range(3):
  	  li.append(pos[i][j]);

  	  col.append(pos[j][i])

  	  dia1.append(pos[i][i])

  	  dia2.append(pos[i][3-i])
   lis="".join(li);
   cols="".join(col);
   dia1s="".join(dia1);
   dia2s="".join(dia2);

   if lis==(p*3) or cols==(p*3) or dia1s==(p*3) or dia2s==(p*3) :
  	 winner=True
  	 print(p,"WINS")
  	 return True;
  	 break;
   else:
   	 winner=False;
 return winner




def play():
 plyr1=input("What's your mark player1");
 plyr2=input("What's your mark player2");
 display_board()
 for i in range(9):
  if i%2==0:
   player_input(plyr1)
   display_board()
   check_win(plyr1)

  else:
   player_input(plyr2)
   display_board()
   check_win(plyr2)
  if i==8:
   if check_win(plyr1)==False and check_win(plyr1)==False:
    print ("The game end in a Tie")

 

play()
   


  