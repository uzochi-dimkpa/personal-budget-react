import React from 'react';
import axios from 'axios';

import train from '../images/train.gif';
import red_alert from '../images/red-alert.gif';

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

function HomePage(props) {
// importing json data using props
/*
  const {datasets, labels} = props.data;
  console.log(datasets[0].data);
  console.log(labels);
*/

// using axios
  getData();

  return (
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
                        {/* <div class="chart-container" style="position: relative; height:40vh; width:80vw">
                            <canvas id="myChart"></canvas>
                        </div> */}
                    {/* <!-- </div> --> */}
                </p>
            </article>
            </main>

        </div>

    </div>
  );
}

export default HomePage;
