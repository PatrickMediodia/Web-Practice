/*
ReactDOM.render(
    <ul>
      <li>Value 1</li>
      <li>Value 2</li>
      <li>Value 3</li>
    </ul>,
  document.getElementById("root")
)
*/

/*
const h1Element = document.createElement("h1");
h1Element.className = "header";
h1Element.textContent = "Hello world";

const rootElement = document.getElementById("root");
rootElement.append(h1Element);
*/

/*  Store JSX components in a variable
import React from "react";
import ReactDOM from "react-dom/client";

const body = (
  <nav>
      <h1>Expense Tracker</h1>
      <ul>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
      </ul>
  </nav>
)
*/

/*  Old way of getting root div and rendering
ReactDOM.render(
  body,
  document.getElementById("root")
)
*/

/*  React 18 and above
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(body)
*/



/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

import React from "react";
import ReactDOM from "react-dom";

const page = (
    <div>
        <img src="./react-logo.png" style={{ width: 50 }}/>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>

);

ReactDOM.render(page, document.getElementById("root"));

/*
1. Why do we need to `import React from "react"` in our files?
We need to import react to get the JSX syntax of creating react components

2. If I were to console.log(page) in index.js, what would show up?
It would show a Json object and it describes the JSX object. This JSON object will then be taken by the renderer to render its corresponding HTML tags. This is why it is called Virtual DOM vs the actual DOM

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
Whats wrongs is that there are currently two parent objects side by side, this is not permitted. It can be encapsulated in a div

4. What does it mean for something to be "declarative" instead of "imperative"?
Something is declarative where in you don't have to tell how it is done step by step, only a high overview is needed. Furthermore, declaractive is only tellking what to do, not how to do it

5. What does it mean for something to be "composable"?
This means reusable and scalable
*/