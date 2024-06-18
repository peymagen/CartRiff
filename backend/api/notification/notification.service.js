const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO notification ( name, description, user_id ) VALUES ( ?, ?, ?)`,
            [data.name,data.description,data.user_id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getnotification: (callBack) => {
        pool.query(
            `SELECT * FROM notification`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getnotificationById: (id, callBack) => {
        pool.query(
            `SELECT * FROM notification WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updatenotification: (data, callBack) => {
        pool.query(
            `UPDATE notification SET name = ?, description = ?, user_id = ? WHERE id = ?`,
            [data.name,data.description,data.user_id,data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deletenotification: (id, callBack) => {
        pool.query(
            `DELETE FROM notification WHERE id = ?`,
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
