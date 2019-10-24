const utils = require('./utils.js');
const should = require('should');

describe('utils.js 모듈은 ', () => {
    it('문자열의 첫번째 문자를 대문자로 치환', ()=> {
        const result = utils.capitialize('hello');
        result.should.be.equal('Hello');
    })
})