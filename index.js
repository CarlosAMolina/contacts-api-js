#!/usr/bin/env node

import { server } from './src/server.js'

server
    .listen()
    .then(({url}) => console.log(`GraphQL Service running on ${url}`))
