import React from 'react'
import Button from 'react-bootstrap/Button';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

export const ExportCSV = ({csvData, fileName}) => {

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToCSV = (csvData, fileName) => {
        var tempdata = [];
        csvData.slice(0, 4).map((eachdata) => {
            var x = {"Scheme Code" : eachdata.id, "Fund Name" : eachdata.name,"A" : eachdata.a,"AA"  :eachdata.aa, "AAA" : eachdata.aaa,"AUM" : eachdata.aum,"Avg Maturity" : eachdata.avgmaturity,"Beta 1Y" : eachdata.beta,"Beta 3Y" : eachdata.beta3,"Beta 5Y" : eachdata.beta5,"Beta 7Y" : eachdata.beta7,"Category"  :eachdata.category,"DIV Yield" : eachdata.divyield,"Duration"  :eachdata.duration,"IR 1Y" : eachdata.informationratio,"IR 3Y" : eachdata.informationratio3,"IR 5Y" : eachdata.informationratio5,"IR 7Y" : eachdata.informationratio7,"Jensen 1Y" : eachdata.jensen,"Jensen 3Y" : eachdata.jensen3,"Jensen 5Y" : eachdata.jensen5,"Jensen 7Y" : eachdata.jensen7, "Largecap" : eachdata.largecap, midcap : eachdata.midcap , smallcap : eachdata.smallcap,"PB" : eachdata.pb, "PE" : eachdata.pe,"Sharpe 1Y" : eachdata.sharpe,"Sharpe 3Y" : eachdata.sharpe3,"Sharpe 5Y" : eachdata.sharpe5,"Sharpe 7Y" : eachdata.sharpe7,"Sortino 1Y" : eachdata.sortino,"Sortino 3Y" : eachdata.sortino3,"Sortino 5Y" : eachdata.sortino5,"Sortino 7Y" : eachdata.sortino7,"SOV" : eachdata.sov,"ST DEV 1Y" : eachdata.stdev,"ST DEV 3Y" : eachdata.stdev3, "ST DEV 5Y" : eachdata.stdev5,"ST DEV 7Y" : eachdata.stdev7,"Subcategory" : eachdata.subcategory,"TER" : eachdata.ter,"TREY 1Y" : eachdata.trey,"TREY 3Y" : eachdata.trey3, "TREY 5Y" : eachdata.trey5, "TREY 7Y" : eachdata.trey7, "YTM" : eachdata.ytm,"1M" : eachdata.m1,"3M" : eachdata.m3,"6M" : eachdata.m6,"1Y" : eachdata.y1,"3Y" : eachdata.y3, "5Y" : eachdata.y5,"7Y" : eachdata.y7, "10Y" : eachdata.y10};
            tempdata.push(x);
        })
        const ws = XLSX.utils.json_to_sheet(tempdata);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, fileName + fileExtension);
    }

    return (
        <Button variant="warning" style={{backgroundColor : "#141d1d",borderWidth : 0,color : 'white',fontWeight : 'bolder'}} onClick={(e) => exportToCSV(csvData,fileName)}>Export</Button>
    )
}