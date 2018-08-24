module.exports = {
    apps: [{
      exec_mode: 'fork',
      name: 'timesheet',
      script: '/app/dist/main.js',
      env: {
        NODE_ENV: 'production'
      }
    }]
}