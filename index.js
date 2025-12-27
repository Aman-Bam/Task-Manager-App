const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const { log } = require('console');

app.set("view engine", "ejs");
// explicit views folder to match project
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// serve static from the actual Public folder
app.use(express.static(path.join(__dirname, "Public")));

app.get('/', function(req, res) {
    fs.readdir(path.join(__dirname, 'files'), function(err, files){
        if (err) {
            console.error(err);
            return res.status(500).send('Server error');
        }
        console.log(files);
        // render only after files are read
        res.render("index", {files: files });
    })
});

app.get('/file/:filename', function(req,res) {
    fs.readFile(path.join(__dirname, 'files', req.params.filename), "utf-8" , function(err, filedata){
        if (err) {
            console.error(err);
            return res.status(404).send('File not found');
        }
        res.render('show', {filename: req.params.filename , filedata: filedata});
    })
})

app.get('/edit/:filename', function(req,res) {
    res.render('edit', {filename: req.params.filename});
})

app.post('/rename', function(req, res) {
    const previous = req.body.Previous;
    const newNameRaw = req.body.New;
    if (!previous || !newNameRaw) {
        return res.status(400).send('Missing previous or new name');
    }
    const newFileName = newNameRaw.split(' ').join('') + '.txt';
    const oldPath = path.join(__dirname, 'files', previous);
    const newPath = path.join(__dirname, 'files', newFileName);
    fs.rename(oldPath, newPath, function(err) {
        if (err) {
            console.error('Failed to rename file:', err);
            return res.status(500).send('Server error: could not rename file');
        }
        console.log('File renamed:', previous, '->', newFileName);
        res.redirect('/');
    });
})

app.post('/create', function(req, res) {
    const filename = (req.body.title || 'untitled').split(' ').join('') + '.txt';
    const filepath = path.join(__dirname, 'files', filename);
    fs.writeFile(filepath, req.body.details || '', 'utf8', function(err){
        if (err) {
            console.error('Failed to write file:', err);
            return res.status(500).send('Server error: could not save task');
        }
        console.log('File created:', filename);
        res.redirect('/');
    });
});

app.listen(3000, () => { 
  console.log("Server running at http://localhost:3000");
});
