# Given a Tic Tac Toe Board
# create a function which find the winner
# input: string
# output: winner of 'X' or 'O', or 'Tie' if no winner

# Finding winner of Tic Tac Toe Game
#1) Winning by rows
#  ['x'
#   'x'
#   'x']

#2) winning by colums
#3) winning by cross


# Brute Force
# - enumerating find all possible matches
# for

arr = []

# taking input 3 X3 matrix
# for i in range(3):
#     arr.append(list(input().split()))

# if ((arr[0][0] == arr[0][1] and arr[0][1] == arr[0][2] and arr[0][0] == 'X') or
#     (arr[1][0] == arr[1][1] and arr[1][1] == arr[1][2] and arr[1][0] == 'X') or
#     (arr[2][0] == arr[2][1] and arr[2][1] == arr[2][2] and arr[2][0] == 'X') or
#     (arr[0][0] == arr[1][0] and arr[1][0] == arr[2][0] and arr[0][0] == 'X') or
#     (arr[0][1] == arr[1][1] and arr[1][1] == arr[2][1] and arr[0][1] == 'X') or
#     (arr[0][2] == arr[1][2] and arr[1][2] == arr[2][2] and arr[0][2] == 'X') or
#     (arr[0][0] == arr[1][1] and arr[1][1] == arr[2][2] and arr[0][0] == 'X') or
#         (arr[0][2] == arr[1][1] and arr[1][1] == arr[2][0] and arr[0][2] == 'X')):
#     print("Player 1")  # player 1 win
# elif((arr[0][0] == arr[0][1] and arr[0][1] == arr[0][2] and arr[0][0] == 'O') or
#      (arr[1][0] == arr[1][1] and arr[1][1] == arr[1][2] and arr[1][0] == 'O') or
#      (arr[2][0] == arr[2][1] and arr[2][1] == arr[2][2] and arr[2][0] == 'O') or
#      (arr[0][0] == arr[1][0] and arr[1][0] == arr[2][0] and arr[0][0] == 'O') or
#      (arr[0][1] == arr[1][1] and arr[1][1] == arr[2][1] and arr[0][1] == 'O') or
#      (arr[0][2] == arr[1][2] and arr[1][2] == arr[2][2] and arr[0][2] == 'O') or
#      (arr[0][0] == arr[1][1] and arr[1][1] == arr[2][2] and arr[0][0] == 'O') or
#      (arr[0][2] == arr[1][1] and arr[1][1] == arr[2][0] and arr[0][2] == 'O')):
#     print("Player 2")  # player 2 win
# else:
#     print("Draw")  # Match is drawn no body win
