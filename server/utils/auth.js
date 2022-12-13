const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // receieves object that contains the request
  authMiddleware: function ({ req }) {
    // allows token to be sent via  req.body, req.query or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }
    // if token can't be verified, return empty request
    if (!token) {
      return req;
    }

    // verify token and get user data out of it
    // if token can be verified, add the user's data to the request so it can be accessed in the resolver
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    // return request object so it can be passed to the resolver
    return req;

  },
  signToken: function ({ username, email, _id }) {
    // will end up in context
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
