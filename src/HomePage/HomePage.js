import React from 'react';
import axios from 'axios';

import train from '../images/train.gif';
import red_alert from '../images/red-alert.gif';

import PieChart from '../PieChart/PieChart';
import D3Chart from '../D3Chart/D3Chart';

import json_data from '../data/data.json'

// using axios
function getData() {
    axios
        .get("http://localhost:3001/budget")
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
};
const retrieveData = () => {
    axios
        .get("http://localhost:3001/budget")
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
};

// ngOnInit(): void {
//     this.http.get('http://localhost:3000/budget')
//     .subscribe((res: any) => {
//       // debugger;
//       console.log(res);
//       this.createChart(res);
//     });

//     this.dataService.ngOnInit();
//   }

// function generatePieChart() {
//     axios
//         .get('http://localhost:3001/budget')
//         .then(res => {
//             console.log(res.data);
//             return (
//             <PieChart data={res.data}/>
//             );
//         });
// };

function HomePage( /* props */ ) {
// importing json data using props
/*
  const {datasets, labels} = props.data;
  console.log(datasets[0].data);
  console.log(labels);
*/

// using axios
//   getData();
// generatePieChart();

//   render (
//     generatePieChart()
//   );

  const final_data = [
    {label: json_data.labels[0], value: json_data.datasets[0].data[0]},
    {label: json_data.labels[1], value: json_data.datasets[0].data[1]},
    {label: json_data.labels[2], value: json_data.datasets[0].data[2]},
    {label: json_data.labels[3], value: json_data.datasets[0].data[3]},
    {label: json_data.labels[4], value: json_data.datasets[0].data[4]},
    {label: json_data.labels[5], value: json_data.datasets[0].data[5]},
    {label: json_data.labels[6], value: json_data.datasets[0].data[6]},
    {label: json_data.labels[7], value: json_data.datasets[0].data[7]}
  ]

  return (
    // generatePieChart(),
    // <div>
    //   HomePage
    // </div>
    <div className="container center">

        <div className="page-area">

            <main id="main">
            {/* <!-- This is a Semantic HTML Change --> */}
            <aside>
            <div className="text-box">
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
                {/* <!-- This is an A11y Change --> */}
                {/* <img src="images/train.gif" alt="train" style="width:100px; height:90px;"></img> */}
                <img src={train} alt="train" style={{width: "100px", height: "90px"}}/>
            </div>
    
            <div className="text-box">
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
                {/* <!-- This is an A11y Change --> */}
                {/* <img src="images/red-alert.gif" alt="red alert warning danger" style="width:70px; height:70px"></img> */}
                <img src={red_alert} alt="red alert warning danger" style={{width: "70px", height: "70px"}}/>
            </div>
    
            <div className="text-box">
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </div>
    
            <div className="text-box">
                <h1>Free</h1>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </div>
            </aside>
    
            {/* <!-- This is a Semantic HTML Change --> */}
            <article className="text-box">
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            {/* <!-- This is a Semantic HTML Change --> */}
            <article className="text-box">
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            {/* <!-- This is a Semantic HTML Change --> */}
            <article className="text-box">
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
            {/* <!-- This is a Semantic HTML Change --> */}
            <article className="text-box">
                <h1>Free</h1>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
                <p>
                    {/* <!-- RESIZE DOES NOT WORK -->
                    <!-- <canvas id="myChart" width="400" height="400"></canvas> --> */}

                    {/* <!-- <div style="position: relative; padding-top: 50%; padding-left: 50%;"> --> */}
                        {/* <div class="chart-container" style={{position: "relative;", height: "40vh;", width: "80vw;"}}>
                            <canvas id="myChart"></canvas>
                        </div> */}
                        {/* <Pie data={}/> */}
                    {/* <!-- </div> --> */}
                </p>
            </article>
            <PieChart/>
            <D3Chart data={final_data} innerRadius={0} outerRadius={350}/>
            </main>

        </div>

    </div>
  );
}

export default HomePage;
