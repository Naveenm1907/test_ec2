module.exports = {
  apps: [
    {
      name: "test-ec2",
      script: "./server.js",
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
