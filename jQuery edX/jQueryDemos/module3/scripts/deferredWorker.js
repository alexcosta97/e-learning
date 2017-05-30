//Sample worker script

//Send ready message (again - sample implementation)
self.postMessage('READY');

//sleep for two seconds
//Simulate long running operation
sleep(2000);

//Send completed message
self.postMessage('COMPLETED');

function sleep(miliseconds){
    var startingTime = new Date().getTime();
    var stopTime = startingTime + miliseconds;

    while(stopTime >= new Date().getTime()){}
}