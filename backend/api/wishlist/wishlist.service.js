const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO wishlist ( title, description, image, price  ) VALUES (?, ?, ?, ? )`,
            [data.title,data.description,data.image,data.price],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getwishlist: (callBack) => {
        pool.query(
            `SELECT * FROM wishlist`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getwishlistById: (id, callBack) => {
        pool.query(
            `SELECT * FROM wishlist WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updatewishlist: (data, callBack) => {
        pool.query(
            `UPDATE wishlist SET  title = ?, description = ?, image = ?, price = ? WHERE id = ?`,
            [data.title,data.description,data.image,data.price,data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deletewishlist: (id, callBack) => {
        pool.query(
            `DELETE FROM wishlist WHERE id = ?`,
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
