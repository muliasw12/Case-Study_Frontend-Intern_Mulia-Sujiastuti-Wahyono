# Case Study Frontend Intern at Rakamin


## Explain how the data flows from HTTP requests?
HTTP (Hypertext Transfer Protocol) is a protocol that is used to transmit data over the internet. We can make an HTTP request, where the data flows from your computer to the server that you are requesting data from.
1. Starting by making an HTTP request from your computer to a server. This request typically includes a URL (Uniform Resource Locator) that specifies the server you are requesting data from and the specific resource you want to access.
2. The request is packaged into an HTTP message that includes a request header and a request body. The request header contains metadata about the request, such as the type of request (e.g. GET, POST, etc.), while the request body contains any additional data that needs to be transmitted, such as form data or a JSON payload.
3. The HTTP message is sent over the internet to the server that you are requesting data from. This is typically done using the Transmission Control Protocol (TCP) to ensure that the data is transmitted reliably and without errors.
4. The server receives the HTTP message and processes the request. This may involve accessing a database, retrieving data from a file, or executing some other action based on the contents of the request.
5. Once the server has processed the request, it sends back an HTTP response. This response includes a response header and a response body. The response header contains metadata about the response, such as the status code (e.g. 200 OK, 404 Not Found, etc.), while the response body contains the data that has been requested.
6. The HTTP response is sent back over the internet to the computer, where it is received by web browser or other client software. Your client software then processes the response and displays the data to you.

## Explain how the React JS library works?
React is a popular JavaScript library for building user interfaces. It was developed by Facebook and is now maintained by a community of developers. React allows you to build UI components using a declarative syntax, which means you describe what you want your UI to look like and React takes care of updating the DOM (Document Object Model) as the state of your application changes.
1. The component of React: React is built around the concept of components. A component is a self-contained unit of UI that can be reused throughout your application. Components can be thought of as JavaScript functions that return a block of HTML (or JSX, a syntax extension to JavaScript that allows you to write HTML-like code in your JavaScript files).
2. Virtual DOM: React uses a virtual DOM (a lightweight representation of the real DOM) to keep track of the state of your application. When a component's state changes, React updates the virtual DOM, which is much faster than updating the real DOM directly.
3. Reconciliation: Once the virtual DOM has been updated, React performs a process called reconciliation, which is the process of determining the difference between the previous and updated virtual DOMs. React uses this information to update only the parts of the real DOM that need to be updated, rather than re-rendering the entire page.
4. JSX: As mentioned earlier, JSX is a syntax extension to JavaScript that allows you to write HTML-like code in your JavaScript files. JSX is not required to use React, but it makes writing React components much easier and more intuitive.
5. State and Props: React components can have two types of data: state and props. State is used to manage data that can change over time, while props are used to pass data from a parent component to a child component.
6. Lifecycle methods: React components have a series of lifecycle methods that allow you to perform certain actions at specific points in the component's lifecycle.

## Deployment
Sorry, for this project I cannot deploy this repo because it's cannot display anything at browser :(


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
