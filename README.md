<!-- vscode-markdown-toc -->
* 1. [CakePHP Application Skeleton](#CakePHPApplicationSkeleton-0)
* 2. [Summary](#Summary-1)
* 3. [Installation](#Installation-2)
* 4. [Configuration](#Configuration-3)
* 5. [Front-End Directory Structure](#Front-EndDirectoryStructure-4)
* 6. [Roadmap](#Roadmap-5)

<!-- /vscode-markdown-toc -->

##  1. <a name='CakePHPApplicationSkeleton-0'></a>CakePHP Application Skeleton

[![Build Status](https://img.shields.io/travis/cakephp/app/master.svg?style=flat-square)](https://travis-ci.org/cakephp/app)
[![License](https://img.shields.io/packagist/l/cakephp/app.svg?style=flat-square)](https://packagist.org/packages/cakephp/app)

A skeleton for creating applications with [CakePHP](http://cakephp.org) 3.x.

The framework source code can be found here: [cakephp/cakephp](https://github.com/cakephp/cakephp).

##  2. <a name='Summary-1'></a>Summary 
Creating a web site for TJCCC by Jerry, Luke, and Taiwei.
* Back-End: PHP (Jerry)
* Front-End: Materialize (Luke)
* 2nd Front-End: AngularJS (Taiwei)

##  3. <a name='Installation-2'></a>Installation

1. Download [Composer](http://getcomposer.org/doc/00-intro.md) or update `composer self-update`.
2. Fork the Repo to your account.
3. Clone the Repo to your local machine.
4. In the directory from your local machine, do `composer install`.
5. Start the Apache server by using XAMPP Control Panel you installed earlier.
6. Open your browser. Go to `http://localhost:8765/` 


##  4. <a name='Configuration-3'></a>Configuration

Read and edit `config/app.php` and setup the 'Datasources' and any other
configuration relevant for your application.


##  5. <a name='Front-EndDirectoryStructure-4'></a>Front-End Directory Structure
```javascript
app/
----- shared/   // acts as reusable components or partials of our site
---------- header/
--------------- header.ctr.js
--------------- header.tpl.html
---------- footer/
--------------- footer.ctr.js
--------------- footer.html
----- components/   // each component is treated as a mini Angular app
---------- home/
--------------- home.ctrl.js
--------------- home.tpl.html
---------- organization/
--------------- organization.ctrl.js
--------------- organization.tpl.html
---------- error/
--------------- error.tpl.html
----- app.module.js
----- app.routes.js
assets/
----- img/      // Images and icons for your app
----- css/      // All styles and style related files (SCSS or LESS files)
----- js/       // JavaScript files written for your app that are not for angular
----- libs/     // Third-party libraries such as jQuery, Moment, Underscore, etc.
index.html
```

##  6. <a name='Roadmap-5'></a>Roadmap
According to Sam, basic structure will be:
> TJCCC WEBSITE
> 1. Organization bio and Bods Information 
> 2. Event information
> 3. Job opportunity
> 4. Human resource
> 5. Business promotion/ sponsorship
> 6. Membership
> 7. Tip
> 8. Contact/ FAQ
