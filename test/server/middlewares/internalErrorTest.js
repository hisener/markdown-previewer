/* globals describe, it */
import assert from 'assert'
import sinon from 'sinon'

import internalError from '../../../src/server/middlewares/internalError'

describe('Internal Error Middleware', function () {
  it('should set status and render', function () {
    let err, req, res, next, statusSpy, renderSpy

    err = req = res = next = {}
    statusSpy = res.status = sinon.spy()
    renderSpy = res.render = sinon.spy()

    internalError(err, req, res, next)
    assert.equal(statusSpy.calledOnce, true)
    assert.equal(renderSpy.calledOnce, true)
  })

  it('should set status as 501', function () {
    let err, req, res, next, statusSpy, renderSpy

    err = req = res = next = {}
    err.status = 501
    statusSpy = res.status = sinon.spy()
    renderSpy = res.render = sinon.spy()

    internalError(err, req, res, next)
    assert.equal(statusSpy.calledOnce, true)
    assert.equal(renderSpy.calledOnce, true)
  })
})
