
import "./resume.css"
import React from 'react'


import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
//import { Document, Page } from '../../../node_modules/react-pdf/build/entry.noworker';

function Resume() {

 
  return (
    <div className="resume-container">
      <form method="get" action={require('./resume2020.pdf')} className="resume-download-container">
        <button className="resume-download" type="submit">Open as PDF</button>
      </form>
      <Document file={require('./resume2020.pdf')}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}



export default Resume
