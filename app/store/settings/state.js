const state = {
  refresh: false,
  filters: [],
  splitter: null,
  display: {
    color: {
      default: 'black',
      method: null,
      params: null,
    },
    radius: {
      default: 10,
      method: null,
      params: null,
    }
  },
  markedIssues: [],
}

export default state