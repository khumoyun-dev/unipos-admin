import "./LineChart.scss"

import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto'
import { Line, Utils } from "react-chartjs-2";


function LineChart() {

    // const DATA_COUNT = 24;
    // const NUMBER_CFG = { count: DATA_COUNT, min: 100000, max: 5000000 };

    // const data = {
    //     labels: []
    // }

    // function yAxes(label, index, labels) {
    //     switch (label) {
    //         case 0:
    //             return '100M';
    //         case 1:
    //             return '200M';
    //         case 2:
    //             return '300M';
    //         case 3:
    //             return '400M';
    //         case 4:
    //             return '500M';
    //         default:
    //             return "error";
    //     }
    // }

    return (
        <div className='chart_wrapper'>
            <Line className="chart"
                options={{
                    // aspectRatio: 2,
                    responsive: true,
                    maintainAspectRatio: false,
                    resizeDelay: 0,
                    layout: {
                        padding: {
                            top: 48,
                            left: 24,
                            right: 24,
                            bottom: 12,
                        }
                    },
                    plugins: {
                        title: {
                            display: false,
                            text: 'Sotuvlar Statistikasi'
                        },
                        legend: {
                            display: false
                        },
                        tooltips: {
                            callbacks: {
                                label: function (tooltipItem) {
                                    return tooltipItem.yLabel;
                                }
                            }
                        },
                    },
                    radius: 0,
                    animations: {
                        radius: {
                            duration: 400,
                            easing: 'linear',
                            loop: (context) => context.active
                        }
                    },
                    interaction: {
                        intersect: false,
                    },
                    scales: {
                        x: {
                            display: true,
                            title: {
                                display: true
                            },
                            grid: {
                                display: false,
                            },
                        },
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: ''
                            },
                            grid: {
                                borderDash: [5, 2],
                            },
                            ticks: {
                                beginAtZero: false,
                                // min: 0,
                                // max: 4,
                                stepSize: 100,
                                // callback: yAxes,
                            }
                        }
                    }
                }
                }

                label='Cubic interpolation'

                data={{
                    labels: ["00.00", "02.00", "04.00", "06.00", "08.00", "10.00", "12.00", "14.00", "16.00", "18.00", "20.00", "22.00"],
                    datasets: [
                        {
                            label: "",
                            data: [{ x: "00.00", y: 135 }, { x: "02.00", y: 145 }, { x: "04.00", y: 310 }, { x: "06.00", y: 345 }, { x: "08.00", y: 285 }, { x: "10.00", y: 325 }, { x: "12.00", y: 420 }, { x: "14.00", y: 435 }, { x: "16.00", y: 405 }, { x: "18.00", y: 430 }, { x: "20.00", y: 465 }, { x: "22.00", y: 469 }],
                            backgroundColor: [
                                "#ffff"
                            ],
                            borderColor: [
                                'rgba(20, 37, 197, 1)',
                            ],
                            segment: {
                                borderWidth: 3,
                            },
                            borderWidth: 1,
                            fill: false,
                            borderCapStyle: "butt",
                            tension: 0.4
                        }
                    ]
                }}

                // height="386px"
                // width="783px"
            />
        </div>
    )
}

export default LineChart