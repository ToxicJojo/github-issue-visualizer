import chai from 'chai/register-should'
import splitter from '../../app/js/splitter'

const issues = [{state: 'closed'}, {state: 'open'}, {state: 'open'}]

describe('Spliter-State', function () {
  describe('#splitState()', function () {
    it('should split into two groups', function () {
      const splitIssues = splitter.state.splitState(issues)
      splitIssues.should.have.lengthOf(2)
    })
  })
})