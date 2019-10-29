if (process.env.TARO_ENV === 'rn') {
    model.exports = require ("./components/index.rn");
} else {
    model.exports = require ("./components/index");
}