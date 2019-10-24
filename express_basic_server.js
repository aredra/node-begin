const express = require('express');
const logger3 = require('morgan');
const app = express();

function logger(req, res, next) {
    console.log('i am logger');
    next();
}

//일반적인 미들웨어는 3개의 파라미터
function commonmw(req, res, next ){
    console.log('commonmw');
    next(new Error('error ouccered'));
}

//에러 미들웨어는 4개
function errormw(err, rq, res, next) {
    console.log(err.message);
    //에러를 처리하거나 다음 미들웨어에에게 넘김
    next();
}

app.use(logger);
app.use(logger3('dev'));
app.use(commonmw);
app.use(errormw);

app.listen(3000, function(){
    console.log('Server is running');
});

