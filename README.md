# $bit 
#### JavaScript lib for easy creation DOM elements<br>
#### Simple
```js
 $bit({
  tag: 'div',
  text: 'Hello World!',
  id: 'Welcome',
  parent: document.body
 });
 ```
 ```html 
<body>
   <div id="Welcome">Hello World!</div>
</body>
```
 #### Architecture
 ```js
 $bit({
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
