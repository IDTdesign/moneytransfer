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
			#scripts: [
			#	'/js/output.min.js'
			#]

	# Environments

	environments:
		development:
			templateData:
				site:
					url: 'http://10.94.4.93:9778'

	# Plugins configurations
	plugins:
		ghpages:
			deployRemote: 'deploy'
			deployBranch: 'gh-pages'
}

# Export the DocPad Configuration
module.exports = docpadConfig
