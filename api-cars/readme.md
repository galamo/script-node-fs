# HW
1. create new router - /users
2. GET users/:email will return the user with the requested email
3. GET  users/:gender will return all the users with the requested gender
4. DELETE users/:email will remove the user from the users array by email 
5. GET users/new/:email/:age/:balance/:company - adding new user to the array ( we will change it to POST)


```js
[
  {
    "balance": "$3,946.45",
    "picture": "http://placehold.it/32x32",
    "age": 23,
    "name": "Bird Ramsey",
    "gender": "male",
    "company": "NIMON",
    "email": "birdramsey@nimon.com"
  },
  {
    "balance": "$2,499.49",
    "picture": "http://placehold.it/32x32",
    "age": 31,
    "name": "Lillian Burgess",
    "gender": "female",
    "company": "LUXURIA",
    "email": "lillianburgess@luxuria.com"
  },
  {
    "balance": "$2,820.18",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "name": "Kristie Cole",
    "gender": "female",
    "company": "QUADEEBO",
    "email": "kristiecole@quadeebo.com"
  },
  {
    "balance": "$3,277.32",
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "name": "Leonor Cross",
    "gender": "female",
    "company": "GRONK",
    "email": "leonorcross@gronk.com"
  },
  {
    "balance": "$1,972.47",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "name": "Marsh Mccall",
    "gender": "male",
    "company": "ULTRIMAX",
    "email": "marshmccall@ultrimax.com"
  }
]

```