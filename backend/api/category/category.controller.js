const { create, getcategoryById, getcategory, updatecategory, deletecategory } = require("./category.service");

module.exports = {
    createcategory: (req, res) => {
        const body = req.body;
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
    getcategoryById: (req, res) => {
        const id = req.params.id;
        getcategoryById(id, (err, results) => {
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
    getcategory: (req, res) => {
        getcategory((err, results) => {
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
    updatecategory: (req, res) => {
        const body = req.body;
        updatecategory(body, (err, results) => {
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
    deletecategory: (req, res) => {
        const id = req.params.id;
        deletecategory(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "category deleted successfully"
            });
        });
    }
};
