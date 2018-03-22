const dbuser = process.env.NOTABLE_DB_USER
const dbpass = process.env.NOTABLE_DB_PASS

module.exports = {
  url: `mongodb://${dbuser}:${dbpass}@ds221609.mlab.com:21609/notable_api`
}