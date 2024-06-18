const { create, getwishlistById, getwishlist, updatewishlist, deletewishlist } = require("./wishlist.service");

module.exports = {
    createwishlist: (req, res) => {
        const body = req.body;
        body.image = req.file.destination +'/'+req.file.filename;
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getwishlistById: (req, res) => {
        const id = req.params.id;
        getwishlistById(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Record not found"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getwishlist: (req, res) => {
        getwishlist((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    updatewishlist: (req, res) => {
        const body = req.body;
        body.image = req.file.destination +'/'+req.file.filename;
        updatewishlist(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "Updated successfully"
            });
        });
    },
    deletewishlist: (req, res) => {
        const id = req.params.id;
        deletewishlist(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "wishlist deleted successfully"
            });
        });
    }
};
