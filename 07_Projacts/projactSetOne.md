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