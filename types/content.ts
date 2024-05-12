import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export type item = {
	title: string, // The title of the item.
	link: string, // The URL of the item.
	description: string, // The item synopsis.
	author: string, // Email address of the author of the item.
	category: string, // Includes the item in one or more categories.
	comments: string, // URL of a page for comments relating to the item.
	enclosure: string, // Describes a media object that is attached to the item.
	guid: string, // A string that uniquely identifies the item.
	pubDate: Date, // Indicates when the item was published.
	source: string // The RSS channel that the item came from.
}

export type textInput = {
	title: string, // The label of the Submit button in the text input area.
	description: string, // Explains the text input area.
	name: string, // The name of the text object in the text input area.
	link: string // The URL of the CGI script that processes text input requests.
}

export type image = {
	url: string, // The URL of a GIF, JPEG or PNG image that represents the channel.
	title: string, // Describes the image, it's used in the ALT attribute of the HTML <img> tag when the channel is rendered in HTML.
	link: string // The URL of the site, when the channel is rendered, the image is a link to the site.
}

export type channel = {
	description: string, // Phrase or sentence describing the channel.
	link: string, // The URL to the HTML website corresponding to the channel.
	title: string, // The name of the channel. It's how people refer to your service. If you have an HTML website that contains the same information as your RSS file, the title of your channel should be the same as the title of your website.
	category: string, // Specify one or more categories that the channel belongs to. Follows the same rules as the <item>-level category element. More info.
	cloud: string, // 	Allows processes to register with a cloud to be notified of updates to the channel, implementing a lightweight publish-subscribe protocol for RSS feeds
	copyright: string, // Copyright notice for content in the channel.
	docs: string, // A URL that points to the documentation for the format used in the RSS file. It's probably a pointer to this page. It's for people who might stumble across an RSS file on a Web server 25 years from now and wonder what it is.
	generator: string, // A string indicating the program used to generate the channel.
	image: image, // Specifies a GIF, JPEG or PNG image that can be displayed with the channel.
	language: string, // The language the channel is written in. This allows aggregators to group all Italian language sites, for example, on a single page. A list of allowable values for this element, as provided by Netscape, is here. You may also use values defined by the W3C.
	lastBuildDate: Date, // The last time the content of the channel changed.
	managingEditor: string, // Email address for person responsible for editorial content.
	pubDate: Date, // The publication date for the content in the channel. For example, the New York Times publishes on a daily basis, the publication date flips once every 24 hours. That's when the pubDate of the channel changes. All date-times in RSS conform to the Date and Time Specification of RFC 822, with the exception that the year may be expressed with two characters or four characters (four preferred).
	rating: string, // The PICS rating for the channel.
	skipDays: number, // A hint for aggregators telling them which days they can skip. This element contains up to seven <day> sub-elements whose value is Monday, Tuesday, Wednesday, Thursday, Friday, Saturday or Sunday. Aggregators may not read the channel during days listed in the <skipDays> element.
	skipHours: number, // A hint for aggregators telling them which hours they can skip. This element contains up to 24 <hour> sub-elements whose value is a number between 0 and 23, representing a time in GMT, when aggregators, if they support the feature, may not read the channel on hours listed in the <skipHours> element.
	textInput: textInput, // Specifies a text input box that can be displayed with the channel.
	ttl: number, // ttl stands for time to live. It's a number of minutes that indicates how long a channel can be cached before refreshing from the source.
	webMaster: string, // Email address for person responsible for technical issues relating to channel.
	item: Array<item>
}

// RSS draft 1.18
export type rss = {
	channel: channel
}

export type Feed = {
	rss: rss
}

// Extended feed information
export interface NuxtFeed extends ParsedContent {

}

// Extended content information
export interface NuxtContent extends ParsedContent {
	title: string
	link: string
	data: Date
}
