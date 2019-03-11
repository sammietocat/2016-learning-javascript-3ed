# Chapter 18. JavaScript in Browser

## ES5 or ES6?

- In term of ES6 features, the server side is under control, but not the web side
- "Evergreen" browsers tackle this problem by updating automatically

## The Document Object Model

- DOM is a convention for describing the structure of an HTML document
- DOM is a tree consisting of nodes, where the root is the `document` and has a single child `<html>`

  > The DOM consists entirely of _nodes_, only some of which are HTML _elements_}

- Every node has the properties `nodeType` and `nodeName` (among others)
  - `nodeType` is an integer identifying what type of node it is
  - `nodeType` of interest are `Node.ELEMENT_NODE` (HTML elements) and `Node.TEXT_NODE` (text contents usually within HTML elements)

## Some Tree Terminology

- A node's **parent** is its direct parent (but not a "grandparent")
- A **child** is a direct child (not a "grandchild")
- A **descendant** is used to refer to a child, or a child's child, or so on.
- An **ancestor** is used to refer to a parent, the parent's parent, and so on

## DOM "Get" Methods

|                              Method | Usage                                                           |
| ----------------------------------: | :-------------------------------------------------------------- |
|         `document.getElementById()` | retrieve an element by its ID                                   |
| `document.getElementsByClassName()` | returns a collection of elements that have the given class name |
|   `document.getElementsByTagName()` | returns a collection of elements that have the given tag name   |

> - All of the DOM methods that return a collection **do not** return a JavaScript array, but an instance of `HTMLCollection`
> - Convert an `HTMLCollection` to an array by using the spread operator: `[...document.getElementsByTagName(p)]`

## Querying DOM Elements

- `querySelector` and `querySelectorAll` allow you to use **CSS selectors**
- CSS selectors allow you to identify elements (says, `<p id="hello-id" class="hello-class hello-class2">hello</p>`) by
  - Name (`<p>`)
  - ID (`#hello-id`)
  - Class (`.hello-class`), or combination of classes by separating them with periods (`.hello-class.hello-class2`), or
  - Any combination thereof (`p#hello-id.hello-class`)
- If you separate multiple element selectors with a space, you can select nodes with a specific ancestry
- If you separate multiple elements selectors with a greater-than sign (>), you can select nodes that are **direct children**

## Manipulating DOM Elements

- Each element has two properties for changing the element's content
  - `textContent`: strips out all HTML tags and provides text data only
  - `innerHTML`: allows you to create HTML making new DOM nodes
- Assigning to `textContent` and `innerHTML` is **a destructive operation**

(demo as `man-dom.html`)

## Creating New DOM Elements

- By `document.createElement()`
- To add these newly created elements to the DOM, we'll use
  - `insertBefore(element,ref)`: takes the element to inset first, and then a "reference node", which is the node to insert before
  - `appendChild(element)`: appends the specified element as the last child

(demo as `add-remove.html`)

## Styling Elements

- Every element has a property `classList`, which contains all of
  the classes (if any) the element has
- `classList` has an `add` method that allows you to add further classes
- Inverse of `classList.add()` is `classList.remove(classNameToRemove)`

(demo as `styling.html`)

## Data Attributes

- HTML5 introduced **data attributes**, which allow you to add arbitrary data to HTML elements
- The **square bracket** syntax allows us to match elements by any attribute
- We can also modify or add data attributes with JS

## Events

- Every element has a method named `addEventListener` that allows you to specify a function that will be called when that event occurs
- That function takes a single argument, an object of type `Event`

### Event Capturing and Bubbling

- 2 options to respond to events
  - **Capturing** starts at the most distant ancestor
  - **Bubbling** starts at the element where the event occurred, and then walk up the hierarchy so all ancestors have a chance to respond
- Any handler can optionally do one of three things to affect how (and if) additional handlers will get called (demo as `event2.html`)
  - `preventDefault()` cancels the event (Canceled events continue propagating, but their `defaultPrevented` property is set to `true`)
  - `stopPropagation()` prevents further propagation past the current element
  - `stopImmediatePropagation()` will prevent any further handlers including those binding to the same current active element from getting called
    > Note that on the element on which the event was actually raised, handlers will be called in the order they were added

### Event Categories

`drag`, `focus`, `form`, `input device`, `media`, `progress`, `touch`, etc

## Ajax

- Abbr for "Asynchronous JavaScript and XML"
- Allowing elements on your page to be refreshed with data from the server without reloading the entire page
- The core concept of Ajax is simple: browser-side JavaScript makes HTTP requests programatically to a server, which returns data, usually in JSON format. That data is used to enable functionality on the browser
- 3 important events
  - `XMLHttpRequest.load()` event will get called if the Ajax call was successful
  - `XMLHttpRequest.open()` establishes the connection to the server
  - `XMLHttpRequest.send()` actually executes the request

(demo as `ajax.html` and `ajax.js`)
