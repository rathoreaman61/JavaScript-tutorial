# Projects related to DOM
## project link
[Click here] (https://stackblitz.
com/edit/dom-project-chaiaurcode?
file=index.html)
# Solution code
## project 1
I]

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>JavaScript Background Color Switcher</title>

    <style>html {
      margin: 0;
    }
    
    span {
      display: block;
    }
    .canvas {
      margin: 100px auto 100px;
      width: 80%;
      text-align: center;
    }
    
    .button {
      width: 100px;
      height: 100px;
      border: solid black 2px;
      display: inline-block;
    }
    
    #grey {
      background: grey;
    }
    
    #white {
      background: white;
    }
    #blue {
      background: blue;
    }
    #yellow {
      background: yellow;
    }
    </style>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="canvas">
      <!-- <a
        style="
          background-color: #fff;
          padding: 10px 30px;
          border-radius: 8px;
          color: #212121;
          text-decoration: none;
          border: 2px solid #212121;
        "
        href="../index.html"
        >Back to Home Page</a
      > -->
      <h1>Color Scheme Switcher</h1>
      <span class="button" id="grey"></span>
      <span class="button" id="white"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <h2>
        Try clicking on one of the colors above
        <span>to change the background color of this page!</span>
      </h2>
    </div>
    <script >
const body = document.querySelector('body');
const button = document.querySelectorAll('.button');

button.forEach(function (button) {
  button.addEventListener('click', (events) => {
    if (events.target.id === 'grey') {
      body.style.backgroundColor = 'grey';
    }
    if (events.target.id === 'blue') {
      body.style.backgroundColor = 'blue';
    }
    if (events.target.id === 'white') {
      body.style.backgroundColor = 'white';
    }
    if (events.target.id === 'yellow') {
      body.style.backgroundColor = 'yellow';
    }


  });

  
});




body.addEventListener('dblclick', (event) => {   
   body.style.backgroundColor = 'white';
   body.style.color = 'black';
 });


    </script>
  </body>
</html>

```




```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>BMI Calculator</title>

    <style>.container {
    width: 575px;
    height: 825px;
  
    background-color: #797978;
    padding-left: 30px;
  }
  #height,
  #weight {
    width: 150px;
    height: 25px;
    margin-top: 30px;
  }
  
  #weight-guide {
    margin-left: 75px;
    margin-top: 25px;
  }
  
  #results {
    font-size: 35px;
    margin-left: 90px;
    margin-top: 20px;
    color: rgb(241, 241, 241);
  }
  
  button {
    width: 150px;
    height: 35px;
    margin-left: 90px;
    margin-top: 25px;
    background-color: #fff;
    padding: 1px 30px;
    border-radius: 8px;
    color: #212121;
    text-decoration: none;
    border: 2px solid #212121;
  
    font-size: 25px;
  }
  
  h1 {
    padding-left: 15px;
    padding-top: 25px;
    
  }
  </style>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="container">
      <h1>BMI Calculator</h1>
      <form>
        <p><label>Height in CM: </label><input type="text" id="height" /></p>
        <p><label>Weight in KG: </label><input type="text" id="weight" /></p>
        <button>Calculate</button>
        <div id="results"></div>
        <div id="weight-guide">
          <h3>BMI Weight Guide</h3>
          <p>Under Weight = Less than 18.6</p>
          <p>Normal Range = 18.6 and 24.9</p>
          <p>Overweight = Greater than 24.9</p>
        </div>
      </form>
    </div>
  </body>
  <script>const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
  
    const weight = parseInt(document.querySelector('#weight').value);
  
    const result = document.querySelector('#results');
  
    if (height == '' || height < 0 || isNaN(height)) {
      result.innerHTML = `ai bhadawai kya dala hai</br> idhar ko akal hai => '${height}'`;
    } else if (weight == '' || weight < 0 || isNaN(weight)) {
      result.innerHTML = `kyu maaa chuda </br>rha hai lodu => '${weight}'`;
    } else {
    const bmi = (weight / ((height/100) * (height/100)).toFixed(2));
     result.innerHTML = `</br>Are wha bhai</br> akal toh
     </br> hai kuch </br>toh bat hai => ${bmi.toFixed(2)}`
  
     if(bmi < 18.6 ){
      result.innerHTML = `</br>bhadwai kuch </br> kuch sharam hai </br>  kahya kar lodu => ${bmi}`
     }else if(18.6 <= bmi && 29.9 >= bmi){
      result.innerHTML = `</br>what rai chiknai </br> => ${bmi.toFixed(2)}`
     }else if(29.9 < bmi){
      result.innerHTML = `</br>dharti kai bhoj salai</br> => ${bmi.toFixed(2)}`
     }
  
  
  
    }
  });
  </script>
</html>

```

projact3
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" type="text/css" href="../styles.css" />
    <title>Your Local Time</title>
    <style>
      body {
        background-color: #212121;
        color: #fff;
      }
      .center {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      #clock {
        font-size: 40px;
        background-color: orange;
        padding: 20px 50px;
        margin-top: 10px;
        border-radius: 10px;
      }
    </style>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="center">
      <div id="banner"><span>Your local time</span></div>
      <div id="clock"></div>
    </div>
    <script >
    let clock = document.getElementById('clock');
setInterval(()=>{
  let time = new Date();
  let formatedTime = time.toLocaleTimeString('en-IN',{
    hour12:true,
  })
  clock.innerText = formatedTime;
},1000)</script>
  </body>
</html>

```

```html
const randomNumber = parseInt(Math.random ()* 100 + 1 );

const userInput = document.querySelector('#guessField');

const submit = document.querySelector('#subt');

const guessSlot = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');

const loworHi = document.querySelector('.lowOrHi');

const startover = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []

let theNumberOfGuss = 1;

let playgame = true;

if(playgame){
submit.addEventListener('clcik',(e)=>{
e.preventDefault()
const guess = parseInt(userInput.value);
validguess(guess)
})
}


function validguess(){
  if(userInput < 0 || isNaN(userInput) ||  userInput < 100){
    alert('PLease enter a valid number')
  }else{
    prevGuess.push(guess)
  }
}
  function checkGuess (guess){
  
  }
  function displayMessage(guess){

  }

  function endGame(){
  }

  function newGame() {
  } //
  
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            background-color: rgb(39, 36, 36);
            color: aliceblue;
            margin: 0;
            padding: 0;
        }

        .container {
            display: flex;
            justify-content: center;

        }

        .box {
            background-color: aqua;
            height: 500px;
            width: 500px;
            align-self: center;
            display: flex;
        }

        h1 {
            text-align: center;
            padding-top: 100px;
            padding-bottom: 20px;

        }
      .box p { 
        align-self: center;
        margin: auto;
        background-color: transparent;
        color: black;

      }
    </style>
</head>

<body>
    <h1>Color Changing button</h1>
    <div class="container">
        <div class="box">
            <p style="border-color: black;">Click Me</p>
        </div>
    </div>



</body>
<script>
   const colorsChangingbox = document.querySelector('.box');
   const h1 = document.querySelector('h1');
   const p = document.querySelector('p');
   colorsChangingbox.addEventListener('click',function () {
    const colorProvierVariable = getColor();
    h1.innerText = colorProvierVariable;
    colorsChangingbox.style.backgroundColor = colorProvierVariable;
    p.remove();
   })


     function getColor() {
        const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    let rgb = `rgb(${red},${green},${blue})`
    return rgb;
     }


</script>

</html>
```