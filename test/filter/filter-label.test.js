import chai from 'chai/register-should'
import filter from '../../app/js/filter'
import testData from '../data/test-data.json'

const TEST_LABEL = 856838505
const TEST_LABEL2 = 851751429

describe('Filter-Label', function () {
  describe('#filterLabel()', function () {
    it('should return all issues of a certain label', function () {
      const filterdIssues = filter.label.filterLabel(testData, TEST_LABEL)
      filterdIssues.should.have.lengthOf(5)

      const filterdIssues2= filter.label.filterLabel(testData, TEST_LABEL2)
      filterdIssues2.should.have.lengthOf(1)
    })

    it('should return no issues if there are none for the label', function () {
      const filterdIssues = filter.label.filterLabel(testData, 0)
      filterdIssues.should.have.lengthOf(0)
    }) 
  })
})
