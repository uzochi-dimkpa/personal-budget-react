import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Chart as ChartJS } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import json_data from '../data/data.json';

import { ArcElement } from "chart.js";
import { render } from '@testing-library/react';

ChartJS.register(ArcElement);

const generatePieChart = () => {
  axios
      .get('http://localhost:3001/budget')
      .then(res => {
          console.log("axios data retrieval:");
          console.log(res.data);
          const final_data = {
            datasets: res.data.datasets,
            labels: res.data.labels
          }
          console.log("final_data:");
          console.log(final_data);
          return (
              <div>
                  <Pie data={final_data}/>
              </div>
          );
      })
}

function PieChart() {

  axios
    .get('http://localhost:3001/budget')
    .then(res => {
      console.log("axios data retrieval:");
      console.log(res.data);
      const final_data = {
        datasets: res.data.datasets,
        labels: res.data.labels
      }
      console.log("final_data:");
      console.log(final_data);
      return (
        <div>
          <Pie data={final_data}/>
        </div>
      )
    })

  // const { final_data } = axios.get('http://localhost:3001/budget').then(res => final_data);

  //   return (
  //     <div>
  //       <Pie data={final_data}/>
  //     </div>
  //   )

  generatePieChart();

  console.log("local data import (json_data):");
  console.log(json_data);
  return (
    <div>
      <Pie data={json_data} labels={json_data.labels}/>
    </div>
  );
};

export default PieChart


// export const PieChart = async () => {
//   try {
//     const { final_data } = await axios.get('http://localhost:3001/budget')

//     return (
//       <div>
//         <Pie data={final_data}/>
//       </div>
//     )
//   } catch (error) {
//     return error;
//   }
// }