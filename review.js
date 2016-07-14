console.log('------------ example 1 ------------');

var numArray = [2,4,6,7];

function numberFunction(original, callback)
{
  for (var i = 0; i < original.length; i++)
  {
    console.log(sqaure(original[i]));
  }
}

function sqaure(answerHere)
{
  return answerHere * answerHere;
}

numberFunction(numArray, sqaure);

console.log('------------ example 2 ------------');

var numArray = [2,4,6,7];

function numberFunction(original, callback)
{
  for (var i = 0; i < original.length; i++)
  {
    console.log(callback(original[i]));
  }
}

numberFunction(numArray, function (answerHere)
{
  return answerHere * answerHere;
});


console.log('------------ example 1 ------------');

var countryArray = ['Bahamas', 'Nauru', 'Senegal', 'Morocco'];

function each(countryArray, callback)
{
  for (var i = 0; i < countryArray.length; i++)
  {
    console.log(addStringFunction(countryArray[i])); //passing in one array item at a time to addStringFunction which is concating and returning back to console it in the loop.
  }
}

function addStringFunction(addString)
{
  return addString + ' is a country';
}

each(countryArray, addStringFunction);//passing in an array and a function

console.log('------------ example 2 ------------');

var countryArray = ['Bahamas', 'Nauru', 'Senegal', 'Morocco'];

function each(countryArray, callback)
{
  for (var i = 0; i < countryArray.length; i++)
  {
    console.log(callback(countryArray[i]));
  }
}
each(countryArray, function (addString)
{
  return (addString + ' is a country');
});
