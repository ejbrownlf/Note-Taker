var tableData = require('../db/db');

let init = 0

function apiRoutes(app) {
    app.get("/api/notes", (req, res) => {
        // console.log(tableData)
        res.json(tableData)
    });

    app.post("/api/notes", (req, res) => {
        const newNote = req.body;
        const id = init;
        init++;
        console.log(id);
        newNote.id = id;
        tableData.push(newNote);
        res.json(tableData);
    });

    app.delete("/api/notes/:id", (req, res) => {
        const id = req.params.id;
        tableData.splice(id, 1);

        init = 0;

        tableData.forEach(data => {
            data.id = init;
            init++;
        })

        res.json(tableData);
    })
};

module.exports = apiRoutes;