const config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  serverport: process.env.SV_PORT || 3000,
  serverHost: process.env.SV_HOST || 'localhost',
  databaseHost: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'booking',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
}

module.exports = config
