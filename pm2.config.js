
module.exports = [{
  script: 'node_modules/.bin/next start',
  name: 'rental_web',
  instances: 1,
  autorestart: true,
  watch: false,
  max_memory_restart: '2G',
}]
