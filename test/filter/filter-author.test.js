import chai from 'chai/register-should'
import filter from '../../app/js/filter'
import testData from '../data/test-data.json'

const TEST_AUTHOR = 2575882


describe('Filter-Author', function () {
  describe('#filterAuthor()', function () {
    it('should return all issues of a certain author', function () {
      const filterdIssues = filter.author.filterAuthor(testData, TEST_AUTHOR)
      filterdIssues.should.have.lengthOf(7)
    })

    it('should return no issues if there are none for the author', function () {
      const filterdIssues = filter.author.filterAuthor(testData, 0)
      filterdIssues.should.have.lengthOf(0)
    }) 
  })
})
