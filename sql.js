const { execSync } = require('child_process');

// Ejecuta los comandos uno por uno
try {
  execSync('sequelize-cli db:create');
  execSync('sequelize-cli db:migrate'); 
  execSync('sequelize-cli db:seed:all'); 
} catch (error) {
  console.error('Error al ejecutar el comando:', error.message);
}
