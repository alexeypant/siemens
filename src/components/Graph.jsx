import React from 'react';
import * as d3 from 'd3';

export default class Graph extends React.Component{

  componentDidUpdate(){
    this.updateGraph();
  }

  componentDidMount(){
    this.updateGraph();
  }

  updateGraph = () => {

    const { points } = this.props;

    const data = points.map(p => {
      const date = new Date(p.date).getTime();
      return { date, value: p.value }
    });
    
    const parentNode = document.getElementById("graph").parentElement;
    const width = parentNode.clientWidth - 20;
    const height = parentNode.clientHeight - 20;
    const margin = 50;

    // removing previous SVG
    const node = document.getElementById("graph");
    while (node && node.firstChild) {
      node.removeChild(node.firstChild);
    }

    /* Scale */
    const xScale = d3.scaleTime()
      .domain(d3.extent(data, d => d.date))
      .range([0, width-margin]);
    
      const yScale = d3.scaleLinear()
      .domain([d3.min(data, d => d.value), d3.max(data, d => d.value)])
      .range([height-margin, 0]);
  

    /* Add SVG */
    const svg = d3.select("#graph").append("svg")
      .classed("svg-chart", true)
      .attr("width", (width+margin)+"px")
      .attr("height", (height+margin)+"px")
      .append('g')
      .attr("transform", `translate(${margin}, ${margin})`);
    
    
    /* Add line into SVG */
    const line = d3.line()
      .x(d => xScale(d.date))
      .y(d => yScale(d.value));
    
    svg.append('path')
      .attr('class', 'line')
      .attr('d', line(data));
    
    
    /* Add circles in the line */
    svg.append("g")
      .selectAll("circle")
      .data(data).enter()
      .append("g")
      .attr("class", "circle")
      .on("mouseover", function(d) {
          d3.select(this)     
            .style("cursor", "pointer")
            .style("fill", "red")
            .append("text")
            .attr("class", "text")
            .text(d.value)
            .attr("x", d => xScale(d.date) + 5)
            .attr("y", d => yScale(d.value) - 5);
        })
      .on("mouseout", function(d) {
          d3.select(this)
            .style("cursor", "none")  
            .style("fill", "black")
            .select("text").remove();
        })
      .append("circle")
      .attr("cx", d => xScale(d.date))
      .attr("cy", d => yScale(d.value))
      .attr("r", 4);
    
    
    /* Add Axis into SVG */
    const xAxis = d3.axisBottom(xScale).ticks(5);
    const yAxis = d3.axisLeft(yScale).ticks(5);

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(0, ${height-margin})`)
      .call(xAxis)
      .append('text')
      .attr("x", 15)
      .attr("transform", `translate(${width - 2 * margin}, -10)`)
      .attr("fill", "#000")
      .text("Time");
    
    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append('text')
      .attr("y", 15)
      .attr("transform", "rotate(-90)")
      .attr("fill", "#000")
      .text("Values");
  }

    render(){
      return <div id="graph"></div>;
    }
};
