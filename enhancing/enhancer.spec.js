const enhancer = require('./enhancer.js');
// test away!

const {repair, succeed, fail, get} = require('./enhancer.js');
describe('enhancer', () => {
    describe('repair()', () => {
        it('durability restored to 100', () => {
            expect(repair({name:"sword", enhancement: 15, durability: 30})).toEqual({name:"sword", enhancement: 15, durability: 100})
        })
    })
    describe('succeed()', () => {
        it('enhancement increased by 1', () => {
            expect(succeed({name:"aegis", enhancement: 18, durability:50})).toEqual({name:"aegis", enhancement: 19, durability:50})
        })

        it('enhancement not changed if level is 20', () => {
            expect(succeed({name: "armor", enhancement: 20, durability:80})).toEqual({name: "armor", enhancement: 20, durability:80})
        })
      
    })

    describe('fail()', () => {
        it('enhancement less than 15, durability decreased by 5', () => {
            expect(fail({name: "shield", enhancement: 1, durability:50})).toEqual({name:"shield", enhancement: 1, durability:45})
        })

        it('enhancement more than 16, durability decreased by 10, enhancement decrease by 1', () => {
            expect(fail({name: "crystal", enhancement: 19, durability:80})).toEqual({name: "crystal", enhancement: 18, durability:70})
        })
        it('enhancement more than 15, durability decreased by 10', () => {
            expect(fail({name: "embrace", enhancement: 16, durability:70})).toEqual({name: "embrace", enhancement: 16, durability:60})
        })
        it('enhancement equal to 15, durability decreased by 10', () => {
            expect(fail({name: "evolve stone", enhancement: 15, durability:50})).toEqual({name: "evolve stone", enhancement: 15, durability:40})
        })
      
    })

    describe('get()', () => {
        it('no enhancement, no name change', () => {
            expect(get({name: "shield", enhancement: 0, durability:50})).toEqual({name:"shield", enhancement: 0, durability:50})
        })

        it('enhancement more than 0, enhancement displayed with plus sign next to name', () => {
            expect(get({name: "crystal", enhancement: 1, durability:80})).toEqual({name: "[+1]crystal", enhancement: 1, durability:80})
        })
      
      
    })
})