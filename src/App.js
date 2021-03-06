import React from 'react'
import './index.css'
import AppProvider from './AppProvider'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import MetaTags from 'react-meta-tags';

const App = (props) => {

  return (
    <div>
      <MetaTags>
        <title>Mua bán tài khoản quảng cáo</title>
        <meta name="description" content="Dịch vụ mua bán tài khoản quảng cáo Facebook." />
        <meta property="og:title" content="Mua bán Tài Khoản Quảng Cáo" />
        <meta property="og:image" content="https://d1g1nj7c6ilt37.cloudfront.net/upload_file/1a47e27a26390d45ba8ed5c2b3c36a_fb_img.jpeg" />
      </MetaTags>
      <AppProvider
        {...props}
      />
      <ToastContainer
        theme='colored'
        position="bottom-right"
        autoClose={3000}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default App