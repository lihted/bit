# $bit
#### JavaScript lib for easy creation DOM elements<br>
```js
 $bit({
  tag: 'div',
  text: 'Hello World!',
  id: 'Welcome',
  parent: document.body
 });
 ```
 ```html 
<div id="Welcome">Hello World!</div>
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
<div id="Names">
	 <div><span>Li Light</span></div>
	 <div><span>Tengen</span></div>
</div>
 ```

<details><summary>Properties</summary>
<p>

> Most of the named properties are comparable to HTML, but new ones have also been added. <br>
 
</p>
</details>
 
 
	
