#!/usr/bin/env node

import { server } from './src/server.js'

const port = 4000

server
    .listen(port)
    .then(({url}) => console.log(`GraphQL Service running on ${url}`))
