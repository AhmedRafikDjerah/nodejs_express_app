const express = require('express');
const hbs = require('hbs');

//Core node modules
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

hbs.registerPartials(path.join(__dirname, 'views/partials'));

hbs.registerHelper('getYear', () => {
    return new Date().getFullYear()
})

app.set('view engine', 'hbs');


app.use((req, res, next) => {
    let undeConstruction = false;

    if(!undeConstruction) {
        next();
    }else {
        res.render('maintenance.hbs');

    }
})

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index.hbs', {
        pageTitle: 'Index Page'
    });
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page'
    })
})

app.listen(port, () => {
    console.log('Server started');
})