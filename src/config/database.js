module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'empresas-backend',
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  };