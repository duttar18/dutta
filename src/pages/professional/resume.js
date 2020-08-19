
import "./resume.css"
import React, {useState} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {Link} from 'react-router-dom'
import { withRouter, Router, NavLink, Route, Switch, useLocation } from 'react-router-dom';
import { createMemoryHistory } from 'history';


import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
//import { Document, Page } from '../../../node_modules/react-pdf/build/entry.noworker';

function Resume() {

 
  return (
    <div className="resume-container">
      <form method="get" action={require('./resume.pdf')} className="resume-download-container">
        <button className="resume-download" type="submit">Open as PDF</button>
      </form>
      <Document file={require('./resume.pdf')}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}



export default Resume
