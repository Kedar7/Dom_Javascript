// JAVASCRIPT - DOM METHODS (ACTIONS)
//FINDING HTML ELEMENTS :

//Find an element by element id
document.getElementById(id)
//Find element by tag name
document.getElementsByTagName(name)
//Find element by class name
document.getElementsByClassName(name)
//returns the first Element within the document
//that matches the specified selector,
// or group of selectors
document.querySelector(name);
//returns a static (not live) NodeList 
//representing a list of the document's elements 
//that match the specified group of selectors.
document.querySelectorAll(name);

// ** FINDING HTML ELEMENTS 
// BY OBJECT COLLECTIONS **
<form id="form">
   <input type="text" value="fname"></input>
   <input type="text" value="lname"></input>
   <button onclick="myFunc()">
      Get Value
   </button>
</form>
function myFunc() {
   let x = document.forms['form'];
   let texts = "";
   for (let i = 0; i < x.length; i++) {
      texts += x.elements[i].value;
   }
   console.log(texts);
}

//Adding Event Handlers
document.getElementById(id).onclick = function () {
   console.log("clicked")
}

//Methods to work with attributes 
//to check for the existance
elem.hasAttribute(name);
//to get the value 
elem.getAttribute(name);
//to set the value
elem.setAttribute(name);
// to remove the attribute
elem.removeAttribute(name);
// it is collection of all attributes
elem.attributes

// JAVASCRIPT - DOM PROPERTIES (VALUES) 
// CHANGING HTML ELEMENTS :
let element = document.getElementById("id");
// value to change the inner HTML of an element
element.innerHTML = "";
// change the attribute value of an HTML element 
element.attribute = "";
// change the style of an HTML element
element.style.property = "";

//JAVASCRIPT HTML DOM - CHANGING HTML
//It is used to directly write to output stream
document.write("Hello World");
<img src="env.jpg"></img>
//Changing the src attribute of an image element
document.getElementById("changeSrc").src = "world.jpg";
//Changing HTML Style
document.getElementById("ui-p").style.fontSize = "20px";

//Javascript Html DOM Animation (Skeleton loading)
/*<style>
#container {
  width: 400px;
  height: 400px;
  position: relative;
  background: yellow;
}
#animate {
  width: 50px;
  height: 50px;
  position: absolute;
  background-color: red;
}
</style>*/
//JS (next slide) ------------>
<div id="container">
   <div id="animate">
   </div>
</div>
function move() {
   var pos = 0;
   var elem = document.getElementById("animate");
   let interval = setInterval(frame, 5);
   function frame() {
      if (pos == 350) {
         pos = 0;
      } else {
         pos++;
         elem.style.left = pos + "px";
      }
   }
}

//JAVASCRIPT HTML DOM EVENTLISTENER

document.getElementById("ui-p").addEventListener("click", logDate);
function logDate() {
   console.log(Date());
}

// Add event handler to an element
document.getElementById("ui-Btn").addEventListener("click",
   console.log("trigger"));
document.getElementById("ui-btn").addEventListener("mouseover",
   triggerFunc());
document.getElementById("ui-btn").addEventListener("mouseout",
   triggerFunc());


//Event Bubbling and Event Capturing
/*<div id="myDiv1">
  <h2>Bubbling:</h2>
  <p id="myP1">Click me!</p>
</div><br>

<div id="myDiv2">
  <h2>Capturing:</h2>
  <p id="myP2">Click me!</p>
</div>*/

document.getElementById("myP1").addEventListener("click", function () {
   console.log("myP1 triggered");
}, false); //Bubbling is true
document.getElementById("myDiv1").addEventListener("click", function () {
   console.log("myDiv1 triggered");
}, false); //Bubbling is true (myP1 will be triggered than my Div1);
document.getElementById.addEventListener("myP2", function () {
   console.log("myP2 triggered");
}, true); //Captured is true
document.getElementById.addEventListener("myDiv2", function () {
   console.log("myDiv2 triggered");
}, true); //Captured is true (myDiv2 will be triggered than myP2)

//The removeEventListener 
/*<div id="myDiv2">
  <h2>Capturing:</h2>
  <p id="myP2">Click me!</p>
</div>*/
document.getElementById("myP2").removeEventListener("mouseover",
   TriggeredFunc);

//JAVASCRIPT HTML DOM NAVIGATION

//Following are the properties to navigate between 
//nodes with javascript:
// parentNode
// childNodes[node number]
// firstChild
// lastChild
// previousSibling
// nextSibiling

/* <h1 id="id02">My First Page</h1>
   <p id="id02"></p>
*/
// o/p : My First Page
document.getElementById("id01").innerHTML =
   docoument.getElementById("id02").fistChild.nodeValue;
//  o/p : #text
document.getElementById("id01").innerHTML =
   docoument.getElementById("id02").fistChild.nodeName;
//  o/p : 3 (TEXT_NODE)
document.getElementById("id01").innerHTML =
   docoument.getElementById("id02").fistChild.nodeType;
//  o.p : My First Page
document.getElementById("id01").innerHTML =
   dcoument.getElementById("id02").childNodes[0].nodeValue;

//The nodeValue Property :
//nodeValue for element nodes is null
//nodeValue for text nodes is text itself
//nodeValue for attribute nodes is attribute itself

//The nodeName Property :
//nodeName is read-only 
//nodeName of the element is same as the tag name
//nodeName of attribute is same as the attribute name
//nodeName of text node is always #text
//nodeName of document node is always #document

//The nodeType Property :
//NodeType property is read-only.
//NodeType always returns the type of node.

//The most important nodeType properties are :
// ELEMENT_NODE	       1  	<h1 class="heading">W3Schools</h1>
// ATTRIBUTE_NODE	       2	   class = "heading" (deprecated)
// TEXT_NODE	          3    some text
// COMMENT_NODE	       8	   <!-- This is a comment -->
// DOCUMENT_NODE	       9	   The HTML document itself (the parent of <html>)
// DOCUMENT_TYPE_NODE	 10	<!Doctype html>

//ADDING AND DELETING ELEMENTS :

document.createElement(element); // Create an HTML Element
document.createTextNode("Text"); // Create text node
document.removeChild(element); // Remove an HTML Element
document.appendChild(element); //Add an HTML Element
document.replaceChild(newElement, oldElement); //Replace an HTML Element

document.write(text);	//Write into HTML output system

<div id="outerDiv">
   <p id="p-1">Hello</p>
   <p id="p-2"></p>
</div>

let getId = document.getElementById("p-1");
let para = document.createElement("p");
let node = document.createTextNode("this will be append to p");
para.appendChild(node); // added to node to para
let div = document.getElementById("outerDiv");
div.appendChild(para); // added para to div
div.removeChild(getId); // Removed p-1 id
div.replaceChild(param, getId);// Replaces "Hello" to "this will append to p";

//JAVASCRIPT DOM COLLECTION LENGTH 
let tagname = document.getElementsByTagName("p");
document.getElementById("p-2").innerHTML = tagname.length; // o/p : 2

//CHANGE THE COLOR OF ALL <p> ELEMENTS 
function ChangeColor() {
   let collectionPara = document.getElementById("p");
   for (let i = 0; i > collecctionPara.length; i++) {
      collectionPara[i].style.color = "red";
   }
}

//**You cannot use array methods like valueOf(), pop(), push(), or join() on an HTMLCollection **.

// Difference between nodeList and HTML Collection

//  NodeList                |                HTML collection
// returns all node types   | returns only elements nodeType.


//Node navigation example 
//HTML --->
      <div id="first-child">
         <p id="p1">This is a paragraph.</p>
         <p id="p2">This is another paragraph.</p>
      </div>
// JS --->
var para = document.createElement("p");
var node = document.createTextNode("This is new paragraph.");
para.appendChild(node);
para.setAttribute("id","p3");
var element = document.getElementById("first-child");
element.appendChild(para);

//Get Parent Value
var parentValue = document.getElementById("p3").parentNode;
console.log(parentValue);// Get o/p as id="div1"

//Create div out side the curent element
var CreateouterDiv =  document.createElement("div");
CreateouterDiv.setAttribute("id","outerDiv");
CreateouterDiv.appendChild(parentValue);
console.log("outerDiv",CreateouterDiv);
 // o/p as id="outerDiv" div element

//Create div inside outerDiv
var innerDiv2 = document.createElement("div");
innerDiv2.setAttribute("id","second-child");
CreateouterDiv.appendChild(innerDiv2);
//Get firstchild and lastchild value
var firstChild = CreateouterDiv.firstChild;
console.log("firstChild",firstChild); 
//o/p as div1, since outerDiv is parent of div1

var lastChild = CreateouterDiv.lastChild;
console.log("lastChild",lastChild); 
//o/p as id="innerDiv2"

//Get next sibling and previous sibling value
var NextSibling = firstChild.nextSibling;
console.log("nextSibling",NextSibling); 
//o/p as id ="innerDiv2" element since it is next sibling of div1

var previousSibling = lastChild.previousSibling;
console.log("previousSibling",previousSibling);

//Get childNodes of parent node:
var childNodeOne = CreateouterDiv.childNodes[0];
console.log("1st child node",childNodeOne);

var childNodeTwo = CreateouterDiv.childNodes[1];
console.log("2nd child node",childNodeTwo);