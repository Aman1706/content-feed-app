# Content Feed App

## Introduction

Content Feed App is a react native app which serves users with posts which can either be articles or videos.
The app is compatible for both ios and android.

## Features

1. There are 3 tabs - All, Articles and Videos.
2. In the All tab, users will view all the posts.
3. In the Articles tab, users will view only the posts which are articles.
4. In the Videos tab, users will view only the posts which are videos.
5. Search bar has been implemented in all the tabs, I was having issues with implementing it in the header so have added search field in each tab.
6. Search is done based on author name, the pdf mentioned to implement search by title, but in the JSON data which was given, titles are all the same, so I have changed search criteria to author name so the search field can be showcased better.
7. On click of posts which are articles, the screen which will be rendered will show the thumbnail and the contents to read.
8. On click of posts which are videos, the video will start playing using the respective device native player.

## Steps to Run the App

1. First in the root folder(contentFeedApp), run the command 'npm install' to install all the dependencies.
2. Steps to run the ios app:
   a. Move to the ios folder by typing 'cd ios' from the root folder.
   b. In the ios folder, run the command 'pod install'.
   c. On successful install, move back to the root folder by typing 'cd ..'
   d. Now, run the command 'npm run ios' to create the ios debug build
3. For the android app, in the root folder, run the command 'npm run android' to create the android debug build
