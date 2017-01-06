/* globals describe, it */
import assert from 'assert'
import sinon from 'sinon'

import router from '../../../src/server/routes' // eslint-disable-line no-unused-vars
import getHome from '../../../src/server/routes/getHome'

describe('Index Route', function () {
  it('should render', function () {
    let req, res, spy

    req = res = {}
    spy = res.render = sinon.spy()

    getHome(req, res)

    assert.equal(spy.calledOnce, true)
  })
})
