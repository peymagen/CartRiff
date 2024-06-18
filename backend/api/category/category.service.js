const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO category ( title ) VALUES (? )`,
            [data.title],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getcategory: (callBack) => {
        pool.query(
            `SELECT * FROM category`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getcategoryById: (id, callBack) => {
        pool.query(
            `SELECT * FROM category WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updatecategory: (data, callBack) => {
        pool.query(
            `UPDATE category SET  title = ? WHERE id = ?`,
            [data.title,data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deletecategory: (id, callBack) => {
        pool.query(
            `DELETE FROM category WHERE id = ?`,
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
