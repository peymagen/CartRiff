const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO subscription ( email ) VALUES (? )`,
            [data.email],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getsubscription: (callBack) => {
        pool.query(
            `SELECT * FROM subscription`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getsubscriptionById: (id, callBack) => {
        pool.query(
            `SELECT * FROM subscription WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updatesubscription: (data, callBack) => {
        pool.query(
            `UPDATE subscription SET  email = ? WHERE id = ?`,
            [data.email,data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deletesubscription: (id, callBack) => {
        pool.query(
            `DELETE FROM subscription WHERE id = ?`,
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
