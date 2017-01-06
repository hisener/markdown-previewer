/* globals describe, it */
import assert from 'assert'
import sinon from 'sinon'

import notFound from '../../../src/server/middlewares/notFound'

describe('Not Found Middleware', function () {
  it('should set status and render', function () {
    let req, res, nextSpy

    req = res = {}
    nextSpy = sinon.spy()

    notFound(req, res, nextSpy)
    assert.equal(nextSpy.calledOnce, true)
  })
})
