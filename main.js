function weChat(string){
    let newArray = [];
    let secondArray = []
    let count = 0;
    let y = 0

// i kow that there's a shorter way of converting string to array 
// but this will do for now

    for(x of string){
        newArray.push(x)
    }
    
    
    while(y < newArray.length){
        for(x in newArray){
           if(newArray[y] === newArray[x]){
                count++
           }
        }

        if(count > 1){
            y++;
            count = 0
        }else{
            secondArray.push(newArray[y])
        }
            
    }
    console.log(secondArray)
    console.log(newArray)
}

weChat('axiuhdjnkwjbewopijqywejbfaohwuyedbiaorip')