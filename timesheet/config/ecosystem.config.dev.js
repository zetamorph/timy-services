module.exports = {
  apps: [{
    exec_mode: 'fork',
    name: 'timesheet',
    node_args: [
      "--inspect=0.0.0.0:9222"
    ],
    script: '/app/dist/main.js',
    watch: true,
    env: {
      NODE_ENV: 'development'
    }
  }]
}