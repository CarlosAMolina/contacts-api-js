#!/usr/bin/env node

import { server } from './src/server.js'

const port = typeof process.env.API_PORT === 'undefined' ? 4000 : process.env.API_PORT;

server
    .listen(port)
    .then(({url}) => console.log(`GraphQL Service running on ${url}`))
