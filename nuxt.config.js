const pkg = require('./package')
const express = require('express');
const session = require('express-session');

module.exports = {
  mode: 'universal',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", type: "text/css", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;900&display=swap" }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js' },
      { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    '@/assets/scss/app.scss'
  ],
  plugins: [
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {},
  build: {
    extend(config, ctx) {
    }
  },
  serverMiddleware: [
    express.json(),
    session({
      secret: '12345',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 6000000
      }
    }),
    '~/server/routes/users'
  ],
}
