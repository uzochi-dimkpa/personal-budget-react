import React, { Component, useEffect } from "react";
import axios from "axios";

import json_data from '../data/data.json';

import * as d3 from 'd3';

// var data = json_data.datasets[0].data;
// var labels = json_data.labels;
// var width = 300; var height = 200;

// var colors = json_data.datasets[0].backgroundColor;


function D3Chart(props) {
  const {
    data,
    innerRadius,
    outerRadius,
  } = props;
  

  const margin = {
    top: 50, right: 50, bottom: 50, left: 50,
  };
  
  const width = 2 * outerRadius + margin.left + margin.right;
  const height = 2 * outerRadius + margin.top + margin.bottom;
  
  const colorScale = d3     
    .scaleSequential()      
    .interpolator(d3.interpolateCool)      
    .domain([0, data.length]);
    // .scaleOrdinal()
    // .range(json_data.datasets[0].backgroundColor)

  useEffect(() => {
    drawChart();
  }, [data]);
  
  function drawChart() {
    // Remove the old svg
    d3.select('#d3-pie-container')
      .select('svg')
      .remove();

    // Create new svg
    const svg = d3
      .select('#d3-pie-container')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const arcGenerator = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

    const pieGenerator = d3
      .pie()
      .padAngle(0)
      .value((d) => d.value);

    const arc = svg
      .selectAll()
      .data(pieGenerator(data))
      .enter();

    // Append arcs
    arc
      .append('path')
      .attr('d', arcGenerator)
      .style('fill', (_, i) => colorScale(i))
      .style('stroke', '#ffffff')
      .style('stroke-width', 0);

    // Append text labels
    arc
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .text((d) => d.data.label)
      // .style('fill', (_, i) => colorScale(data.length * 0))
      .attr('transform', (d) => {
        const [x, y] = arcGenerator.centroid(d);
        return `translate(${x}, ${y})`;
      });
  }    

  return (
    <div id="d3-pie-container"/>
  );
  
  // return (
  //   <div>
  //     {/* <h1>D3JS component</h1> */}
  //     <svg>
  //       {/* --- */}
  //       {/* <g transform={`translate(${350 / 2}, ${350 / 2})`}>
  //         {arcs.map((arc, i) => {
  //           return <path key={i} d={arc} fill={json_data.datasets[0].backgroundColor[i]} />;
  //         })}
  //       </g> */}
  //       {/* <g>
  //         {arcs.map((arc, i) => {
  //           return <path key={i} d={arc} />;
  //         })}
  //       </g> */}
  //     </svg>
  //   </div>
  // )
}

export default D3Chart