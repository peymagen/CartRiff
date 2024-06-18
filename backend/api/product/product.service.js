const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO product ( title, image, description, price ) VALUES (?, ?, ?, ? )`,
            [data.title,data.image,data.description,data.price],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getproduct: (callBack) => {
        pool.query(
            `SELECT * FROM product`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getproductById: (id, callBack) => {
        pool.query(
            `SELECT * FROM product WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateproduct: (data, callBack) => {
        pool.query(
            `UPDATE product SET  title = ?, image = ?,  description = ?, price = ? WHERE id = ?`,
            [data.title,data.image,data.description,data.price,data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deleteproduct: (id, callBack) => {
        pool.query(
            `DELETE FROM product WHERE id = ?`,
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
