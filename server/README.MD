# npm init -y : package.json
# npm install body-parser cors express mongoose nodemon
    - body-parser : Enable to sent POST request
    - cors : Enable cross origin request
    - mongoose : create model for out POST
    - nodemon : authomaticaly restart our server

# MongoDB 
    - we are using mongodb.com/cloud/atles - it mean we host there

# redux
    - Redux is a state management library commonly used in JavaScript applications, particularly with React. Its main purpose is to manage and centralize application state in a predictable way.

    Key Benefits of Redux:
    1.Centralized State Management:

    - All the application's state is stored in a single source of truth (the Redux store), making it easier to manage and debug.
    2.Predictable State Updates:

    - State changes are handled through pure functions called reducers, ensuring predictability and consistency.
    3.Easier Debugging:

    - With tools like Redux DevTools, you can track state changes, inspect actions, and even time-travel through the app's state.
    4.Global State Sharing:

    - Redux makes it easy to share state (like user authentication, preferences, or data fetched from APIs) across different components of your application.
    5.Middleware Support:

    - Middleware like redux-thunk or redux-saga enables handling side effects, such as API calls or complex asynchronous workflows, within the Redux flow.

# axios
    - Axios uses promises and provides a clean, concise API for making GET, POST, PUT, DELETE, and other HTTP requests.
    - It automatically parses JSON responses, so you don’t need to handle it manually.
    - Axios provides built-in support for handling HTTP errors, making it easier to write reliable code.
    - You can set up request and response interceptors for tasks like adding authentication tokens, logging, or transforming data.
    - Axios makes it easy to cancel in-flight requests, which is particularly useful for scenarios like debouncing search inputs.
    - Axios provides a consistent API that works across different browsers.
