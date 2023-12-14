const {readFile,writeFile} = require('fs')

console.log('start')

readFile('./content/first.txt','utf8',(err,result) =>{
    if(err){
        console.log(err,"occured")
        return;
    }


    // We can similarly add an flag 'a' here to make it appending the data
    writeFile('./content/result-async.txt',`Here is the result : ${result}`,(err,result) => {
        if(err){
            console.log(result);
            return;
        }

        console.log("Write Success")
    })

    // console.log(result)
    console.log("Doing the task")
})

console.log("Finishing the task")

// Here the last line is printed first before doing the task because it is inside the callback function and we offload that task and continue with the rest of the programs