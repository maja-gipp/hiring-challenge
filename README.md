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

You're given a list of top stories available from [Hacker News API](https://hackernews.api-docs.io/v0/overview).

The main endpoint is already there, and you can simply test it by clicking `Load Stories` button.

- in `Main View`, reduce the number of incoming top stories to 10 random entries from the list you received
- Stories should get their details fetched
- Each story in `Main View` should consist of:
    - title
    - type
    - author
    - creation date
    - score
    - comment count (if possible, hint: type of story)
    - actual URL to the story
    - link / button to details
- `Main View` stories list should be sorted based on score in descendant order
- Clicking on the story of interest (button / link from previous point) should result in navigating to `Details Page`
- `Detailed Page` of each story should consist of:
    - story title
    - story author
    - story creation date
    - score
    - URL
    - `Comments List` (if possible to get)
- You should be able to navigate back to `Main View` from `Details Page`
- `Comments List` should consist of:
    - comment author
    - comment creation date
    - comment text
- `Comments List` should be filtered based on date of entry in descendant order
- Data should not be refreshed unless the user decides to. For example by clicking a load button or refreshing the site

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
