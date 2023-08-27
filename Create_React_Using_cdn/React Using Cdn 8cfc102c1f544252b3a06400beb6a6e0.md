# React Using Cdn

## First make these two file inside folder.

![Untitled](React%20Using%20Cdn%208cfc102c1f544252b3a06400beb6a6e0/Untitled.png)

## Now, use index.html :

![Untitled](React%20Using%20Cdn%208cfc102c1f544252b3a06400beb6a6e0/Untitled%201.png)

### Here, we use 3 cdn for this :

```jsx
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <!-- ReactJS production minified javascript. -->
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <!-- React DOM Production minified javascript -->
    <script src='https://unpkg.com/babel-standalone@6.26.0/babel.js'></script>
    <!--  Babel to transpile your JSX to simple JS so that all the browsers can read them. -->
```

## Here first two is React and React DOM prooduction minified js

## But in the above code will not work because your JSX will not transpile to normal JS which the browser can understand. For that we need Babel.

 `<script src='https://unpkg.com/babel-standalone@6.26.0/babel.js'></script>`

### It is used to transpile your JSX code to normal js code (vanilla js) So, that your browser can understand.

## Make root element for react:

![Untitled](React%20Using%20Cdn%208cfc102c1f544252b3a06400beb6a6e0/Untitled%202.png)

## Now, inside index.js:

![Untitled](React%20Using%20Cdn%208cfc102c1f544252b3a06400beb6a6e0/Untitled%203.png)

## We can also write it as:

![Untitled](React%20Using%20Cdn%208cfc102c1f544252b3a06400beb6a6e0/Untitled%204.png)

This is traditional ReactDOM rendering method.

## Both of them are same. 😀

## Output:

![Untitled](React%20Using%20Cdn%208cfc102c1f544252b3a06400beb6a6e0/Untitled%205.png)