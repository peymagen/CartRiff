const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO billing ( name, company_name, street_address, apartment_floor_etc, city, phone_number, email ) VALUES (?, ?, ?, ?, ?, ?, ? )`,
            [data.name,data.company_name,data.street_address,data.apartment_floor_etc,data.city,data.phone_number,data.email],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getbilling: (callBack) => {
        pool.query(
            `SELECT * FROM billing`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getbillingById: (id, callBack) => {
        pool.query(
            `SELECT * FROM billing WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updatebilling: (data, callBack) => {
        pool.query(
            `UPDATE billing SET  name = ?, company_name = ?, street_address = ?, apartment_floor_etc = ?, city = ?, phone_number = ?, email = ? WHERE id = ?`,
            [data.name,data.company_name,data.street_address,data.apartment_floor_etc,data.city,data.phone_number,data.email,data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deletebilling: (id, callBack) => {
        pool.query(
            `DELETE FROM billing WHERE id = ?`,
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
