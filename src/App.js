import './App.css';
import { useState } from 'react';
import QRCode from 'qrcode.react';
// import QRCodeLink from 'qrcode.react'

function App() {
  const [link, setlink]=useState('')
  // const [qrcodelink,setqrcodelink] = useState('')
  
// function handleGenerate(link_url){
//   QRCodeLink.toDataUrl(link_url,{
//     width:600,
//     margin:3,
//   }, function(err, url){
//     setqrcodelink(url);
    
//   })
// }

  function handleQRcode(event){
    setlink(event.target.value);
    // handleGenerate(event.target.value)
  }
  return (
    <div className='container'>

      <QRCode
        value={link}
      />

        <input className='input' placeholder='insira um link' value={link} onChange={(e)=>handleQRcode(e)}/>

    </div>
  );
}

export default App;
