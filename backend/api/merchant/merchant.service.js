const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO merchant ( name, email, phone_number, address, state, city, d_o_j, gst, pan, language, company, image, pin, merchant_document, product_order, tracking, type ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [data.name,data.email,data.phone_number,data.address,data.state,data.city,data.d_o_j,data.gst,data.pan,data.language,data.company,data.image,data.pin,data.merchant_document,data.product_order,data.tracking,data.type],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getmerchant: (callBack) => {
        pool.query(
            `SELECT * FROM merchant`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getmerchantById: (id, callBack) => {
        pool.query(
            `SELECT * FROM merchant WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updatemerchant: (data, callBack) => {
        pool.query(
            `UPDATE merchant SET name = ?, email = ?, phone_number = ?, address = ?, state = ?, city = ?, d_o_j = ?, gst = ?, pan = ?, language = ?, company = ?, image = ?, pin = ?, merchant_document = ?, product_order = ?, tracking = ?, type = ? WHERE id = ?`,
            [data.name,data.email,data.phone_number,data.address,data.state,data.city,data.d_o_j,data.gst,data.pan,data.language,data.company,data.image,data.pin,data.merchant_document,data.product_order,data.tracking,data.type,data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deletemerchant: (id, callBack) => {
        pool.query(
            `DELETE FROM merchant WHERE id = ?`,
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
