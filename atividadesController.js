const axios = require('axios');

exports.retornaAtividadesOrdenadas = function (req, res) {
    axios.get(`https://raw.githubusercontent.com/krypton-tech/test-dev-2021/main/atividades.json`)
        .then(response => {
            const page = req.body.page || 1,
                perPage = req.body.perPage || 5,
                offset = (page - 1) * perPage,
                items = response.data.sort((a, b) => a.hora.localeCompare(b.hora)),
                paginatedItems = items.slice(offset).slice(0, perPage),
                totalPages = Math.ceil(items.length / perPage);

            res.send({
                page,
                perPage,
                prePage: page - 1 ? page - 1 : null,
                nextPage: (totalPages > page) ? page + 1 : null,
                total: items.length,
                totalPages,
                data: paginatedItems
            });
        })
        .catch(error => {
            console.log(error);
            res.status(error.status).send(error.data);
        });
};