const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO contact  (title, email, phone_number, description) VALUES (?, ?, ?, ?)`,
            [data.title,data.email,data.phone_number,data.description],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getcontact: (callBack) => {
        pool.query(
            `SELECT * FROM contact`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getcontactById: (id, callBack) => {
        pool.query(
            `SELECT * FROM contact WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updatecontact: (data, callBack) => {
        pool.query(
            `UPDATE contact SET title = ?, email = ?, phone_number = ?, description = ? WHERE id = ?`,
            [data.title,data.email,data.phone_number,data.description,data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deletecontact: (id, callBack) => {
        pool.query(
            `DELETE FROM contact WHERE id = ?`,
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
