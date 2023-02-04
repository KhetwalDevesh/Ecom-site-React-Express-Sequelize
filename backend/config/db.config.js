module.exports = {
    HOST: 'localhost',
    USER: 'Devesh',
    PASSWORD: '@45V5s8abc',
    DB: 'ecom-mysql-v2',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}