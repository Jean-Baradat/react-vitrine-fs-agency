const axios = require("axios");

exports.handler = async function (event, context) {
    try {
        const response = process.env.ID;

        return {
            statusCode: 200,
            body: response,
        };
    } catch (err) {
        return {
            statusCode: 404,
            body: err.toString(),
        };
    }
};
