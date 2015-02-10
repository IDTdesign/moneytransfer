# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
	# ...
	templateData:
		site:
			# The production url of our website. Used in sitemap and rss feed
			url: "http://IDTdesign.github.io/moneytransfer"

			# The website's styles
			styles: [
				'/css/template.css'
			]

			# The website's production scripts.
			# See also Environments section below for development scripts
			scripts: [
				'/vendor/bootstrap/js/bootstrap.min.js'
				'/vendor/sticky/jquery.sticky.min.js'
				'/vendor/jquery.localScroll/jquery.localScroll.min.js'
				'/vendor/jquery.scrollTo/jquery.scrollTo.min.js'
				'/vendor/bowser/bowser.min.js'
				'/scripts/forms.js'
				'/scripts/script.js'
			]

	# Environments

	environments:
		development:
			templateData:
				site:
					url: ''

	# Plugins configurations
	plugins:
		ghpages:
			deployRemote: 'deploy'
			deployBranch: 'gh-pages'
}

# Export the DocPad Configuration
module.exports = docpadConfig
