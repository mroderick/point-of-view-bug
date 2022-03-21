# Reproducible test case for caching bug in `point-of-view`

This reporsitory contains a minimal, reproducible test case for a
caching bug in `point-of-view`

## How to reproduce

1. Clone this repository
1. `npm ci`
1. `NODE_ENV=production npm start`
1. Navigate to `http://localhost:3000/first`
1. Observe that the string "First partial" is present
1. Navigate to `http://localhost:3000/second`
1. Observe that the string "First partial" is also present in this page. According to the code, it should say "Second partial"
