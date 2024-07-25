import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, BrowserRouter as Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import OtpForm from './components/OtpForm/OtpForm.jsx'
import DragAndDrop from './components/Drag_and_Drop/DragAndDrop.jsx'
import Paginate from './components/paginations/Paginate.jsx'
import Layout from './Layout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children : [
      {
        path: "",
        element: <OtpForm  otpLength={4} />
      },
      {
        path: "otp-form",
        element: <OtpForm  otpLength={4} />
      },
      {
        path : "course-list",
        element : <DragAndDrop />
      },
      {
        path : "batches",
        element : <Paginate />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)