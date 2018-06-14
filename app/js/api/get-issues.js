const octokit = require('@octokit/rest')()
import paginate from '../util/paginate'

// Loads all issues for a single repository
const getIssues = async (owner, repo) => {
  const options = {
    owner,
    repo,
    state: 'all',
  }

  const issues = await paginate(octokit.issues.getForRepo, options)

  return issues
}

export default getIssues
