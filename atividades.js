const atividadesController = require('../controllers/atividadesController');

module.exports = function (app) {
    app.post('/atividades', atividadesController.retornaAtividadesOrdenadas);
}