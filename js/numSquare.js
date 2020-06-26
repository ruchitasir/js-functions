
const numSquare = (max)=>{

    let results =[];
    for(let i=1; i<=max ; i++)
    {
        results.push(Math.pow(i,2));
    }

    return results;
} 

let sqaures = numSquare(5);

console.log(sqaures);
