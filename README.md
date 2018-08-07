# Restaurant Reviews App Stage1 Front End Nanodegree Certification Course
---

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, I have converted a static webpage to a mobile-ready web application.
In **Stage One**, The static design that lacks accessibility has been converted into the responsive design on different sized displays and accessible for screen reader use. I have added a service worker to begin the process of creating a seamless offline experience for your users. The Cache API is used to cache and deliver the content even when offline.

## Table of Contents

- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Prerequisites](#prerequisites)
- [How to launch the app locally](#how-to-launch-the-app-locally)
  - [Installation](#installation)
- [Leaflet.js and Mapbox:](#leaflet.js-and-mapbox:)
- [Note about ES6](#note-about-es6)
- [Resources](#resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

### Getting Started

The started code is forked from Udacity for a restaurant reviews website.
The project work has improved below three areas:
- Responsive Design,
- Accessibility and
- Offline Use.

## Folder Structure
```
Note : The folder structure may changes i.e we may include/exclude some folders/files
as project progresses but the overall sructure will remain as presented below:
```
* index.html 			-- Project home page
* restaurant.html -- Restaurant Review Page
* css
  - styles.css  			-- CSS for our project
* data
  - restaurants.json  -- Restaurants Data
* img  						-- Images for project
* js
  - dbhelper.js   			-- Data helper file for the website
  - main.js   					-- JS file for home page
  - restaurant_info.js  -- JS file for Restaurant Review Page
  - indexController.js  -- Service Worker registration and others
* sw.js  				-- Service Worker script.
* CODEOWNERS 		-- Starter Code owners

## Prerequisites
* Service Worker, Cache API, ES6

## How to launch the app locally?
To run this example you'll need to use a local server. The easiest way to do so is to use the chrome extension but
you can launch the local http server using python as well. Please follow the steps mentioned below:

### Installation
1. Using Web Server Chrome extention
[Web Server extension link](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb/related?hl=en)

* Step-1 -- Fork the project repo and clone it in your local directory
* Step-2 -- Launch the Web Server extention
* Step-3 -- type 8000 in Enter port text box.
* Step-4 -- select foleder /FEND-mws-restaurant-stage-1 or wherever the project is cloned.
```
The application will be running at http://localhost:8000 URL
```
2. Using Python HTTP server
In the project folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

* Step-1 -- Fork the project repo and clone it in your local directory
* Step-2 -- Go to command prompt and CD into project directory
* Step-3 -- In a terminal, check the version of Python you have: `python -V`.
	-	3.a If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.)
	- 3.b For Python 3.x, you can use `python3 -m http.server 8000`.
```
If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
```
* Step-4 -- With your server running, visit the site: `http://localhost:8000`

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `mapboxToken:` with a token from [Mapbox-Access token?](https://www.mapbox.com/help/how-access-tokens-work/) in `main.js and restaurant_info.js`. Mapbox is free to use, and does not require any payment information.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code.

## Resources
- [Service Worker Lifecycle and Cache Management](https://www.oreilly.com/library/view/building-progressive-web/9781491961643/ch04.html)
- [Using the Cache API in the service worker](https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker)
- [All aria-* attribute](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def)
- [WebAIM Checklist for Accessibility](https://webaim.org/standards/wcag/checklist#sc1.4.6)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [ACCESSIBLE COLORS](http://accessible-colors.com/)
- [Difference between this and self in JavaScript](https://stackoverflow.com/questions/16875767/difference-between-this-and-self-in-javascript)
- [High Contrast Chrome extension](https://chrome.google.com/webstore/detail/high-contrast/djcfdncoelnlbldjfhinnjlhdjlikmph/related?hl=en)
- [Web Server for Chrome extension](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb/related?hl=en)

## Authors
* **Gaurav Singh**

## Acknowledgments
* **Special thanks to Udacity Team**

