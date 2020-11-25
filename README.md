# Hiring Test

Welcome to Oliasoft's developer hiring coding challenge.

# Instructions

We've prepared a skeleton repository with everything needed to run the test app:

- React
- A GUI Component Library
- Redux, Redux Toolkit, and an API middleware
- Build toolchain (Babel+Webpack)
- Backend framework (Express)
- Test framework (Jest)

## Setup

- clone or download the repository: [gitlab.com/oliasoft-open-source/hiring-test](https://gitlab.com/oliasoft-open-source/hiring-test)

```
npm install
```
## Running and Testing the code

In order to run the client do:

```
npm run client
```

Similar for server:

```
npm run server
```

To run unit tests:

```
npm run test
```

## Challenge tasks

### Frontend challenge

TODO: Michael describe tasks for client only (using different APIs)

### Fullstack challenge

Extend the application to add new endpoints for:

- Fetching one specific employee
  - by name
  - by id
- Provide methods to add, modify and delete an employee
- Add a new API route for statistics and add methods to get
  - number of employees
  - number of hired employees (tips: look at the email address)
  - number of employees per character in the alphabet - histogram

## Tips

- use modern JavaScript (ES6+)
- use modern React (function+hooks components)
- use modern Redux (Redux Toolkit with Ducks pattern)
- re-use GUI components from our [UI Library](https://gitlab.com/oliasoft-open-source/react-ui-library) (see the
 reference [Storybook](https://oliasoft-open-source.gitlab.io/react-ui-library/))
- use CSS modules for styling

## Submission

Submit your completed challenge by zipping it and emailing it to us (including the full git repo with history). 
Don't push it back to the repository :)