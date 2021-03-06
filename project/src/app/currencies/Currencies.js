import React, { Component } from "react";
// import { currencies } from "../../data";
import NewCurrency from "./NewCurrency";
import { deleteCurrency, getAllCurrencies } from "../shared/functions/currencies";
import { withSnackbar } from 'notistack'

class Currencies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleModal: false,
      rows: [],
      type: "",
      item: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    // console.log(await getAllCurrencies())
    this.setState({
      rows: await getAllCurrencies(),
    });
  };

  toggleModal = (modalStatus, type, item) => {
    this.setState({
      toggleModal: modalStatus,
    });
    if (type) {
      this.setState({
        type,
      });
    }
    if (item) {
      this.setState({
        item,
      });
    } else {
      this.setState({
        item: [],
      });
    }
    // console.log(modalStatus)
  };

  deleteItem = (item) => {
    const deleted = deleteCurrency(item.id);
    if (deleted) {
      this.setState({
        rows: this.state.rows.filter((row) => item.id != row.id),
      });
      this.props.enqueueSnackbar("تمت العملية بنجاح", {variant: "success"})
      return
    }
    this.props.enqueueSnackbar("لم تتم العملية حاول مرة اخري", {variant: "error"})
  };

  render() {
    return (
      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card shadow">
            <div className="card-body">
              <h4 className="card-title float-right">{"العملات الاجنبية و اسعار الصرف"}</h4>
              <button
                onClick={() => this.toggleModal(true, "add")}
                className="btn btn-sm btn-gradient-primary text-white mr-2 float-left"
              >
                <i className="mdi mdi-plus"></i>
              </button>
              <NewCurrency
                toggleModal={this.toggleModal}
                updateData={this.getData}
                item={this.state.item}
                type={this.state.type}
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
                    {this.state.rows.map((item, index) => (
                      <tr key={index}>
                        <td> {item.currency.name} </td>
                        <td> {item.sale_price} </td>
                        <td> {item.buy_price} </td>
                        <td> {(item.sale_price + item.buy_price) / 2} </td>
                        <td>
                          <button
                            onClick={() => this.deleteItem(item)}
                            className="btn btn-sm btn-gradient-danger"
                          >
                            {" "}
                            {"حذف"}{" "}
                          </button>
                          <button
                            onClick={() =>
                              this.toggleModal(true, "update", item)
                            }
                            className="btn btn-sm btn-gradient-info"
                          >
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

export default withSnackbar(Currencies)