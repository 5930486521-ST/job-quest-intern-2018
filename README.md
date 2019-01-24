### TakeMeTour Internship Program 2018

Hi all applicants! Welcome to TakeMeTour Internship Program 2018. Being an intern at TakeMeTour is challenging so we have challenges for you! These challenges are designed to assess your learning skill, which is the fundamental and most important skill of a great software developer. So I do not expect you to have full or any knowledge about the topic beforehand but it's your job to try to learn and answer those challenges.

## Algorithm in Javascript
Code must be written in Javascript language. The code will be tested with Node8, so you can use all Javascript features that are available in Node8.

1. Write a function that shifts the elements of array to left or right by n elements in an infinite loop. the function receives 3 parameters, 1st is an array, 2nd is the direction ('left' or 'right'), 3rd is the number of elements which will be shifted. For example,
```
> shift(['john', 'jane', 'sarah', 'alex'], 'left', 2)
['sarah', 'alex', 'john', 'jane']

> shift([1, 2, 3, 4 ,5], 'right', 3)
[3, 4, 5, 1, 2]
```
Answer:
```
function shift  (array, direction, i){
    const arrayLength = array.length;
    i = i % arrayLength; 
    if (direction === "right") return array.slice(arrayLength-i).concat(array.slice(0,arrayLength-i));
    else if (direction === "left") return array.slice(i).concat(array.slice(0,i));
}
```
2. Download [hero.json](https://github.com/takemetour/job-quest-intern-2018/blob/master/hero.json) and write a code to calculate these values from **hero.json**
- 2.1 Average **networth** of all heroes
- 2.2 Average **level** for hero that has 'intelligent' as **primary_attribute**
- 2.3 Find the hero who got the most **assist**
- 2.4 Find the hero who got the worst **kill/death ratio** (ratio = kill/death)

Answer:
```
const data = require("./hero.json");

// networth Avg
console.log("networth Avg: ", data.reduce( (sum,hero) => sum + hero["networth"] , 0 ) / data.length);

// intelligent level avg
function intelligentLevelAvg(){
    var sum = 0;
    var i = 0
    for (var hero of data){
        if (hero["primary_attribute"] === 'intelligent'){
            sum += hero["level"];
            i++;
        }
    }return sum/i;
}
console.log("intelligent level avg: ", intelligentLevelAvg());

//most assist
console.log("most assist: ", data.reduce((maxHero, hero) => (hero["assist"] > maxHero["assist"])? hero:maxHero , data[0]));

// worst kill/death ratio
console.log("worst kill/death ratio",data.reduce((worstHero,hero) => (hero["kill"]/hero["death"] < worstHero["kill"]/worstHero["death"])? hero:worstHero,data[0]));
```

## Simple Web Application: A joke from Chuck Norris.

This part of the quest will be a challenging one. You are going to make a simple web application which allows users to get some jokes from **Chuck Norris** himself.

> Chuck Norris once ordered a Big Mac at Burger King, and got one.

### Features
- Users can get a joke from [Chuck Norris API](http://www.icndb.com/api/)
- Users have options to change the number of the resulting jokes, user's first name and last name
- UI Design: as you wish.

### Technical description
- Using data from [REST API](http://www.icndb.com/api/)
- Any tools & framework are allowed.
- Using tools & framework which are the same as our tech stack (React, Redux, styled-components, recompose etc.) will be a plus.
- Any extra feature will be a plus.

## Questions
Q1: What is GraphQL and how it is different from REST API?

A1: 
There are 2 parts:
   1. Server: For REST, you define URL and method of the request then specify the response form. While GrapghQL, you have to define schemas of each data set and define what parameter to receive for each request method.
   2. Client: For REST, you have to send the request through URL, and you will get a response in the same form which defined form sever. While GraphQL, you can request data set and response form for data to respond.    

Q2: Please explain how javascript benefits from cross-platform development

A2: 
  Many crossing-platform for javascript, can make javascript more popular, and always improve itself. As a developer, you can develop the whole bunch of code/logic with only using javascript. For example, you can use React.js framework for the front-end logic, and use Node.js framework as the back-end logic.

Q3: What do you expect to get during an internship at TakeMeTour?
 
A3: <insert your answer here>
  1. To improve my technical skills in being a developer from a real-life situation.
  2. To enhance the communication, co-operative or other soft skills to better in collaborating with companions.
  3. To grasp how startup company works, how they improve or motivate themselves. (  I'm really interested in this field and really want to be a part of it :) )
  
## Submitting

Please fork this repo and submit your repository at benz@takemetour.com along with your contact information and also your resume if you have one.

Note: These challenges must be done by yourself. There is no benefit for both sides if the answer do not reflect your true skill.
