# Space X Mission React App
![image](https://user-images.githubusercontent.com/38327075/122268614-e939f400-cef9-11eb-8791-198767b80884.png)

## Tech Stack
HTML,CSS, JS, React JS

# Elaboration of Project
1. The App fetches SpaceX mission.
2. Initially a list of 100 mission appears. The missions can be filtered based on it's Year, Successful launch and Successful landing.
3. For example: Select the year and All the missions in that year will appear. Then select Launch Success or failure, this will show succeeded of failed mission in that year.

# Filtering Part:
1. Filtering was done by using react hooks.
2. To do this there are 3 functions. applyFilter(year), applyLandFilter(),appyLaunchFilter().
3. In each function API is fetch and then filtered using filter function and formated string in API and the mission is useState hook is used to set the missions to the filtered data.
