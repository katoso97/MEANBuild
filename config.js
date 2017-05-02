module.exports = {
    // App Settings
    MONGO_URI: process.env.MONGO_URI || 'mongodb://Jack97:password@ds135800.mlab.com:35800/app-builder',
    TOKEN_SECRET: process.env.TOKEN_SECRET || 'californication',
    CONNECTION_STRING: 'mongodb://Jack97:password@ds135800.mlab.com:35800/app-builder',
    // OAuth 2.0
    FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || '4460256afea7a438f54e49b99aaf0876',
    GITHUB_SECRET: process.env.GITHUB_SECRET || 'f5ce2ebeb360ec25cb5b5ded53d6a1ace6937223',
    INSTAGRAM_SECRET: process.env.INSTAGRAM_SECRET || 'd95e398309ee4abc9659313ef6a73b4d ',
    BITBUCKET_SECRET: process.env.BITBUCKET_SECRET || 'YOUR_BITBUCKET_CLIENT_SECRET'
};
