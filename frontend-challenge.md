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
- You should be able to navigate back to `Main View` from `Details Page`
- `Detailed Page` of each story should consist of:
    - story title
    - story author
    - story creation date
    - score
    - URL
    - `Comments List` (if possible to get)
- `Comments List` should consist of:
    - comment author
    - comment creation date
    - comment text
- `Comments List` should be filtered based on date of entry in descendant order
- Data should not be refreshed unless the user decides to. For example by clicking a load button or refreshing the site
- Use loading indicators whenever appropriate
- Create `Chart View`
- You should be able to navigate back to `Main View` from `Char View`
- Pick any charting library of your choice and plot the stories on Bar or Line chart
    - Y axis should be the score of the story
    - X axis should be either title or the ID of the story
