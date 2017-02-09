const http = require('http')
 
const port = 9000

const requestHandler = (request, response) => {  

response.writeHead(200, {"Content-Type": "application/json"});
var hArray=["keeping done", "singing", "dancing"];
var mArray=RandomArray();
hArray=shuffle(hArray);

 var json = JSON.stringify
	({
	   Name: "asit",
	   NumberArray: mArray,
	   HobbyArray: hArray
	 });
 response.end(json);


}



const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
 if (err) {
   return console.log('something bad happened', err)
 }

 console.log(`server is listening on ${port}`)
})


function shuffle(array) {
 var currentIndex = array.length, temporaryValue, randomIndex;

 
 while (0 !== currentIndex) 
{

 
	   randomIndex = Math.floor(Math.random() * currentIndex);
	   currentIndex -= 1;

	   temporaryValue = array[currentIndex];
	   array[currentIndex] = array[randomIndex];
	   array[randomIndex] = temporaryValue;
	 }

	 return array;
}

function RandomArray() {
 	var currentIndex = 0, temporaryValue, randomIndex;
	var array=[];
	var value;
	while (currentIndex<10)
	{

		value=50+Math.ceil(Math.random() * 450);
		array[currentIndex++]=value;
   
 }

 return array;
}
