import React, { useState } from 'react';
import './App.css';

const anniversaryDate = new Date('2026-12-15T00:00:00+05:30');

function getRemaining() {
  return Math.ceil(Math.max(0, anniversaryDate.getTime() - Date.now()) / 86400000);
}

export default function App() {
  const [opened, setOpened] = useState(false);
  const [days] = useState(getRemaining);

  if (!opened) return <main className="cover"><div className="cover-glow glow-one" /><div className="cover-glow glow-two" /><p className="eyebrow">A CELEBRATION OF LOVE</p><button className="envelope-button" onClick={() => setOpened(true)} aria-label="Open invitation"><img src="/assets/envelope-PE3Id_YU.png" alt="Golden invitation envelope" /><span className="wax-seal">V<br /><i>&amp;</i><br />M</span></button><h1>You're Invited</h1><p className="tap-note">Tap the envelope to open the invitation</p></main>;

  return <main className="invitation">
    <div className="petal petal-a">✦</div><div className="petal petal-b">❀</div><div className="petal petal-c">✦</div>
    <section className="hero"><img className="ganesh" src="/assets/ganesh-C8xSsSOL.png" alt="" /><p className="blessing">|| Shree Ganeshaya Namah ||</p><div className="rule"><span>✦</span></div><p className="eyebrow">TOGETHER WITH THEIR FAMILY</p><p className="invite-line">request the pleasure of your company as they celebrate a beautiful journey of love</p><h1><span>Vishal</span><b>&amp;</b><span>Mona</span></h1><p className="surname">GUPTA</p><div className="anniversary-mark"><span>Celebrating</span><strong>their Anniversary</strong></div></section>
    <section className="date-section"><p className="eyebrow">SAVE THE DATE</p><h2>15 December 2026</h2><div className="date-row"><span>Tuesday</span><i>❦</i><span>December 15</span><i>❦</i><span>2026</span></div><p className="countdown"><strong>{days}</strong> days to celebrate together</p></section>
    <section className="message-section"><p className="eyebrow">WITH LOVE</p><h2>A Milestone Worth Celebrating</h2><div className="rule"><span>❀</span></div><p>Join us in honouring the cherished bond of <strong>Vishal Gupta</strong> and <strong>Mona Gupta</strong>, and in creating more beautiful memories together.</p><p className="presence">Your presence will make this celebration even more special.</p></section>
    <section className="venue-section"><p className="eyebrow">VENUE</p><h2>God Gift Hotel &amp; Resort</h2><div className="rule"><span>❀</span></div><div className="map-wrap"><iframe title="God Gift Hotel & Resort location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.7528525314283!2d76.04274957476943!3d22.996114017316025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396317000471efeb%3A0xa5265674a260ce88!2sGod%20Gift%20Hotel%20%26%20Resort!5e0!3m2!1sen!2sin!4v1793347658937!5m2!1sen!2sin" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div><a className="directions" href="https://www.google.com/maps/search/?api=1&query=God+Gift+Hotel+%26+Resort" target="_blank" rel="noreferrer">📍 Get Directions</a></section>
    <footer><p>WITH LOVE</p><h2>Vishal &amp; Mona Gupta</h2><div>15 December 2026</div></footer>
  </main>;
}
