const pkg = require('./package')
const express = require('express');
const session = require('express-session');
require('dotenv').config();
const manifest = require('./manifest.json');
//const BASE_URL = 'http://localhost:4000';
//const BASE_URL = 'http://159.69.120.82';
const BASE_URL = 'https://worxconnect.com/site';
module.exports = {
  env: {
    Base: BASE_URL,
    title: 'WorXconnect',
    baseUrl: process.env.BASE_URL || BASE_URL,
    basaJava: "https://worxconnect.com"
  },
  helmet: {
    dnsPrefetchControl: true,
    expectCt: true,
    frameguard: true,
    hsts: true,
    ieNoOpen: true,
    noSniff: true,
    permittedCrossDomainPolicies: true,
    referrerPolicy: true,
  },
  sitemap: {
    hostname: BASE_URL,
    gzip: true,
    path: '/sitemap.xml',
    exclude: [
      '/admin/**'
    ],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },
  manifest: manifest,
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'WorXconnect',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=5' },
      { 'http-equiv': 'Cache-Control', content: 'public, max-age=1800, max-stale, stale-while-revalidate=86400, stale-if-error=259200', rem: 'max-age=30minutes' },
      { 'http-equiv': 'Page-Enter', content: 'RevealTrans(Duration=2.0,Transition=2)' },
      { 'http-equiv': 'Page-Exit', content: 'RevealTrans(Duration=3.0,Transition=12)' },
      { name: 'mssmarttagspreventparsing', content: 'true' },
      { hid: 'robots', name: 'robots', content: 'all,index,follow' },
      { name: 'apple-mobile-web-app-capable', content: "yes" },
      { name: 'apple-mobile-web-app-status-bar-style', content: "white" },
      { name: 'apple-touch-fullscreen', content: 'yes' },
      { name: "format-detection", content: "telephone=no" },
      { name: 'description', content: 'WorXconnect helps companies find the best employees for their business and field. It enables small to mid-size businesses growth at an affordable and scalable environment whilst producing career opportunities.' },
      { name: 'keywords', content: 'Zimworx, Zimbojobs, GlobalBPSolutions' },
      { name: 'target', content: 'all' },
      { name: 'audience', content: 'all' },
      { name: 'coverage', content: 'WorldWide' },
      { name: 'distribution', content: 'Global' },
      { name: 'rating', content: 'safe for kids' },
      { name: 'copyright', content: 'Zimworx' },
      { name: 'url', content: BASE_URL },
      { name: 'identifier-URL', content: BASE_URL },
      { name: 'author', content: 'Tinashe Zvihwati' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'WorXconnect' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'WorXconnect' },
      { property: 'og:description', content: 'WorXconnect helps companies find the best employees for their business and field. It enables small to mid-size businesses growth at an affordable and scalable environment whilst producing career opportunities.' },
      { hid: 'og:url', property: 'og:url', content: BASE_URL },
      { hid: 'og:image', property: 'og:image', content: '/images/globalbpsolutions.jpg' },
      { hid: 'og:image:width', property: 'og:image:width', content: 1200 },
      { hid: 'og:image:height', property: 'og:image:height', content: 630 },
      { hid: 'og:locale', property: 'og:locale', content: 'en_GB' },
      { hid: 'og:email', property: 'og:email', content: 'info@worxconnect.com' },
      { hid: 'og:phone_number', property: 'og:phone_number', content: '+1 940 757 0022' },
      { hid: 'og:latitude', property: 'og:latitude', content: '33.120605' },
      { hid: 'og:longitude', property: 'og:longitude', content: '-97.185202' },
      { hid: 'og:street-address', property: 'og:street-address', content: '440 US-377 Suite 1140, Argyle, TX 76226, United States' },
      { hid: 'og:locality', property: 'og:locality', content: 'Argyle' },
      { hid: 'og:region', property: 'og:region', content: 'Texas' },
      { hid: 'og:country-name', property: 'og:country-name', content: 'US' },
      { property: 'twitter:title', content: 'WorXconnect' },
      { property: 'twitter:description', content: 'WorXconnect helps companies find the best employees for their business and field. It enables small to mid-size businesses growth at an affordable and scalable environment whilst producing career opportunities.' },
      { property: 'twitter:image', content: '/images/globalbpsolutions.jpg' },
      { hid: 'twitter:card', property: 'twitter:card', content: '' },
      { hid: 'twitter:site', property: 'twitter:site', content: '' },
      { hid: 'twitter:creator', property: 'twitter:creator', content: 'Tinashe Zvihwati' },
      { hid: 'fb:app_id', property: 'fb:app_id', content: '' },
      { hid: 'google-site-verification', name: 'google-site-verification', content: '' },
      { hid: 'msvalidate.01', name: 'msvalidate.01', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: "64x64", href: '/icons/icon.png' },
      { rel: "stylesheet", type: "text/css", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;900&display=swap" },
      { rel: "stylesheet", href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js' },
      { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js' },
      {
        hid: 'tawk.to',
        src:
            'https://embed.tawk.to/628423f57b967b11798fe3cf/1g3a2ou9d',
        defer: true
    }
    ]
  },
  loading: { color: '#fff' },
  css: [
    '@/assets/scss/app.scss'
  ],
  plugins: [
    '~/plugins/vuesax',
    { src: '~/plugins/vue-calendly', mode: 'client' }
  ],
  modules: [
    "@nuxtjs/axios",
  ],
  build: {
    extend(config, ctx) {
    }
  },
  serverMiddleware: [
    express.json(),
  ],
  auth: {
  },

  axios: {
    baseURL: BASE_URL + '/api'
  }
}
