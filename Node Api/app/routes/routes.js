module.exports = (app, db) => {

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
