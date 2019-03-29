let esprima = require('esprima');
let acorn = require('acorn');

const code = 'function add (x) { let y = 9; return x + y;}'

// console.log(esprima.parse(code));
console.log(acorn.parse(code,{ranges: true}));

/**
    Use esprima
    Script {
        type: 'Program',
        body:
        [ FunctionDeclaration {
            type: 'FunctionDeclaration',
            id: [Identifier],
            params: [Array],
            body: [BlockStatement],
            generator: false,
            expression: false,
            async: false } 
         ],
        sourceType: 'script' 
    }
 */

/**
 *  Use acorn
    Node {
        type: 'Program',
        start: 0,
        end: 44,
        body:
         [ Node {
             type: 'FunctionDeclaration',
             start: 0,
             end: 44,
             id: [Node],
             expression: false,
             generator: false,
             async: false,
             params: [Array],
             body: [Node] } ],
        sourceType: 'script' 
    }
 */

/**
    Node {
        type: 'Program',
        start: 0,
        end: 44,
        range: [ 0, 44 ],
        body:
         [ Node {
             type: 'FunctionDeclaration',
             start: 0,
             end: 44,
             range: [Array],
             id: [Node],
             expression: false,
             generator: false,
             async: false,
             params: [Array],
             body: [Node] } ],
        sourceType: 'script' 
    }
 */