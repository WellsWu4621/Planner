# Planner
A simple work day planner

This app allows you to track what you want through out the work day. 
The page updates according to the time of day, and you can save comments in the time blocks.
Unfortunately there are currently no troll links, may be added in the future. :D

There are 4 primary features in the app

The Time:
The time is displayed down to the minute, at the top of the page. It will update every minute.
There was a previous version where I had the time display and update every second, but the constant updates every second would cause other functions on the page to be delayed. I am unsure of how to fix this, so I have set the time to update every minute.

The Colors:
Every Time block is color-coded. 
Past is Grey,
Present is Red,
Future is Green,
These colors will be updated once every 10 minutes, and is based on an hour system.
This used to be one a minute update interval, but I changed it to 10 minutes so there would be fewer potential interruptions

Load Previous Comments:
Upon entering the page, the time blocks will be updated and filled with any old comments that were previously saved. These are saved via Local Storage therefore do not transfer across multiple browsers/computers

Saving Comments:
Comments can be saved by hitting the save button on the right of each time block. These comments will be saved via local Storage, therefore do not transfer across multiple browsers/computers. The save feature will save the comment to the same array called userNotes found in the Local Storage. You can also use this feature to save over previous comments in the same time block; by this method, you can 'delete' old comments by overwriting the save with empty text.

Caution: The save feature can sometimes be interrupted during the update times of the colors and time so it would be best to press the save button multiple times. Similarly, when first opening the page, it may take a minute before smooth saving.

There are images and a small video showing the app at work in the assets/images folder.
The Github Repo Link is: https://github.com/WellsWu4621/Planner
The Deployed Link is: https://wellswu4621.github.io/Planner/
