import chai from 'chai/register-should'
import filter from '../../app/js/filter'

const issuesOpen = [{ state: filter.state.STATE_OPEN }]
const issuesClosed = [{ state: filter.state.STATE_CLOSED }]

describe('Filter-State', function () {
  describe('#filterStateOpen()', function () {
    it('should return open issues', function () {
      const filterdIssues = filter.state.filterStateOpen(issuesOpen)
      filterdIssues.should.have.lengthOf(1)
    })

    it('should not return closed issues', function () {
      const filterdIssues = filter.state.filterStateOpen(issuesClosed)
      filterdIssues.should.have.lengthOf(0)
    })
  })

  describe('#filterStateClosed()', function () {
    it('should return closed issues', function () {
      const filterdIssues = filter.state.filterStateClosed(issuesClosed)
      filterdIssues.should.have.lengthOf(1)
    })

    it('should not return open issues', function () {
      const filterdIssues = filter.state.filterStateClosed(issuesOpen)
      filterdIssues.should.have.lengthOf(0)
    })
  })
})