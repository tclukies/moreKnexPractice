// Update with your config settings.

module.exports = {
    development: {
        client: "pg",
        connection: "postgresql://localhost/cats_two"
    },

    production: {
        client: "postgresql",
        connection: process.env.DATABASE_URL
    }
};
