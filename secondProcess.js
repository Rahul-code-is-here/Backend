// function callbak(result){
//   console.log(result);  // ghanu badhu status code sathe
// }

// var sendObj={
//     method: "GET"
// };

// fetch("http://localhost:3001/handleSum?&counter=50",sendObj).then(callbak)

// latest one  <---->

// one nodejs process also send http request that's what we are doing in this
// today we learn fetch we know fs,express
// express cerate http server
// fetch sent http request/ talk to http request
// backend or nodejs server ne be ek bija sathe communicate karvu pade
function logResponseBody(jsonBody) {
  console.log(jsonBody);
}
function callbak(result) {
  // body ne acess karva result.json but it's async func so it returns promise so .then
  // jyare fetch  thai jai pachi call callback
  // result.json(callback)(only body j jove che result ma to ghanu che etle json) extract body and when you done it, it goes to logResponseBody
  result.json().then(logResponseBody);
  // logResponseBody() ma argument ma kai nai nakhvu pade km ke e responsobility  result.json() ni che
  // logResponseBody is argument of result.json() function
  // you just need to give what function should call, argument is responsibility of  result.json()
}

var sendObj = {
  method: "GET",
};

fetch("http://localhost:3001/handleSum?counter=10", sendObj).then(callbak);

// sendObj useCase?: postman ma method aapvi pade, body and header be pass kari shakie e functionality e badhi sendObj ma pass karvi pade
// url,route and queryParaMeter sivai badhu j sendObj ma put kari shakie

// http req long running process
// node: just hit and comeback

// calculate sum name no algo create karyo che ene fetch jaire chie server mathi je express thi banavyu

// why backend system communicate each other
// ex] chatgpt:
// there are some heavy ML model running on some very expensive machines
// do you think http server running on same machine? ans is no
// why? http server expose internet
// you do not want that http server running on your expensive machine

//deep
// 1st : browser
//2nd : http server(small) and it's cost: 5$ per month
//3rd: expensive machine: je heavy ML model run kare che and charge $2000 per month

// browser first 2nd ma http req send karshe and http server check karshe wether you authenticated for gpt 4 or not, 
// jo bathi things ok then it can talk to expensive machine's healy ML. and get back the response