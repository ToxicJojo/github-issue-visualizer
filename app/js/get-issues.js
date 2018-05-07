const octokit = require('@octokit/rest')()


async function paginate (method, options) {
	options.per_page = 100;
  let response = await method(options)
  let {data} = response
  while (octokit.hasNextPage(response)) {
    response = await octokit.getNextPage(response)
    data = [...data, ...response.data]
  }
  return data
}

const getIssues = async (owner, repo) => {
	const options = {
		owner,
		repo,
		state: 'all',
	}

  const issues = await paginate(octokit.issues.getForRepo, options)

  return issues
}

module.exports = getIssues
