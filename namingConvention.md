## Guidelines for how to write good code

As far as a computer is concerned, "good code" is any code that runs without bugs. The computer doesn't care if your code is readable. You write readable code because it helps other people to read your code.

It's also much more likely that code which is clear and easy to read will be less prone to bugs since you'll be able to follow the logic more easily and spot mistakes before they become a problem.

<aside>
💡 This guide sets out the rules we want you to follow to help you write clean and understandable code.

</aside>

**In this guide:**

---

## Naming Conventions

Naming things is one of the most difficult things to do well in programming. As you get more familiar with the languages and conventions, you'll find it easier and easier to express yourself in code and complete tasks, but one thing will stay the same - finding a good name for that class name in CSS, variable name or function name in JavaScript.

There's no one rule to naming things, but there are some conventions you should follow to write good names;

**Focus on the intention, not the implementation.** By intention, we mean "what are we trying to achieve". For example, a CSS class name `header` immediately tells you what the intention of the HTML element its applied to will be - it's obviously going to be some sort of page or section heading. Inside the CSS we write, perhaps all we're going to do is give it a blue background. You could've called it `blue-box`, but that would be focusing on the implementation and removes all indication of the intention of the class.

**Use full words as much as possible.** Try not to abbreviate words or use abstract variable names such as `x` or `y`. This makes it much easier to read quickly without having to mentally parse what the variable really means.

**Use kebab-case for CSS class names, and camelCase for function names and variables in JavaScript.** See [this blog post](https://medium.com/better-programming/string-case-styles-camel-pascal-snake-and-kebab-case-981407998841) for a bit more explanation on what camel case and kebab case mean, but in a nutshell, kebab case means all lower case with hyphens `-` between each word. Camel case means no spaces between words and the first word should have a lower case first letter while each following word should have capital letters. For example, `hello-world` is kebab case and `helloWorld` is camel case.

- CSS examples of good class names
    
    ### 🛑 Bad:
    
    ```css
    .blue-box { }
    .paragraph { }
    .section-4 { }
    .x { }
    .usrLFrm { }
    ```
    
    ### ✅ Good:
    
    ```css
    .introduction { }
    .welcome-message { }
    .primary-section { }
    .calculator-result { }
    .user-login-form { }
    ```
    

---

## Don't repeat yourself

"Don't repeat yourself" (often referred to as *DRY*) means to abstract your code to make it more reusable. For example, if you have a bunch of `<p>` tags in your HTML which you want to look the same, you should aim to write just 1 CSS selector which targets all of them instead of copying and pasting your CSS properties across a lot of selectors.

With CSS you should always aim to make your classes as generic and reusable as possible. With JavaScript it can get a little more complex - often to abstract everything into reusable functions can lead to situations where it actually makes code less readable or harder to maintain. You have to decide yourself when is a good time to abstract something into a function. Generally a good rule to follow is if you copy and paste the same thing more than a couple of times, then it's a good candidate for abstraction.

- CSS example of DRY
    
    ### 🛑 Bad:
    
    ```html
    <div>
      <h1>Hello world</h1>
      <p class="paragraph-1">An important message</p>
      <p class="paragraph-2">Another important message</p>
    	<p>I shouldn't be red because this isn't important</p>
    </div>
    ```
    
    ```css
    .paragraph-1 {
      color: red;
    }
    
    .paragraph-2 {
      color: red;
    }
    ```
    
    ### ✅ Good:
    
    ```html
    <div>
      <h1>Hello world</h1>
      <p class="important-text">An important message</p>
      <p class="important-text">Another important message</p>
      <p>I shouldn't be red because this isn't important</p>
    </div>
    ```
    
    ```css
    .important-text {
      color: red;
    }
    ```
    
    Benefits of doing this:
    
    - It's easier to find all the items which are 'red'
    - The class name `important-text` is more more indicative of the purpose it serves than `paragraph-1` and `paragraph-2` are. When you come back to this code in the future, you're much more likely to remember what it meant.
    - If you want to change the color from red to something else, you just have one selector to update in your CSS.

---

## Indentation & Spacing

When writing code, you might copy and paste examples from other files or solutions you've found online. This can often lead to your code having weird indentation and weird spacing between your blocks of code.

The rule to follow here is that if there's a new block, then you indent one more level. At Technigo, we use 2 spaces for indentation.

- CSS example of indentation and spacing
    
    ### 🛑 Bad:
    
    ```css
    .important-text{
        color:red;
          background:   pink;
      }
    
      .header    { background: blue;}
    ```
    
    ### ✅ Good:
    
    ```css
    .important-text {
      color: red;
      background: pink;
    }
    
    .header {
      background: blue;
    }
    ```
    
- HTML example of indentation and spacing
    
    ### 🛑 Bad:
    
    ```html
    <div><h1>Hello world</h1>
          <p class = "important-text">An important message
          </p>
      
      
    <p class="important-text">      Another important message</p>
      <p>I shouldn't be red because this isn't important</p>
    </div>
    ```
    
    ### ✅ Good:
    
    ```html
    <div>
      <h1>Hello world</h1>
      <p class="important-text">An important message</p>
      <p class="important-text">Another important message</p>
      <p>I shouldn't be red because this isn't important</p>
    </div>
    ```
    
    ### ✅ Also Good:
    
    ```html
    <div>
      <h1>
        Hello world
      </h1>
      
      <p class="important-text">
        An important message
      </p>
      
      <p class="important-text">
        Another important message
      </p>
      
      <p>
        I shouldn't be red because this isn't important
      </p>
    </div>
    ```
    

If an HTML element has several attributes, it's a good idea to split them into different rows for better readability. Another convention to follow regarding attributes is that boolean attributes (attributes that can be either true or false) should come before others.

- HTML example
    
    ### 🛑 Bad:
    
    ```html
    <img class="hero-image" src="./images/avocado.jpeg" alt="Image of an avocado"/>
    
    <select>
      <option value='' disabled>Select an option:</option>
      <option value='option1'>Option 1</option>
      <option value='option2'>Option 2</option>
    </select>
    ```
    
    ### ✅ Good:
    
    ```html
    <img
      class="hero-image"
      src="./images/avocado.jpeg"
      alt="Image of an avocado"/>
    
    <select>
      <option disabled value=''>Select an option:</option>
      <option value='option1'>Option 1</option>
      <option value='option2'>Option 2</option>
    </select>
    ```
    

---

## Comments

You should aim to write code which is self-documenting - this can be done using good naming conventions like we've discussed already, but sometimes a good variable or class name just isn't enough to really explain what something is or what it should be used for.

Comments can be super useful for explaining things in more detail - for yourself when you come back to the code, or for the next developer who looks at it.

In VS Code, you can toggle whether a line is commented by selecting the line or text and pressing `command + /` if you're on a mac, or `control + /` on a windows computer.

- HTML Comments
    
    ```html
    <!-- This is a single-line html comment -->
    
    <!-- HTML comments can span multiple lines.
    
    Everything from the initial symbols to the end symbols 
    will be not visible to the viewer of the page. -->
    ```
    
- CSS Comments
    
    ```css
    /* this is a CSS comment */
    
    /* CSS comments can also span multiple lines
    
    And follow the same rule as HTML comments - everything
    within the start and end symbols will be commented out */
    ```
    
- JavaScript Comments
    
    ```jsx
    // This is a single-line JavaScript comment
    
    /* In JavaScript, multi-line comments 
    
    are the same as CSS comments. Yay! */
    ```
    

---

## Semantic HTML

Semantic HTML introduces meaning to your content rather than just presentation. For example, wrapping text in a `<div>` means it can be styled, but wrapping it in a `<p>` means it can be styled and the computer knows a little about it - it's a block of text, it's probably not super important, etc. Wrapping the same text in an `<h1>` doesn't just give you styles, it tells the computer this block of text is also important.

Examples of **non-semantic** elements: `<div>` and `<span>` - Tells nothing about its content.

Examples of **semantic** elements: `<form>`, `<table>`, and `<article>` - Clearly defines its content.

As you learn more and more HTML tags, you'll come across some rather special tags which give your content more meaning. Some can be useful for accessibility, for example adding a caption to an image, others can completely change how the browser renders the content.

Here are some of the roughly 100 semantic HTML elements available:

- `[<article>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)`
- `[<aside>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside)`
- `[<details>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)`
- `[<figcaption>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption)`
- `[<figure>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure)`
- `[<footer>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)`
- `[<header>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)`
- `[<main>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main)`
- `[<mark>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark)`
- `[<nav>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)`
- `[<section>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)`
- `[<summary>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary)`
- `[<time>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time)`

As a rule, you should always strive to use semantic markup as much as possible.

- Examples
    
    ### 🛑 Bad:
    
    ```html
    <p class="heading1">I'm a title</p>
    <div class="header">Header</div>
    <div class="sidebar">Sidebar</div>
    ```
    
    ### ✅ Good:
    
    ```html
    <h1>I'm a title</h1>
    <header>Header</header>
    <aside>Sidebar</aside>
    ```
    

---

## JavaScript

### Variables

- Variable names should follow the 'Naming Conventions' set out above and should be in `camelCase` .
- Use `const` as much as possible. Only use `let` if you actually need to re-assign a variable. A good rule of thumb is to start with `const` and then if you run into an issue and need to enable reassignment, then change it to `let`.
- Do not use `var` if you don't have a really good reason to.
- Assign variables one at a time (see examples)
- Examples
    
    ### 🛑 Bad:
    
    ```jsx
    const notusingcamelcase = '' // should use camelcase
    
    var name = 'Bob' // should use const
    
    const firstName, lastName, title = '' // Variables should be assigned one at a time
    
    firstName = 'Joe' // firstName is the only variable which should be 'let' here.
    ```
    
    ### ✅ Good:
    
    ```jsx
    const usingCamelCase = ''
    
    const name = 'Bob'
    
    let firstName = ''
    const lastName = ''
    const title = ''
    
    firstName = 'Joe'
    ```
    

### Functions

- Functions should be defined using the `const functionName = () => {}` syntax (not using the `function` keyword) - this rule is mainly just for consistency.

### Semicolons

- We're not going to enforce whether you should or should not use semicolons. Decide yourself what you prefer and do that. **HOWEVER** - we want consistency. If you use semicolons, use them everywhere. If you don't, then don't use them at all. **Don't use a mix.** Read more here → [To semicolon, or not to semicolon;](https://dev.to/emnudge/to-semicolon-or-not-to-semicolon-5acn)

### Template literals

- Do not use `+` to add strings together. Use template literals instead. For example; ``Hello ${name}`` instead of `"Hello " + name`.

### Spacing in functions and conditionals

- Curly brackets should open on the same line as the function or condition is defined on.
- Add spaces between keywords and arguments
- Examples
    
    ### 🛑 Bad:
    
    ```jsx
    const myFunction = (someArgument) =>
    {
    	// The curly above should not be on a new line
    }
    
    if(something) {
      // there should be a space between if and ()
    }
    
    if (something)
    {
      // The curly above should not be on a new line
    }
    ```
    
    ### ✅ Good:
    
    ```jsx
    const myFunction = (someArgument) => {
    
    }
    
    if (something) {
    
    }
    ```
    

## React

### Naming

Apart from following the 'Naming Conventions' already stated, React components (including file names) should have PascalCase:

- `export const ArtistName = () ⇒ {...}`
- `ArtistName.js`
- When we start with styled components, the same goes for those names:
`const AlbumCover = styled.img`...``

### Structure

As the projects grow bigger, so does the importance of structure. Practice abstracting your code into separate components, and spend some time thinking about the file structure (and put the components in different files). This will not only help you get a better overview of your application but will also let you reuse components more easily.