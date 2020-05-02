const express = require('express')
const app = express()
const jwt = require('express-jwt')
const jwtAuthz = require('express-jwt-authz')
const jwksRsa = require('jwks-rsa')
require('dotenv-safe').config()

const port = process.env.PORT 
const issuer = process.env.ISSUER

// Authentication middleware. When used, the
// Access Token must exist and be verified against
// the Auth0 JSON Web Key Set
const checkJwt = jwt({
    // Dynamically provide a signing key
    // based on the kid in the header and 
    // the signing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: issuer + '/.well-known/jwks.json'
    }),

    // Validate the audience and the issuer.
    audience: audience,
    issuer: issuer,
    algorithms: ['RS256']
})

// This route doesn't need authentication
app.get('/public', function(req, res) {
  res.json({
    message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
  })
})

// This route needs authentication
app.get('/private', checkJwt, function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated to see this.'
  })
})

const checkScopes = jwtAuthz([ 'read:all' ]);

app.get('/private-scoped', checkJwt, checkScopes, function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
  })
})

app.listen(port)
console.log('listening on port ' + port + '...')