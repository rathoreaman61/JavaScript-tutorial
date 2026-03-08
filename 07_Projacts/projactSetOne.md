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

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Counter UI</title>

    <style>
        /* -------- Default Reset -------- */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, Helvetica, sans-serif;
        }

        /* -------- Background Design -------- */
        body {

            /* dark gradient background */
            background: linear-gradient(135deg, #0f172a, #1e293b, #020617);

            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;

            color: white;
        }

        /* -------- Main Container -------- */
        .container {

            /* glassmorphism style */
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(12px);

            height: 380px;
            width: 650px;

            border-radius: 18px;

            /* depth shadow */
            box-shadow:
                0 25px 50px rgba(0, 0, 0, 0.5);

            padding: 25px;

            display: flex;
            justify-content: space-between;
            align-items: center;

            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* -------- Arrow Buttons -------- */
        .left-arrow,
        .right-arrow {

            height: 70px;
            width: 70px;

            border-radius: 50%;

            background: linear-gradient(145deg, #1e293b, #020617);

            display: flex;
            justify-content: center;
            align-items: center;

            font-size: 32px;

            cursor: pointer;

            transition: 0.3s;
        }

        /* hover animation */
        .left-arrow:hover,
        .right-arrow:hover {

            transform: scale(1.1);

            background: linear-gradient(145deg, #2563eb, #1d4ed8);

        }

        /* -------- Middle Section -------- */
        .middle {

            height: 100%;

            display: flex;
            flex-direction: column;

            justify-content: space-between;
            align-items: center;

        }

        /* -------- Counter Box -------- */
        .value {

            height: 220px;
            width: 360px;

            border-radius: 16px;

            background: linear-gradient(145deg,
                    #111827,
                    #1f2937);

            display: flex;
            justify-content: center;
            align-items: center;

            box-shadow:
                inset 0 0 25px rgba(0, 0, 0, 0.6),
                0 10px 25px rgba(0, 0, 0, 0.4);
        }

        /* number style */
        .value span {

            font-size: 90px;
            font-weight: bold;

            color: #38bdf8;

            text-shadow: 0 0 20px rgba(56, 189, 248, 0.7);

        }

        /* -------- Reset Button -------- */
        .reset {

            height: 45px;
            width: 360px;

            border-radius: 10px;

            background: linear-gradient(135deg,
                    #ec4899,
                    #be185d);

            display: flex;
            justify-content: center;
            align-items: center;

            font-weight: bold;

            cursor: pointer;

            transition: 0.3s;

        }

        /* hover effect */
        .reset:hover {

            transform: scale(1.05);

            box-shadow: 0 10px 25px rgba(236, 72, 153, 0.5);

        }
    </style>
</head>

<body>

    <div class="container">

        <div class="left-arrow">&#8592;</div>

        <div class="middle">

            <div class="value">
                <span>0</span>
            </div>

            <div class="reset">
                Reset
            </div>

        </div>

        <div class="right-arrow">&#8594;</div>

    </div>

</body>
<script>
    let number = 0;
    const value = document.querySelector('span');
    const left = document.querySelector('.left-arrow');
    const right = document.querySelector('.right-arrow');
    const reset = document.querySelector('.reset');




    left.addEventListener('click', function () {
        --number
        value.innerText = number


        updateColor()
    }
    )

    right.addEventListener('click', function () {
        ++number
        value.innerText = number;


        updateColor()

    }
    )


    reset.addEventListener('click', function () {
       number = 0;
        value.innerText = 0;
        updateColor()
    })

    function updateColor() {
        if (number < 0) value.style.color = 'red';
        else if (number > 0) value.style.color = 'blue';
        else value.style.color = '#38bdf8';
    }

</script>

</html> 
```


```html 

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            height: 100vh;
            width: 100vw;
            justify-content: center;
            align-items: center;
            background-color: gray;
        }

        .container {
            border: none;
            border-radius: 15px;
            background-color: rgb(156, 222, 252);
            height: 50vh;
            width: 25vw;
            box-shadow: 4px 5px 6px;
        }

        .header {
            text-align: center;
            padding: 10px;
            font-size: 1.7em;
            font-weight: 900;
            border-bottom: 0.5px solid white;
            margin-bottom: 20px;
        }


        .addTask {
            display: flex;
            justify-content: space-evenly;
        }

        input {
            padding: 7px;
            border-radius: 5px;
        }

        .containInputandBtn {

            display: flex;
            justify-content: center;
        }

        input {
            padding: 7px;
            border-radius: 5px;
        }

        button {
            background-color: rgb(244, 242, 153);
            color: rgb(11, 11, 11);
            padding: 4px;
            border-radius: 5px;
            ;
        }


        ul {
            padding: 10px;
        }

        li {
            display: flex;
            justify-content: space-between;
            border: 1px solid white;
            border-radius: 10px;
            margin-bottom: 7px;
            padding: 8px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            To-Do List
        </div>
        <div class="addTask">
            <div class="containInputandBtn">
                <input type="text" placeholder="Add Your Tasks" id="inputtask">
                <button class="btn">Add</button>
            </div>

        </div>
        <ul class="task-list" id="tasklist">

        </ul>
    </div>

</body>
<script>


    function addTask() {
const input = document.querySelector('#inputtask');
         if (input.value.trim().length === 0) {
        alert('kuch likh naa chomu pagal hai kya');
        return; 
    }

        const liTaskaddingNew = document.createElement('li');
        const tasklist = document.querySelector('.task-list');
        tasklist.style.listStyle = 'none'
        tasklist.append(liTaskaddingNew);
        liTaskaddingNew.innerText = document.querySelector('#inputtask').value;
        document.querySelector('#inputtask').value = " ";
        deleteli(liTaskaddingNew)
    }

    function deleteli(liTaskaddingNew) {
        let btn = document.createElement('buttom');
        btn.innerText = 'Delete'
        btn.style.backgroundColor = 'red';
        btn.style.color = 'white';
        btn.style.border = 'none';
        btn.style.padding = '4px 8px';
        btn.style.marginLeft = '10px';
        btn.style.borderRadius = '4px';
        btn.style.cursor = 'pointer';
        liTaskaddingNew.append(btn)
        btn.addEventListener('click', () => {
            liTaskaddingNew.remove()
        })

    }

    document.querySelector('.btn').addEventListener('click', addTask);



</script>

</html>
```

