const octokit = require('@octokit/rest')()
import paginate from '../util/paginate'

const getContributors = async (owner, repo) => {
  const options = {
    owner,
    repo,
  }

  const contributors = await paginate(octokit.repos.getContributors, options)

  return contributors
}

export default getContributors