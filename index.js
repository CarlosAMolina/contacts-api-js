#!/usr/bin/env node

import { server } from './src/server.js'

const port = 4001

server
    .listen(port)
    .then(({url}) => console.log(`GraphQL Service running on ${url}`))
