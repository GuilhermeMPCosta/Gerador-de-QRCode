import './App.css';
import QRCode from 'qrcode.react';

function App() {
  return (
    <div className='container'>

      <QRCode
        value='https://www.linkedin.com/in/guilhermemarquespaulino/'
      />

        <input className='input' placeholder='insira um link'/>
    </div>
  );
}

export default App;
