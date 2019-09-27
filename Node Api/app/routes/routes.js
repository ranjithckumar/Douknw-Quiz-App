module.exports = (app, db) => {
    app.post("/", (req, res) => {
        const data = { text: req.body.text, title: req.body.title };
        db.collection('douknw').insert(data, (err, result) => {
            if (err)
                console.log(err + " this error has occured");
            else
                console.log(result);

        });
        res.status(200).send('Bon Jour');
        
    });

    app.get("/", (req, res) => {
        db.collection('douknw').find({}).toArray((err, result)=> {
            if (err)
                console.log(err + " this error has occured");
            else {
                res.send(result);
            }
        });
    })

    
};
