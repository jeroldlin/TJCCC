<!-- vscode-markdown-toc -->
* 1. [CakePHP Application Skeleton](#CakePHPApplicationSkeleton-0)
* 2. [Installation](#Installation-1)
* 3. [Configuration](#Configuration-2)
* 4. [Front-End Development](#Front-EndDevelopment-3)

<!-- /vscode-markdown-toc -->

##  1. <a name='CakePHPApplicationSkeleton-0'></a>CakePHP Application Skeleton

[![Build Status](https://img.shields.io/travis/cakephp/app/master.svg?style=flat-square)](https://travis-ci.org/cakephp/app)
[![License](https://img.shields.io/packagist/l/cakephp/app.svg?style=flat-square)](https://packagist.org/packages/cakephp/app)

A skeleton for creating applications with [CakePHP](http://cakephp.org) 3.x.

The framework source code can be found here: [cakephp/cakephp](https://github.com/cakephp/cakephp).

##  2. <a name='Installation-1'></a>Installation

1. Download [Composer](http://getcomposer.org/doc/00-intro.md) or update `composer self-update`.
2. Run `php composer.phar create-project --prefer-dist cakephp/app [app_name]`.

If Composer is installed globally, run
```bash
composer create-project --prefer-dist cakephp/app [app_name]
```

You should now be able to visit the path to where you installed the app and see
the setup traffic lights.

##  3. <a name='Configuration-2'></a>Configuration

Read and edit `config/app.php` and setup the 'Datasources' and any other
configuration relevant for your application.

##  4. <a name='Front-EndDevelopment-3'></a>Front-End Development

Please got to `front_end_dev` folder to see more instructure.