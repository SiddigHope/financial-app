import React, { Component } from "react";
import DataGridView from "../shared/DataGridView";
// import { GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { centralTransactions } from "../../data";

const columns = [
  {
    headerAlign: "center",
    field: "id",
    headerName: "#",
    width: 150,
    align: "center",
  },
  {
    headerAlign: "center",
    field: "bank",
    headerName: "اسم البنك",
    width: 150,
    align: "center",
  },
  {
    headerAlign: "center",
    field: "currencyType",
    headerName: "نوع العملة",
    width: 150,
    align: "center",
  },
  {
    headerAlign: "center",
    field: "price",
    headerName: "القيمة",
    width: 150,
    align: "center",
  },
  {
    headerAlign: "center",
    field: "comment",
    headerName: "تعليق مصاحب",
    width: 150,
    align: "center",
  },
  //   {  headerAlign: 'center', field: "status", headerName: "حالة الطلب", width: 150, align: "center" },
  {
    headerAlign: "center",
    field: "date",
    headerName: "التاريخ",
    width: 150,
    align: "center",
  },
  // {
  //   headerAlign: "center",
  //   field: "status",
  //   headerName: "حالة الطلب",
  //   width: 150,
  //   editable: true,
  //   align: "center",
  //   renderCell: (params) => (
  //     <label
  //       className={
  //         params.value == "pending"
  //           ? "badge badge-gradient-warning"
  //           : params.value == "done"
  //           ? "badge badge-gradient-success"
  //           : "badge badge-gradient-danger"
  //       }
  //     >
  //       {params.value}
  //     </label>
  //   ),
  // },
  {
    headerAlign: "center",
    field: "status",
    headerName: "تغيير حالة المعاملة",
    width: 150,

    editable: true,
    align: "center",
    renderCell: (params) => (
      <>
        {params.value == "done" ? (
          <div>
            <button className="btn btn-sm btn-gradient-success">
              {" "}
              {"تم التاكيد"}{" "}
            </button>
          </div>
        ) : params.value == "rejected" ? (
          <div>
            <button className="btn btn-sm btn-gradient-danger">
              {" "}
              {"تم الرفض"}{" "}
            </button>
          </div>
        ) : (
          <div>
            <button className="btn btn-sm btn-gradient-danger">
              {" "}
              {"رفض"}{" "}
            </button>
            <button className="btn btn-sm btn-gradient-success">
              {" "}
              {"تأكيد"}{" "}
            </button>
          </div>
        )}
      </>
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
        <DataGridView
          title={"جميع المعاملات مع البنوك"}
          page={"trans"}
          columns={columns}
          rows={this.state.rows}
        />
      </div>
    );
  }
}
