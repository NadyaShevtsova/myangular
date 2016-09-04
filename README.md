# Myangular
  Build My Own AngularJS following by book [Build Your Own AngularJS](http://teropa.info/build-your-own-angular/).
  It's enable static analysis with [JSHint](http://jshint.com/) and unit testing with [Jasmine](http://jasmine.github.io/2.0/introduction.html) and [Karma](http://karma-runner.github.io/).
The project was set up using [NPM](https://www.npmjs.com/) and [Browserify](http://browserify.org/).
  
## Installing

	git clone git@github.com:NadyaShevtsova/myangular.git
	cd myangular

Instead of going through the installation process of **<span style="color:#4078c0">Node</span>** here, I’ll just point you to the the official [installation instructions](https://nodejs.org/download/).
Before continue, make sure you have the `node`, and `npm` commands working in your terminal. 
Here’s what they look like on my machine:

	node -v
	> v5.9.1
	npm -v
	> 3.7.3
	
1.Let’s install **<span style="color:#4078c0">JSHint</span>** package with the npm command:

	npm install --save-dev jshint

2.Let’s install **<span style="color:#4078c0">Jasmine</span>**(test framework) and **<span style="color:#4078c0">Sinon</span>**:

	npm install --save-dev jasmine-core sinon
	
3.Then, let’s add **<span style="color:#4078c0">Karma</span>** along with some of the **<span style="color:#4078c0">Karma</span>** plugins that we’ll need:

	npm install --save-dev karma karma-jasmine karma-jshint-preprocessor
	
4.Let’s also install the **<span style="color:#4078c0">PhantomJS</span>** headless web browser, inside which Karma will actually run the tests:

	npm install --save-dev phantomjs-prebuilt karma-phantomjs-launcher
	
5.Let’s install **<span style="color:#4078c0">Browserify</span>**:

	npm install --save-dev browserify watchify karma-browserify

6.Let’s install **<span style="color:#4078c0">Lodash</span>** and **<span style="color:#4078c0">JQuery</span>**: 

	npm install --save lodash@4 jquery
	
Now let’s run the test by starting Karma: 

	npm test
