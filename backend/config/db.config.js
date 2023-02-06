module.exports = {
    HOST: 'sql12.freesqldatabase.com',
    USER: 'sql12596029',
    PASSWORD: 'hVDAEkJiGn',
    DB: 'sql12596029',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}