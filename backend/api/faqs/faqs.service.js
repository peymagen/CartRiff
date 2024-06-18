const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO faqs ( ref_id, question, answer, type ) VALUES ( ?, ?, ?, ? )`,
            [data.ref_id,data.question,data.answer,data.type],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getfaqs: (callBack) => {
        pool.query(
            `SELECT * FROM faqs`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getfaqsById: (id, callBack) => {
        pool.query(
            `SELECT * FROM faqs WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updatefaqs: (data, callBack) => {
        pool.query(
            `UPDATE faqs SET ref_id = ?, question = ?, answer = ?, type = ? WHERE id = ?`,
            [data.ref_id,data.question,data.answer,data.type,data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deletefaqs: (id, callBack) => {
        pool.query(
            `DELETE FROM faqs WHERE id = ?`,
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
