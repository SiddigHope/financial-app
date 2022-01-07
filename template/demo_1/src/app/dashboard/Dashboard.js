import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";
import { Bar, Doughnut } from "react-chartjs-2";
import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";
import { banksReserved, centralTransactions, mostUsedBank } from "../../data";

export class Dashboard extends Component {
  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      visitSaleData: {},
      visitSaleOptions: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                display: false,
                min: 0,
                stepSize: 20,
                max: 80,
              },
              gridLines: {
                drawBorder: false,
                color: "rgba(235,237,242,1)",
                zeroLineColor: "rgba(235,237,242,1)",
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
                drawBorder: false,
                color: "rgba(0,0,0,1)",
                zeroLineColor: "rgba(235,237,242,1)",
              },
              ticks: {
                padding: 20,
                fontColor: "#9c9fa6",
                autoSkip: true,
              },
              categoryPercentage: 0.5,
              barPercentage: 0.5,
            },
          ],
        },
        legend: {
          display: false,
        },
        elements: {
          point: {
            radius: 0,
          },
        },
      },
      trafficData: {},
      trafficOptions: {
        responsive: true,
        animation: {
          animateScale: true,
          animateRotate: true,
        },
        legend: false,
      },
      todos: [
        {
          id: 1,
          task: "Pick up kids from school",
          isCompleted: false,
        },
        {
          id: 2,
          task: "Prepare for presentation",
          isCompleted: true,
        },
        {
          id: 3,
          task: "Print Statements",
          isCompleted: false,
        },
        {
          id: 4,
          task: "Create invoice",
          isCompleted: false,
        },
        {
          id: 5,
          task: "Call John",
          isCompleted: true,
        },
        {
          id: 6,
          task: "Meeting with Alisa",
          isCompleted: false,
        },
      ],
      inputValue: "",
    };
    this.statusChangedHandler = this.statusChangedHandler.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }
  statusChangedHandler(event, id) {
    //const todoIndex = this.state.todos.findIndex( t => t.id === id );
    const todo = { ...this.state.todos[id] };
    todo.isCompleted = event.target.checked;

    const todos = [...this.state.todos];
    todos[id] = todo;

    this.setState({
      todos: todos,
    });
  }

  addTodo(event) {
    event.preventDefault();

    const todos = [...this.state.todos];
    todos.unshift({
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      task: this.state.inputValue,
      isCompleted: false,
    });

    this.setState({
      todos: todos,
      inputValue: "",
    });
  }

  removeTodo(index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);

    this.setState({
      todos: todos,
    });
  }

  inputChangeHandler(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  componentDidMount() {
    //your code
    var ctx = document.getElementById("visitSaleChart").getContext("2d");
    var gradientBar1 = ctx.createLinearGradient(0, 0, 0, 181);
    gradientBar1.addColorStop(0, "rgba(218, 140, 255, 1)");
    gradientBar1.addColorStop(1, "rgba(154, 85, 255, 1)");

    var gradientBar2 = ctx.createLinearGradient(0, 0, 0, 360);
    gradientBar2.addColorStop(0, "rgba(54, 215, 232, 1)");
    gradientBar2.addColorStop(1, "rgba(177, 148, 250, 1)");

    var gradientBar3 = ctx.createLinearGradient(0, 0, 0, 300);
    gradientBar3.addColorStop(0, "rgba(255, 191, 150, 1)");
    gradientBar3.addColorStop(1, "rgba(254, 112, 150, 1)");

    var gradientdonut1 = ctx.createLinearGradient(0, 0, 0, 181);
    gradientdonut1.addColorStop(0, "rgba(54, 215, 232, 1)");
    gradientdonut1.addColorStop(1, "rgba(177, 148, 250, 1)");

    var gradientdonut2 = ctx.createLinearGradient(0, 0, 0, 50);
    gradientdonut2.addColorStop(0, "rgba(6, 185, 157, 1)");
    gradientdonut2.addColorStop(1, "rgba(132, 217, 210, 1)");

    var gradientdonut3 = ctx.createLinearGradient(0, 0, 0, 300);
    gradientdonut3.addColorStop(0, "rgba(254, 124, 150, 1)");
    gradientdonut3.addColorStop(1, "rgba(255, 205, 150, 1)");

    const newVisitSaleData = {
      labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG"],
      datasets: [
        {
          label: "دولار امريكي",
          borderColor: gradientBar1,
          backgroundColor: gradientBar1,
          hoverBackgroundColor: gradientBar1,
          legendColor: gradientBar1,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          data: [20, 40, 15, 35, 25, 50, 30, 20],
        },
        {
          label: "يورو",
          borderColor: gradientBar2,
          backgroundColor: gradientBar2,
          hoverBackgroundColor: gradientBar2,
          legendColor: gradientBar2,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          data: [40, 30, 20, 10, 50, 15, 35, 40],
        },
        {
          label: "استرلني",
          borderColor: gradientBar3,
          backgroundColor: gradientBar3,
          hoverBackgroundColor: gradientBar3,
          legendColor: gradientBar3,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          data: [70, 10, 30, 40, 25, 50, 15, 30],
        },
      ],
    };
    const newTrafficData = {
      datasets: [
        {
          data: mostUsedBank[0].values,
          backgroundColor: [gradientdonut1, gradientdonut2, gradientdonut3],
          hoverBackgroundColor: [
            gradientdonut1,
            gradientdonut2,
            gradientdonut3,
          ],
          borderColor: [gradientdonut1, gradientdonut2, gradientdonut3],
          legendColor: [gradientdonut1, gradientdonut2, gradientdonut3],
        },
      ],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: mostUsedBank[0].names,
    };
    this.setState({
      visitSaleData: newVisitSaleData,
      trafficData: newTrafficData,
    });
  }

  toggleProBanner() {
    document.querySelector(".proBanner").classList.toggle("hide");
  }

  render() {
    return (
      <div>
        <div className="proBanner">
          {/* the pro banner that appears on top when page loaded */}
          {/* <div>
            <span className="d-flex align-items-center purchase-popup">
              <p>Get tons of UI components, Plugins, multiple layouts, 20+ sample pages, and more!</p>
              <a href="https://www.bootstrapdash.com/product/purple-react/?utm_source=organic&utm_medium=banner&utm_campaign=free-preview" rel="noopener noreferrer" target="_blank" className="btn btn-sm purchase-button ml-auto">Check Pro Version</a>
              <i className="mdi mdi-close bannerClose" onClick={this.toggleProBanner}></i>
            </span>
          </div> */}
        </div>
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i className="mdi mdi-chart-line"></i>
            </span>
            {" الاحصائيات "}
          </h3>
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                <span>{" مراجعة "}</span>
                <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
              </li>
            </ul>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card shadow bg-gradient-danger card-img-holder text-white">
              <div className="card-body">
                <img
                  src={require("../../assets/images/dashboard/circle.svg")}
                  className="card-img-absolute"
                  alt="circle"
                />
                <h4 className="font-weight-normal mb-3">
                  {" لم يتم تحصيلها "}
                  <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                </h4>
                <h2 className="mb-5">$ 15,0000</h2>
                <h6 className="card-text">Increased by 60%</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card shadow bg-gradient-info card-img-holder text-white">
              <div className="card-body">
                <img
                  src={require("../../assets/images/dashboard/circle.svg")}
                  className="card-img-absolute"
                  alt="circle"
                />
                <h4 className="font-weight-normal mb-3">
                  {" تم تحصيلها "}
                  <i className="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                </h4>
                <h2 className="mb-5">45,6334</h2>
                <h6 className="card-text">Decreased by 10%</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card shadow bg-gradient-success card-img-holder text-white">
              <div className="card-body">
                <img
                  src={require("../../assets/images/dashboard/circle.svg")}
                  className="card-img-absolute"
                  alt="circle"
                />
                <h4 className="font-weight-normal mb-3">
                  <i className="mdi mdi-diamond mdi-24px"></i>
                  <span className="float-right">{" الحصيلة "}</span>
                </h4>
                <h2 className="mb-5">95,5741</h2>
                <h6 className="card-text">Increased by 5%</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7 grid-margin stretch-card">
            <div className="card shadow">
              <div className="card-body">
                <div className="clearfix mb-4">
                  <h4 className="card-title float-right">
                    {"اكثر العملات نموا"}
                  </h4>
                  <div
                    id="visit-sale-chart-legend"
                    className="rounded-legend legend-horizontal legend-top-left float-left"
                  >
                    <ul>
                      <li>
                        <span className="legend-dots bg-primary"></span>
                        <span style={{ fontSize: 14 }}>{" دولار امريكي "}</span>
                      </li>
                      <li>
                        <span className="legend-dots bg-danger"></span>
                        <span style={{ fontSize: 14 }}>{" استرليني "}</span>
                      </li>
                      <li>
                        <span className="legend-dots bg-info"></span>
                        <span style={{ fontSize: 14 }}>{" يورو "}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Bar
                  ref="chart"
                  className="chartLegendContainer"
                  data={this.state.visitSaleData}
                  options={this.state.visitSaleOptions}
                  id="visitSaleChart"
                />
              </div>
            </div>
          </div>
          <div className="col-md-5 grid-margin stretch-card">
            <div className="card shadow">
              <div className="card-body">
                <h4 style={{ textAlign: "right" }} className="card-title">
                  {"اكثر البنوك استخداماً"}
                </h4>
                <Doughnut
                  data={this.state.trafficData}
                  options={this.state.trafficOptions}
                />
                <div
                  id="traffic-chart-legend"
                  className="rounded-legend legend-vertical legend-bottom-left pt-4"
                >
                  <ul>
                    {mostUsedBank[0].values.map((item, index) => (
                      <li dir="rtl">
                        <span className="float-left">
                          {mostUsedBank[0].values[index]}%
                        </span>
                        <div className="float-right">
                          <span
                            className={
                              "legend-dots bg-" + mostUsedBank[0].colors[index]
                            }
                          ></span>
                          <span style={{ fontSize: 16 }}>
                            {" "}
                            {mostUsedBank[0].names[index]}{" "}
                          </span>
                        </div>
                        <br />
                      </li>
                    ))}
                    {/* <li>
                      <span className="legend-dots bg-info"></span>Search
                      Engines
                      <span className="float-right">30%</span>
                    </li>
                    <li>
                      <span className="legend-dots bg-success"></span>Direct
                      Click
                      <span className="float-right">30%</span>
                    </li>
                    <li>
                      <span className="legend-dots bg-danger"></span>Bookmarks
                      Click
                      <span className="float-right">40%</span>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card shadow">
              <div className="card-body">
                <h4 className="card-title float-right">{"العمليات الاخيرة"}</h4>
                <div className="table-responsive">
                  <table className="table text-center">
                    <thead>
                      <tr className="text-center">
                        <th> {"البنك"} </th>
                        <th> {"التعليق"} </th>
                        <th> {"حالة الطلب"} </th>
                        <th> {"التاريخ"} </th>
                        <th> {"رقم الطلب"} </th>
                      </tr>
                    </thead>
                    <tbody>
                      {centralTransactions.map((item) => (
                        <tr>
                          <td>
                            <img src={item.icon} className="mr-2" alt="face" />
                            {" "}{item.bank}{" "}
                          </td>
                          <td> {item.comment} </td>
                          <td>
                            <label
                              className={
                                item.status == "pending"
                                  ? "badge badge-gradient-warning"
                                  : item.status == "done"
                                  ? "badge badge-gradient-success"
                                  : "badge badge-gradient-danger"
                              }
                            >
                              {item.status}
                            </label>
                          </td>
                          <td className="text-center"> {item.date} </td>
                          <td className="text-center"> {item.id} </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-lg-5 grid-margin stretch-card">
            <div className="card">
              <div className="card-body p-0 d-flex">
                <div className="dashboard-custom-date-picker">
                  <DatePicker
                    inline
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Recent Updates</h4>
                <div className="d-flex">
                  <div className="d-flex align-items-center mr-4 text-muted font-weight-light">
                    <i className="mdi mdi-account-outline icon-sm mr-2"></i>
                    <span>jack Menqu</span>
                  </div>
                  <div className="d-flex align-items-center text-muted font-weight-light">
                    <i className="mdi mdi-clock icon-sm mr-2"></i>
                    <span>October 3rd, 2018</span>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-6 pr-1">
                    <img
                      src={require("../../assets/images/dashboard/img_1.jpg")}
                      className="mb-2 mw-100 w-100 rounded"
                      alt="face"
                    />
                    <img
                      src={require("../../assets/images/dashboard/img_4.jpg")}
                      className="mw-100 w-100 rounded"
                      alt="face"
                    />
                  </div>
                  <div className="col-6 pl-1">
                    <img
                      src={require("../../assets/images/dashboard/img_2.jpg")}
                      className="mb-2 mw-100 w-100 rounded"
                      alt="face"
                    />
                    <img
                      src={require("../../assets/images/dashboard/img_3.jpg")}
                      className="mw-100 w-100 rounded"
                      alt="face "
                    />
                  </div>
                </div>
                <div className="d-flex mt-5 align-items-start">
                  <img
                    src={require("../../assets/images/faces/face3.jpg")}
                    className="img-sm rounded-circle mr-3"
                    alt="face"
                  />
                  <div className="mb-0 flex-grow">
                    <h5 className="mr-2 mb-2">
                      School Website - Authentication Module.
                    </h5>
                    <p className="mb-0 font-weight-light">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page.
                    </p>
                  </div>
                  <div className="ml-auto">
                    <i className="mdi mdi-heart-outline text-muted"></i>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="row">
          <div className="col-xl-7 grid-margin stretch-card">
            <div className="card shadow">
              <div className="card-body">
                <h4 style={{ textAlign: "right" }} className="card-title">
                  احصائبات الخزينة
                </h4>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th> # </th>
                        <th> البنك </th>
                        <th> اخر عملبة </th>
                        <th> - </th>
                      </tr>
                    </thead>
                    <tbody>
                      {banksReserved.map((item) => (
                        <tr>
                          <td> {item.id} </td>
                          <td> {item.name} </td>
                          <td> {item.lastUpdated} </td>
                          <td width="30%">
                            <ProgressBar
                              animated={true}
                              variant={item.variant}
                              now={item.value}
                              striped
                              dir="rtl"
                            />
                          </td>
                        </tr>
                      ))}
                      {/* <tr>
                        <td> 1 </td>
                        <td> Herman Beck </td>
                        <td> May 15, 2015 </td>
                        <td>
                          <ProgressBar variant="gradient-success" now={25} />
                        </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td> Messsy Adam </td>
                        <td> Jul 01, 2015 </td>
                        <td>
                          <ProgressBar variant="gradient-danger" now={75} />
                        </td>
                      </tr>
                      <tr>
                        <td> 3 </td>
                        <td> John Richards </td>
                        <td> Apr 12, 2015 </td>
                        <td>
                          <ProgressBar variant="gradient-warning" now={90} />
                        </td>
                      </tr>
                      <tr>
                        <td> 4 </td>
                        <td> Peter Meggik </td>
                        <td> May 15, 2015 </td>
                        <td>
                          <ProgressBar variant="gradient-primary" now={50} />
                        </td>
                      </tr>
                      <tr>
                        <td> 5 </td>
                        <td> Edward </td>
                        <td> May 03, 2015 </td>
                        <td>
                          <ProgressBar variant="gradient-danger" now={50} />
                        </td>
                      </tr>
                      <tr>
                        <td> 5 </td>
                        <td> Ronald </td>
                        <td> Jun 05, 2015 </td>
                        <td>
                          <ProgressBar variant="gradient-info" now={65} />
                        </td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 grid-margin stretch-card">
            <div className="card shadow">
              <div className="card-body p-0 d-flex">
                <div className="dashboard-custom-date-picker">
                  <DatePicker
                    inline
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const ListItem = (props) => {
  return (
    <li className={props.isCompleted ? "completed" : null}>
      <div className="form-check">
        <label htmlFor="" className="form-check-label">
          <input
            className="checkbox"
            type="checkbox"
            checked={props.isCompleted}
            onChange={props.changed}
          />{" "}
          {props.children} <i className="input-helper"></i>
        </label>
      </div>
      <i
        className="remove mdi mdi-close-circle-outline"
        onClick={props.remove}
      ></i>
    </li>
  );
};
export default Dashboard;
