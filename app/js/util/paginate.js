const octokit = require('@octokit/rest')()

// Requests to the github api are paginated. (https://developer.github.com/v3/#pagination)
// This function makes requests until there are no futher pages avaiable.
// Based on https://github.com/octokit/rest.js#pagination
async function paginate (method, options) {
  // Set items per page to 100. This is the maximum number of items possible.
  options.per_page = 100;
  // Get the initial response and the corresponding data
  let response = await method(options)
  let {data} = response
  // As long a there are more pages load these and add their data
  while (octokit.hasNextPage(response)) {
    response = await octokit.getNextPage(response)
    data = [...data, ...response.data]
  }

  return data
}

export default paginate