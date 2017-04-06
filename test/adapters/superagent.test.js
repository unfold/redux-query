import { assert } from 'chai';
import * as HTTPMethods from '../../src/constants/http-methods';
import superagentAdapter from '../../src/adapters/superagent';

describe('superagent adapter', () => {
    it('must return an object with both execute and abort functions', () => {
        const adapter = superagentAdapter('http://localhost', HTTPMethods.GET);
        assert.isFunction(adapter.execute);
        assert.isFunction(adapter.abort);
    });

    describe('createRequest', () => {
        it('must return a DELETE request when supplied a DELETE method', () => {
            const adapter = superagentAdapter('http://localhost', HTTPMethods.DELETE);
            assert.equal(adapter.instance.method, HTTPMethods.DELETE);
        });

        it('must return a GET request when supplied a GET method', () => {
            const adapter = superagentAdapter('http://localhost', HTTPMethods.GET);
            assert.equal(adapter.instance.method, HTTPMethods.GET);
        });

        it('must return a PATCH request when supplied a PATCH method', () => {
            const adapter = superagentAdapter('http://localhost', HTTPMethods.PATCH);
            assert.equal(adapter.instance.method, HTTPMethods.PATCH);
        });

        it('must return a POST request when supplied a POST method', () => {
            const adapter = superagentAdapter('http://localhost', HTTPMethods.POST);
            assert.equal(adapter.instance.method, HTTPMethods.POST);
        });

        it('must return a PUT request when supplied a PUT method', () => {
            const adapter = superagentAdapter('http://localhost', HTTPMethods.PUT);
            assert.equal(adapter.instance.method, HTTPMethods.PUT);
        });
    });
});
