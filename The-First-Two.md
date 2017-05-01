# This is The First One.
## Introduction
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
[The address](http://www.codewars.com/kata/stop-gninnips-my-sdrow/train/javascript)
## Examples:
> * spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
> * spinWords( "This is a test") => returns "This is a test" 
> * spinWords( "This is another test" )=> returns "This is rehtona test"


## Method
This question is easy,so there are not some advanced methods;
### Here is my codes:
```javascript
function spinWords(item){
  var item = item.split(" ");
  for(var i = 0 , part;part = item[i]; i++){
      if(part.length >= 5){
        item[i] = part.split("").reverse().join("");
      }
   }
   return item.join(" ");
}
console.log(spinWords("Hey fellow warriors"));//Test
```

# There is The Second One!
## Introduction
[The address](http://www.codewars.com/kata/stop-gninnips-my-sdrow/train/javascript)

The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

## Input

Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

## Example Input

[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
## Output

Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

## Example Output

["Open", "Open", "Senior", "Open", "Open", "Senior"]

## Method
This question is easy,so there are not some advanced methods;
### Here is my codes:
```javascript
function openOrSenior(data){
  var a = [] 
  for(var i = 0;i < data.length;i++){
      var item;
      item = data[i];
      if(data[i][0] >= 55 && data[i][1] > 7 && data[i][1] < 26){
          a.push("Senior");
      }else{
          a.push("Open");
      }         
  }     
    return a;  
}
console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));
```
