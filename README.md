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
<sub>You can both create these attributes and supplement them</sub><br>
 + **Most of the named attributes are comparable to HTML** *<sup>[class, id, title, value...]</sup>*<br>
 + **Js onevents**  *<sup>[onclick, onkeydown, onkeypress, onblur...]</sup>*<br>
 + **Css styles**  *<sup>[width, height, color, fontSize...]</sup>*<br>

## Impact attrs
#### if/else
> <sub>Condition to execute Bit</sub><br>
> if: Boolean ?? (...Boolean)<br>
> else: {}
#### name
> <sub>Give name of Bit</sub><br>
> name: String
#### tag
> <sub>Give tag name of Bit</sub><br>
> tag: String
#### children
> <sub>Create child nodes</sub><br>
> child: {Object} ?? Function(b) ?? in [...] ?? [[{Object},Function(b)]]
#### append
> <sub>Append content (not child)</sub><br>
> append: Element ?? Object ?? [...]
#### parent
> <sub>Specifies the parent/s</sub><br>
> parent: Element ?? [...]
#### event
> <sub>Set JS event</sub><br>
> event: {click: Function}
#### attr
> <sub>Set HTML attribute</sub><br>
> attr: Object
#### style
> <sub>Set Css style</sub><br>
> style: {styles}
#### size
> <sub>Set Width & Height</sub><br>
> size: int
#### ttl
> <sub>Set Time to live</sub><br>
> ttl: int
#### interval
> <sub>Set Interval to show</sub><br>
> interval: int
#### activator
> <sub>Add "active" Class</sub><br>
> activator: Boolean ?? in [...]
#### text
> <sub>Text Content </sub><br>
> text: String ?? Element ?? Object ?? in [...]
#### html
> <sub>InnerHTML</sub><br>
> html: String
#### cond(dif/delse)
> <sub>Condition on Arrtibutes</sub><br>
> cond: Boolean ?? (...Boolean) <br> 
> dif: Object <br>
> delse: Object 
#### legacy(succession)
> <sub>legacy attributes for first child row</sub><br>
> legacy: { <br>
> ...attr<br>
> ?succession: Boolean // legacy for all childs<br>
> }
 
 
 ***
 # Type Bit
 There are 3 main types of Bits <br>
 **Static:** *Object*
 ```js
new Bit({
  class: "static-bit",
  child: {
	text: "Hello World!"
  }
  parent: document.body
}); 
 ```
 **Advanced:** *Function*
 ```js
new Bit((b) => {
      // b = {...}
      b.param = {
        // b.param = Set Attrs
        class: "static-bit",
        child: {
          text: "Hello World!",
        },
        parent: document.body,
      };
    });
 ```
 **Mixed:** *Object => Function*
 ```js
new Bit(
      {
        class: "static-bit",
        parent: document.body,
      },
      (b) => {
        b.child = {
            text: "Hello World!",
        };
      }
    );
 ```
 **Results:**
 ```html
<body>
   <bit class="static-bit">
	 <bit>Hello World!</bit>
   </bit>
</body>
 ```
Each type exists for the tasks at hand.
For example, static is better to use when you want to create a simple Bit with no perspective in the future.

The Function Bit is designed to create more complex and flexible structures. 
This is a Bit for the perspective of change in the future.

Mixed Bit is the middle ground between Object and Function. It is a possible addition to the other 2.

 # Building your own kernel based on Bit <br>
 ```js
 class MyBit extends Bit // Recommended at the beginning of using Bit
 new MyBit().genmod((attribute, element)=> { // Modified bit
     // attribute = Object Data;
     // element = Node;
 	if(attribute.myAttr)
		element.classList.add("Modified");
 });
 
 new MyBit({
      myAttr: "Value",
    }); // <bit class="Modified">
 ``` 
	
# Blocks
You can create a block structure<br>
**For example:**
```js
new Bit().startBlock({
      legacy: { // legacy for next Bits
        class: "sector-class",
        parent: document.body,
      }
    }); 
  
new Bit({
      class: "item-1",
    });

new Bit({
      class: "item-2",
    });
    
new Bit({
      class: "item-3",
    });
    
const Bits = new Bit().rangeBlock(); // Get array current bits turn
//[
//  <bit class="sector-class item-1">, 
//  <bit class="sector-class item-2">, 
//  <bit class="sector-class item-3">
//]

new Bit().createBlock(); // Create all Bits in turn
``` 
**Result:**
 ```html
<body>
	<bit class="sector-class item-1"></bit>
	<bit class="sector-class item-2"></bit>
	<bit class="sector-class item-3"></bit>
</body>
 ```

# Naming
Naming is an important part of the bit that allows you to conveniently interact with elements <br>
**For example:**
```js    
const myBit = new Bit({
      class: "root-bit",
      child: {
        name: "child1",
        class: "item-1",
        child: {
	  name: "child2",
          class: "item-2",
	  text: "Hello World!"
        },
      },
    });

    // <bit class="root-bit">
    //   <bit class="item-1">
    //     <bit class="item-2">Hello World!</bit>
    //   </bit>
    // </bit>
    
myBit.child1 // <bit class="item-1">
myBit.child2 // <bit class="item-2">

``` 
The names of all child are assigned to the Root Bit
