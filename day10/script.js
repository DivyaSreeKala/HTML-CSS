
//Manipulating DOM

//h1 tag(manipulating style)
var head = document.getElementById('heading1');//mapped to a variable
head.style.color='red';
head.style.backgroundColor='yellow';

head.style.border="1px solid pink"

//p tag(injecting a content to html tag)
var para = document.getElementById('para1')
para.innerText = 'This is first class of DOM';

// injecting a code through javascript
para.innerHTML = `<b>I am Bold</b> <button>click</button>`;


//getElementsByClassName

var list = document.getElementsByClassName('list1');
console.log(list);//its in the array '0th'
list[0].style.backgroundColor = 'orange';



//getElementByTagName()

var h2t = document.getElementsByTagName('h2');
//first h2 tag (0th index)
h2t[0].style.color = 'blue';
h2t[0].style.backgroundColor = 'lightgreen';
h2t[0].innerHTML = `<p>From JS</p>`

//second h2 tag (1st index)
h2t[1].style.color = 'green';
h2t[1].style.backgroundColor = 'lightblue';


//querySelector()

var p1 = document.querySelector('#para1')
p1.innerText = 'Hello I am from JS by querySelector';

let inp1 = document.querySelector('input[type="submit"]')//accessing the input type ="button" from html code
console.log(inp1);
inp1.value = 'Send';
inp1.style.color = 'white';
inp1.style.backgroundColor = 'green'
inp1.style.border = 'none';



var listitem = document.querySelector('.item1:nth-child(1)')
listitem.style.color = 'red'

var listitem1 = document.querySelector('.item1:last-child')
listitem1.style.color = 'white'


//visibility

var head4 = document.getElementById('heading4').style.visibility='hidden'
// document.getElementById("heading4").hidden = true;



//manipulating the DOM with events

function show(){
    alert("Button is clicked");
}

function hello(){
    document.getElementById('para1').style.color = 'red'
}

function hii(){
    document.getElementById('para1').style.color = 'black'
}

function keyPress(event){
    console.log(event)
    console.log(event.target.value)
    // alert('A key is pressed');
}



var event1 = document.getElementById('forevent');
event1.addEventListener('keypress',function keyPress(event){
    console.log(event.target.value)
})