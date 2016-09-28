<!-- vscode-markdown-toc -->
* 1. [Summary](#Summary-0)
* 2. [Front-End Directory Structure](#Front-EndDirectoryStructure-1)
* 3. [HTML and Stylesheets (Luke, check here)](#HTMLandStylesheetsLukecheckhere-2)
* 4. [Roadmap](#Roadmap-3)

<!-- /vscode-markdown-toc -->


##  1. <a name='Summary-0'></a>Summary 
Creating a web site for TJCCC by Jerry, Luke, and Taiwei.
* Back-End: PHP (Jerry)
* Front-End: Materialize (Luke)
* 2nd Front-End: AngularJS (Taiwei)



##  2. <a name='Front-EndDirectoryStructure-1'></a>Front-End Directory Structure
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
assets/
----- img/      // Images and icons for your app
----- css/      // All styles and style related files
----- js/       // JavaScript files written for your app that are not for angular
----- libs/     // Third-party libraries such as jQuery, Moment, Underscore, etc.
index.html
```

##  3. <a name='HTMLandStylesheetsLukecheckhere-2'></a>HTML and Stylesheets (Luke, check here)
Luke, All the html content is stored in directory of `app/components/{{page_name}}/{{page_name.tpl.html}}`.
For header and footer, they are stored seperately. For example, header is stored at `app/shared/header/header.tpl.html`

For stylesheet and any CSS files, please store them at `assets/css`. Also, store any web components such as images, javascripts under the `assets/` folder to keep it organized, easy to access and debug.

Jerry, the `{{page_name}}.ctr.js` are angular controller, these are for RESTful API. Either you can use PHP to do the work, or I can use angular to do so. Let me know what you think.

Thank you!


##  4. <a name='Roadmap-3'></a>Roadmap
According to Sam, basic structure will be:
TJCCC WEBSITE
1. Organization bio and Bods Information 
2. Event information
3. Job opportunity
4. Human resource
5. Business promotion/ sponsorship
6. Membership
7. Tip
8. Contact/ FAQ
