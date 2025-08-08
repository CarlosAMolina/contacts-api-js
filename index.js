#!/usr/bin/env node

import { server } from './src/server.js'

const port = typeof process.argv[2] === 'undefined' ? 4000 : process.argv[2];

server
    .listen(port)
    .then(({url}) => console.log(`GraphQL Service running on ${url}`))
