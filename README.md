# iframe-responsify
**A simple, lightweight jQuery plugin to make iframes responsive.**

This plugin uses a CSS method of responsifying an iframe by adding a container around the iframe with a percentage based padding. This is a lightweight approach that allows the javascript to run on document ready rather then resize. It will take the aspect ratio of the current iframe and calculates the padding percentage so that the iframe maintains its aspect ration at whatever size its container is.

## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="dist/jquery.iframe-responsify.min.js"></script>
	```

3. Call the plugin:

	```javascript
	$("#element iframe").iframeResponsify();
	```
	
## Demo

1. Clone or download the respository
2. Run ```npm install ``` Inside the directory root
3. Open ```demo/index.html``` in your browser

## Contributing

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Make your changes on the src folder, never on the dist folder.
4. Commit your changes: git commit -m 'Add some feature'
5. Push to the branch: git push origin my-new-feature
6. Submit a pull request :D
