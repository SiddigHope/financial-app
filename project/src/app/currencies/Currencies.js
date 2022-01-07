import React, { Component } from "react";
import { currencies } from "../../data";
import NewCurrency from "./NewCurrency";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleModal: false,
      rows: [],
    };
  }

  toggleModal = (modalStatus) => {
    this.setState({
      toggleModal: modalStatus,
    });
    // console.log(modalStatus)
  };
  render() {
    return (
      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card shadow">
            <div className="card-body">
              <h4 className="card-title float-right">{"العمليات الاخيرة"}</h4>
              <button onClick={() => this.toggleModal(true)} className="btn btn-sm btn-gradient-primary text-white mr-2 float-left">
                <i className="mdi mdi-plus"></i>
              </button>
              <NewCurrency
                toggleModal={this.toggleModal}
                modalStatus={this.state.toggleModal}
              />
              <div className="table-responsive">
                <table className="table text-center">
                  <thead>
                    <tr>
                      {/* <th> {"#"} </th> */}
                      <th> {"العملة"} </th>
                      <th> {"سعر الشراء"} </th>
                      <th> {"سعر البيع"} </th>
                      <th> {"الخزينة"} </th>
                      <th> {"ادارة"} </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currencies.map((item) => (
                      <tr>
                        <td> {item.name} </td>
                        <td> {item.sell} </td>
                        <td> {item.buy} </td>
                        <td> {item.current} </td>
                        <td>
                          <button className="btn btn-sm btn-gradient-danger">
                            {" "}
                            {"حذف"}{" "}
                          </button>
                          <button className="btn btn-sm btn-gradient-info">
                            {" "}
                            {"تعديل"}{" "}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
