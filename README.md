# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.


## Step-by-step

Here, i will describe all implemented tests in this project:

1. Test Suite `"RSS Feeds"`. Here i did three tests. First (`'are defined'`) i checked if the variable `"allFeeds"` was defined. In the second test (`'has URL'`) it was verified if all elements in `"allFeeds"` has the property `"url"`. And the last test (`'has name property and it\'s not empty'`) was verified if each element in `"allFeeds"` variable have the property `"name"` and if it's not blank.

2. Test Suite `"The menu"`. Here i did two tests. First (`'Initiate menu hidden'`) i verified if menu started hidden. In the second test (`'The menu is visible'`) i verified if the menu was visible with on click and after on click more, the menu was invisible.

3. Test Suite `"Initial Entries"`. Here exists just one test (`'Check if exists elements'`) that verified if after request i will get at least one entry. Like the request is asynchronous, it was used `"beforeEach"` command. But when i have a long asynchronous specs, i modified a DEFAULT_TIMEOUT_INTERVAL to a big value.

4. Test Suite `"New Feed Selection"`. Here exists just one test (`'when a new feed is loaded by the loadFeed function that the content actually changes'`). Well, your name describes what its do ;) .