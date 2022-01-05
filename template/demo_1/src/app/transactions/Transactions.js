import React, { Component } from "react";
import DataGridView from "../shared/DataGridView";
import { GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { centralTransactions } from "../../data";

const columns = [
  {  headerAlign: 'center', field: "id", headerName: "#", width: 150, align: "center" },
  {  headerAlign: 'center', field: "bank", headerName: "اسم البنك", width: 150, align: "center" },
  {
     headerAlign: 'center', field: "currencyType",
    headerName: "نوع العملة",
    width: 150,
    align: "center",
  },
  {  headerAlign: 'center', field: "price", headerName: "القيمة", width: 150, align: "center" },
  {  headerAlign: 'center', field: "comment", headerName: "تعليق مصاحب", width: 150, align: "center" },
//   {  headerAlign: 'center', field: "status", headerName: "حالة الطلب", width: 150, align: "center" },
  {  headerAlign: 'center', field: "date", headerName: "التاريخ", width: 150, align: "center" },
  {
     headerAlign: 'center', field: "status",
    headerName: "حالة الطلب",
    width: 150,
    editable: true,
    align: "center",
    renderCell: (params) => (
      <label
        className={
          params.value == "pending"
            ? "badge badge-gradient-warning"
            : params.value == "done"
            ? "badge badge-gradient-success"
            : "badge badge-gradient-danger"
        }
      >
        {params.value}
      </label>
    ),
  },
  {
     headerAlign: 'center', field: "icon",
    headerName: "شعار البنك",
    width: 150,
    
    editable: true,
    align: "center",
    renderCell: (params) => (
      <img
        src={params.value}
        style={{ width: 60, height: 60, borderRadius: 30 }}
      />
    ), // renderCell will render the component
  },
];

export default class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleModal: false,
      rows: [],
    };
  }

  componentDidMount() {
    this.setState({
      rows: centralTransactions,
    });
  }

  toggleModal = (toggleModal) => {
    this.setState({
      toggleModal,
    });
  };

  render() {
    return (
      <div>
        {/* <NewBank toggleModal={this.toggleModal} modalStatus={this.state.toggleModal} /> */}
        <DataGridView columns={columns} rows={this.state.rows} />
      </div>
    );
  }
}
