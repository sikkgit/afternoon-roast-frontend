# Afternoon Roast
[Video Demo](https://youtu.be/nqb_-oCB6AM)

![enter image description here](https://i.ibb.co/b5w9gqW/Screen-Shot-2020-11-29-at-10-39-10-PM.png)

A Morning Brew-inspired simple content management system that allows writers to create stories, attach stories to a particular newsletter, and ultimately "publish" the newsletter to an API.

[Link to Backend API](https://github.com/vuonga1103/afternoon-roast-backend)

## Table of Contents
* [Getting Started](#getting-started)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Tools](#tools)

<a name="getting-started"/>

## Getting Started
1. Install [Rails Backend API](https://github.com/vuonga1103/afternoon-roast-backend)
2. Install [Node.js and npm](https://www.npmjs.com/get-npm)
    ```$ brew install node```
3. Clone this repo and cd into the directory
4. Install all dependencies
    ```$ npm install```
5. Obtain [TinyMCE API Key](http://tiny.cloud/) and include in `.env.local` in the following format: 
```REACT_APP_TINY_MCE_KEY=<YOUR KEY HERE> ```
6. Make sure the Rails server is running and then run the app
    ```$ npm start```
    
<a name="features"/>

## Features

### Stories and Newsletters
* View an index of all stories and newsletter issues, organized by date

![Afternoon Roast screenshot](https://i.ibb.co/2SQP6sg/Screen-Shot-2020-11-29-at-10-36-20-PM.png)

* View, create, preview, submit, edit, and delete a story using TinyMCE editor (persisted to Lyra API)

![Screenshot](https://i.ibb.co/BgnKtf2/Screen-Shot-2020-11-29-at-10-45-36-PM.png)

![Screenshot](https://i.ibb.co/xDTWbGK/Screen-Shot-2020-11-29-at-10-47-03-PM.png)

![Screenshot](https://i.ibb.co/BNCBLpT/Screen-Shot-2020-11-29-at-10-44-13-PM.png)

* Build a newsletter issue

![Screenshot](https://i.ibb.co/TPt2BvX/Screen-Shot-2020-11-29-at-10-56-34-PM.png)

* Preview and submit the newsletter with stories submitted within the issue date (persisted to Lyra API)

![Screenshot](https://i.ibb.co/QrpMD6P/Screen-Shot-2020-11-29-at-10-57-51-PM.png)

![Screenshot](https://i.ibb.co/KXms0fG/Screen-Shot-2020-11-29-at-10-58-29-PM.png)

* Delete a newsletter issue (which undoes publishing to API and un-associates stories with newsletter issue)

![Screenshot](https://i.ibb.co/9WTND1q/Screen-Shot-2020-11-29-at-10-59-19-PM.png)

<a name="tech-stack"/>

## Tech Stack
* React.js
* Ruby on Rails API (Backend: https://github.com/vuonga1103/afternoon-roast-backend)
* PostgreSQL
* HTML/CSS
* Material UI
* Active Record

<a name="tools"/>

## Tools
* [Rack CORS](https://github.com/cyu/rack-cors)
* [ActiveModel::Serializer](https://github.com/rails-api/active_model_serializers)
* [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
* [Axios](https://www.npmjs.com/package/axios)
* [TinyMCE](https://github.com/tinymce/tinymce-react)
* [Sanitize HTML](https://www.npmjs.com/package/sanitize-html)
* [HTML React Parser](https://github.com/remarkablemark/html-react-parser)
