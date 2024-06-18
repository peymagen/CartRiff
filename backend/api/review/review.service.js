const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO review ( title, type, message, ratting, description ) VALUES (?, ?, ?, ?, ? )`,
            [ data.title, data.type, data.message,data.ratting, data.description ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getreview: (callBack) => {
        pool.query(
            `SELECT * FROM review`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getreviewById: (id, callBack) => {
        pool.query(
            `SELECT * FROM review WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updatereview: (data, callBack) => {
        pool.query(
            `UPDATE review SET  title = ?, type = ?,message = ?, ratting =  ?,  description = ? WHERE id = ?`,
            [ data.title, data.type, data.message,data.ratting, data.description, data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deletereview: (id, callBack) => {
        pool.query(
            `DELETE FROM review WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results); 
            }
        );
    }
};
