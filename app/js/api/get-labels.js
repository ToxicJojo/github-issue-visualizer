const octokit = require('@octokit/rest')()
import paginate from '../util/paginate'

const getLabels = async (owner, repo) => {
  const options = {
    owner,
    repo,
  }

  const labels = await paginate(octokit.issues.getLabels, options)

  return labels
}

export default getLabels