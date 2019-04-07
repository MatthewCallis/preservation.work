const StorageProvider = require('uttori-storage-provider-json-file');
const SearchProvider = require('uttori-search-provider-lunr');
const UploadProvider = require('uttori-upload-provider-multer');
const Renderer = require('uttori-renderer-markdown-it');

require('dotenv').config();

const config = {
  // Use the Markdown Renderer
  Renderer,

  // Use the JSON to Disk Storage Provider
  StorageProvider,

  // Path in which to store content (markdown files, etc.)
  content_dir: `${__dirname}/content`,

  // Path in which to store content history (markdown files, etc.)
  history_dir: `${__dirname}/content/history`,

  // Path in which to store data (analytics, etc.)
  data_dir: `${__dirname}/data`,

  // Use the Lunr Search Provider
  SearchProvider,

  // Optional Lunr locale
  lunr_locales: [],

  // Use the Multer Upload Provider
  UploadProvider,

  // Path in which to store uploads (images etc.)
  uploads_dir: `${__dirname}/uploads`,

  // Your site title (format: page_title - site_title)
  site_title: 'Preservation Work Wiki',

  // Used in the navbar as your site title.
  site_header: 'Preservation Work Wiki',

  // Used as the footer text of your site.
  site_footer: 'preservation.work',

  // Your site sections for homepage. For each section below, the home page
  // will display a section box that lists the document count for documents
  // that have a matching tag. Clicking the section link will list the documents.
  site_sections: [],

  home_page: 'home-page',

  // Excerpt length (used in search)
  excerpt_length: 400,

  // Application base url used for canonical URLs and Open Graph; no trailing slash.
  site_url: 'https://preservation.work',

  // Specify the theme to use
  theme_dir: `${__dirname}/themes/`,
  theme_name: 'default',

  // Path to the static file directory for themes
  public_dir: `${__dirname}/themes/default/public/`,

  // Enable hiding document deletion behind a private key
  use_delete_key: true,

  // Key used for verifying document deletion
  delete_key: process.env.DELETE_KEY || '',

  // Enable reCaptcha on Creation & Document Editing
  use_recaptcha: false,

  // reCaptcha Site key
  recaptcha_site_key: process.env.RECAPTCHA_SITE_KEY || '',

  // reCaptcha Secret key
  recaptcha_secret_key: process.env.RECAPTCHA_SECRET_KEY || '',

  // Enable Google Analytics
  use_google_analytics: true,

  // Google Analytics UA ID
  google_analytics_id: process.env.GOOGLE_ANALYTICS_ID || '',

  // Use OpenGraph and Meta Data
  use_meta_data: true,

  // Open Graph: Site Description
  site_description: 'Guides and instructions on preserving a wide variety of media and materials.',

  // Open Graph: Locale
  site_locale: 'en_US',

  // Open Graph: Twitter Site Handle
  site_twitter_site: '@superfamicom',

  // Open Graph: Twitter Creator Handle
  site_twitter_creator: '@superfamicom',

  // Open Graph: Image
  site_image: '',

  // Sitemap URL (ie httsp://sfc.fm)
  sitemap_url: 'https://preservation.work',

  // Sitemap URL Filter
  sitemap_url_filter: [],

  // Sitemap XML Header
  sitemap_header: '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">',

  // Sitemap XML Footer
  sitemap_footer: '</urlset>',

  // Sitemap Filename
  sitemap_filename: 'sitemap.xml',
};

module.exports = config;
