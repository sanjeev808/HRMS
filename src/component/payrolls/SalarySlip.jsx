import { jsPDF } from "jspdf";
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import cloudHR from "../../img/company-logo.jpg";



export default function SalarySlipGenerate() {
  const printRef = React.useRef();
  let EmpID = "404";
  let EmpName = "Ankit Kumar";
  let BankName = "ICICI";
  let bankAccountNumber = "12121212121";
  let EmpEmail = "ankit@gmail.com";
  let EmpRole = "Manager";
  let WorkedDays = 20;
  const printPDF = async () => {
    const divToDisplay = printRef.current;
    const doc = new jsPDF();
    html2canvas(divToDisplay, {
      letterRendering: true,
      quality: 4,
      scale: 2,
      dpi: 144,
      useCORS: true,
      allowTaint: true,
    }).then(function (canvas) {
      const divImage = canvas.toDataURL("image/PNG", 1);
      const pdf = new jsPDF({
        orientation: "portrait",
        format: "a4",
      });
      const imgProperties = pdf.getImageProperties(divImage);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      // const pdfWidth = 210;
      // A4	210 x 297 mm
      // thats why we choose height as 290
      const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
      // const pdfHeight = 290;
      // let ratio = widthRatio > heightRatio ? heightRatio : widthRatio;
      pdf.addImage(divImage, "PNG", 0, 20, pdfWidth, pdfHeight);
      pdf.save("download.pdf");
    });
  };
  return (
    <>
      <div className="Payrolls  px-3 h3 ">
        {/* <div className="text-center">Salary Slip Generate</div> */}
        <div ref={printRef} className=" px-5 pdFile">
          <div className="">
          <img src={cloudHR} alt="" className="py-1 w-20" />
          </div>
          <table className="table table-Danger table-striped border-primary">
            <thead>
              <tr>
                <th colSpan="4">Cloud HR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="4" className="text-center h5">
                  PaySlip for March 2022
                </td>
              </tr>
              <tr>
                <td className="h5">Employee ID:</td>
                <td>{EmpID}</td>
                <td className="h5">Employee Name:</td>
                <td>{EmpName}</td>
              </tr>
              <tr>
                <td className="h5">Employee Email:</td>
                <td>{EmpEmail}</td>
                <td className="h5">Role:</td>
                <td>{EmpRole}</td>
              </tr>
              <tr>
                <td className="h5">Mobile Number:</td>
                <td>121211121211121</td>
              </tr>
              <tr>
                <td className="h5">Location:</td>
                <td>Chandigarh</td>
                <td className="h5">Department:</td>
                <td>React Js</td>
              </tr>
              <tr>
                <td className="h5">Bank Name:</td>
                <td>{BankName}</td>
                <td className="h5">Bank Account No:</td>
                <td>{bankAccountNumber}</td>
              </tr>
              <tr>
                <td className="h5">Total Days:</td>
                <td>{WorkedDays}</td>
                <td className="h5">PF No:</td>
                <td>{WorkedDays}</td>
              </tr>
            </tbody>
          </table>
          <table className="table table-Danger table-striped my-5 border-primary">
            <thead>
              <tr className="h5">
                <th>Earnings:</th>
                <th>Amount in Rs:</th>
                <th>Deductions</th>
                <th>Amount in Rs:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="h5">Basic:</td>
                <td>{bankAccountNumber}</td>
                <td className="h5">Provident Fund:</td>
                <td>{bankAccountNumber}</td>
              </tr>
              <tr>
                <td className="h5">House Rent Allowance:</td>
                <td>{bankAccountNumber}</td>
                <td className="h5">Professional Tax:</td>
                <td>{bankAccountNumber}</td>
              </tr>
              <tr>
                <td className="h5">Special Allowance:</td>
                <td>{BankName}</td>
                <td className="h5">Income Tax:</td>
                <td>{bankAccountNumber}</td>
              </tr>
              <tr>
                <td className="h5">Convneyance:</td>
                <td>{WorkedDays}</td>
              </tr>
              <tr>
                <td className="h5">Additional Special Allowance:</td>
                <td>{WorkedDays}</td>
              </tr>
              <tr>
                <td className="h5">OnCall/Shift Allowance:</td>
                <td>{WorkedDays}</td>
              </tr>
              <tr>
                <td className="h5">Gross Earning:</td>
                <td>{WorkedDays}</td>
                <td className="h5">Gross Earning:</td>
                <td>{WorkedDays}</td>
              </tr>
              <tr>
                <td colSpan="2">Net Pay</td>
                <td colSpan="2">Salary</td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex align-items-end flex-column mx-5">
            <div className="my-3 ">Checked By</div>
            <div className="my-3">Name of the Person</div>
            <img src={cloudHR} alt="signature" className="img-width" />
            <div className="my-5">Signature</div>
          </div>
        </div>
        <div className="text-center">
          <button onClick={printPDF} className="my-3 btn btn-primary">
            Generate Salary Slip
          </button>
        </div>
      </div>
    </>
  );
}
