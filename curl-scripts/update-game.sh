curl "https://tic-tac-toe-api-development.herokuapp.com/games/:id" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \


echo
