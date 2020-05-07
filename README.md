# resource book
 resources that i should never forget

# Links/Resources
 https://www.javatpoint.com/jquery-selectors

# What I learned
 Methods, functions, how to use them, etc

## **jQuery**
### `$(selector).next()` <br/> selects the next element next to selector  
in my code I used it for the header selection where,  
1. it selects the next element of the current one I selected.  
2. It then toggles the visibility of the listed items using `class="w3-hide"`.

```javascript
$(this).next().toggleClass("w3-hide");
```
+ https://stackoverflow.com/questions/361717/select-current-element-in-jquery
+ https://www.w3schools.com/jquery/traversing_next.asp
+ [**List of Traverse Methods**](https://www.w3schools.com/jquery/jquery_ref_traversing.asp)

## **JavaScript**
### using `typeof` <br/> checks if current var returns an output of `undefined`
I used it to avoid conflict when doing a `click` event on `li` elements.  
It uses the _strict equality_ `===` or `!==` as an operator.

```javascript
var link = $(this).attr('id');
if (typeof link !== 'undefined') {
    // Code to execute
}
```
+ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined