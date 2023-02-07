# Bit CCE 
#### Bit Core Creation Elements <br>
##### This is JavaScript Library for create Node Elements
##### For example:
```js
 new Bit({
  text: 'Hello World!',
  id: 'Welcome',
  parent: document.body
 });
 ```
##### Result:
 ```html 
<body>
   <bit id="Welcome">Hello World!</bit>
</body>
```
This was the simplest example of using a static Bit <br>
But with that you can later build an architecture with your kernel. <br>
***
 ### So, what is a Bit? <br>
 ```
 In simple terms: this is HTML with additional JS features.
 Bit allows you not to separate JS and HTML, you can create your HTML in JS.
 ``` 

 ### What can Bit? <br>
 ```
 It is fully capable of creating websites (e.g. SPA)
 ``` 
### Bit Features <br>
 ```
 By far the biggest feature of the Bit is its simplicity. 
 In fact, it is just an object with which various manipulations take place
 And thanks to this you can create efficient code.

It also plays a significant role that the Bit does not need to be fully integrated. 
You can use it as a module required for minimal use in the project, or develop the project completely on your Bit core.
 ``` 
***
# Attributes
 Attributes play a major role in Bit. They are responsible for its essence and work. <br> 
 <sub>You can both create these attributes and supplement them</sub>
 
 
 # Type Bit
 There are 3 main types of Bits
 
 ```js
new Bit({
  tag: 'div',
  id: 'Names',
  child: [{
    tag: 'div',
    child: { tag: 'span', text: 'Li Light' }
  },{
    tag: 'div',
    child: { tag: 'span', text: 'Tengen' }
  }],
  parent: document.body
});
 ```
 ```html
<body>
   <div id="Names">
	 <div><span>Li Light</span></div>
	 <div><span>Tengen</span></div>
   </div>
</body>
 ```

<details><summary>Properties</summary>
<p>

 #### Most of the named properties are comparable to HTML <br>
> [class, id, title, value...]<br>
#### But new ones have also been added<br>
> ***[parent]:*** parent.append($bit); <br>
***[parentTop]:*** parent.prepend($bit); <br>
***[child]:*** $bit.append(child); <br>
***[wrap]:*** $bit = wrap.append($bit); <br>
***[append]:*** $bit.append(); <br>
***[prepend]:*** $bit.prepend(); <br>
***attr:*** setAttribute; <br>
***html:*** innerHtml; <br>
***text:*** createTextNode; <br>
***tag:*** createElement;
</p>
</details>

<hr>

#### Connect
```html
<head>
  <script src='./bit.js'></script>
</head>
```
