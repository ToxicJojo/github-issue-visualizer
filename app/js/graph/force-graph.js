import * as d3 from 'd3'
import { forceCluster } from 'd3-force-cluster'

import calculateCenters from './calculate-centers'

const simulation = d3.forceSimulation()
let centers = []


let width = 0
let height = 0

const init = (nodes, update) => {
  const svg = d3.select('svg')
  const svgElement = document.querySelector('svg')

  const width = svgElement.clientWidth
  const height = svgElement.clientHeight

  simulation
    .nodes(nodes)
    .force('collision', d3.forceCollide().radius((d) => {
      return d.radius + 1
    }).strength(1).iterations(1.5))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('cluster', forceCluster()
      .centers(function (d) { return centers[d.cluster] })
      .strength(.4)
      .centerInertia(1))

  simulation.on('tick', update) 
  simulation
    .alpha(1)
    .restart()
}

const updateNodes = (nodes) => {
  simulation.nodes(nodes)
}

const refreshAlpha = (alpha) => {
  simulation.alpha(alpha).restart()
}

const updateClusters = (count) => {
  centers = calculateCenters(count)
  centers = centers.map((center) => {
    center.x *= (width - 150)
    center.y *= (height - 150)

    return center
  })
}


export default {
  init,
  updateNodes,
  refreshAlpha,
  updateClusters,
}
