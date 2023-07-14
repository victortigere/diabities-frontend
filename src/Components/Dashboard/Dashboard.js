import React, {useState, useEffect} from 'react';
import {Chart,ArcElement,BarElement,CategoryScale,LinearScale} from 'chart.js';
import { chartColors } from "./colors";
import Template from '../Template/Template';
import {Pie, Bar} from 'react-chartjs-2'
import { faker } from '@faker-js/faker'
import { SUCCESS_CODE } from '../../Common/Utility';

import ReportsService from '../../Services/Reports';


const Dashboard = () => {

  const [reports , setReport] = useState([]);
  Chart.register(ArcElement, BarElement, CategoryScale, LinearScale)

  useEffect(() => {
    getReports()
},[]);

const getReports = () => {
  ReportsService.getReports()
  .then( response => {
    console.log(response)
    if(SUCCESS_CODE === response.code){
      console.log(response.code)
      setReport(response.data)
      console.log(reports)
    }  
  })
  .catch((err) => {
  })
}


  const pieOptions = {
    legend: {
      display: false,
      position: "right",
    },
    elements: {
      arc: {
        borderWidth: 0
      }
    }
  };

  const pieData = {
    maintainAspectRatio: false,
    responsive: false,
    labels: ["LOW","NORMAL", "ELEVATED", "HYPERTENSION_1" ,"HYPERTENSION_2", "HYPERTENSIVE_CRISIS"],
    datasets: [
      {
        data: [reports[0].patients,reports[1].patients,reports[2].patients, reports[3].patients, reports[4].patients],
        backgroundColor: chartColors,
        hoverBackgroundColor: chartColors
      }
    ]
  };

  // Bar Graph
   const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Expenses trend',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const barData = {
    labels,
    datasets: [
      {
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  
  return (
    <Template>
        <div className="row mt-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-wrap justify-content-between">
                <div className="col-md-6 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4>BP Levels</h4>
                        <Pie
                          data={pieData}
                          options={pieOptions}
                      />
                      </div>
                    </div>
                </div>
              </div>
            </div>
            </div>
        </div>
    </Template>
  );
}

export default Dashboard;