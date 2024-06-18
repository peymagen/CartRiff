const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO user (name, email, address, city, phone_number, image, password ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [data.name,data.email,data.address,data.city,data.phone_number,data.image,data.password],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getuser: (callBack) => {
        pool.query(
            `SELECT * FROM user`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getuserById: (id, callBack) => {
        pool.query(
            `SELECT * FROM user WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getUserByUserEmail: (id, callBack) => {
        pool.query(
            `select name, email, address, city, phone_number, image, password from user where email = ?`,
            [id],
            (error, results, fields) => {
                console.log(results)
                if (error) {
                    return callBack(error);
                }

                return callBack(null, results);
            }
        );
    },
    updateuser: (data, callBack) => {
        pool.query(
            `UPDATE user SET name = ?, email = ?, address = ?, city = ?, phone_number = ?, image = ?, password = ?  WHERE id = ?`,
            [data.name,data.email,data.address,data.city,data.phone_number,data.image,data.password,data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deleteuser: (id, callBack) => {
        pool.query(
            `DELETE FROM user WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateUserpassword: (data, callback) => {
        pool.query(
            `UPDATE user SET password = ? WHERE email = ?`,
            [data.password, data.email],
            (error, results, fields) => {
                console.log("UPDATE user SET password = "+data.password+" WHERE email = "+data.email)
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    }
};
