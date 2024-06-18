const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO cart ( title, description, image, price  ) VALUES (?, ?, ?, ? )`,
            [data.title,data.description,data.image,data.price],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getcart: (callBack) => {
        pool.query(
            `SELECT * FROM cart`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getcartById: (id, callBack) => {
        pool.query(
            `SELECT * FROM cart WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updatecart: (data, callBack) => {
        pool.query(
            `UPDATE cart SET  title = ?, description = ?, image = ?, price = ? WHERE id = ?`,
            [data.title,data.description,data.image,data.price,data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deletecart: (id, callBack) => {
        pool.query(
            `DELETE FROM cart WHERE id = ?`,
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
