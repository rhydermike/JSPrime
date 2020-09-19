
//prime numbers

const {performance} = require('perf_hooks');
const numberLimit = 100;
var prime = false;

var arrayResults = [];
var startTime = performance.now();
for (let i = 1; i < numberLimit; i++)
{
    prime = true;
    for (let j = 2; j < (i - 1); j++)
    {
        if (i % j == 0)
        {

            prime = false;
            break;
        }
    }
    if (prime == true)
    {
        //console.log ('Number ' + i + ' is a prime');
        arrayResults.push(i);
    }
}

var endTime = performance.now();

console.log('Total time: ' + (endTime - startTime));

printFormattedResults();

function printFormattedResults()
{
    console.log(arrayResults.toString());
}

function printResults(first)
{
    if (first == true)
    {
        console.log(arrayResults [0]);
    }
    else
    {
    for (let i = 0; i < arrayResults.length; i++)
    {
        console.log(arrayResults [i]);
    }
    }
}
