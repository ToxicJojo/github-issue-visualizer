const octokit = require('@octokit/rest')()
import paginate from '../util/paginate'

// Loads all contributors for a single repository
const getContributors = async (owner, repo) => {
  const options = {
    owner,
    repo,
  }

  const contributors = await paginate(octokit.repos.getContributors, options)

  return contributors
}

export default getContributors