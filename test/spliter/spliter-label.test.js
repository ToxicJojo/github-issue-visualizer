import chai from 'chai/register-should'
import splitter from '../../app/js/splitter'

import testIssues from '../data/test-data'
import testLabels from '../data/test-labels'

describe('Spliter-Label', function () {
  describe('#splitLabel()', function () {
    it('should split into the right number of groups', function () {
      const splitIssues = splitter.label.splitLabel(testIssues, testLabels)
      splitIssues.should.have.lengthOf(11)
    })

    it('should split into groups with a meta and issues property', function () {
      const splitIssues = splitter.label.splitLabel(testIssues, testLabels)
      splitIssues.forEach((group) => {
        group.should.have.property('meta')
        group.should.have.property('issues')
      })
    })
  })
})