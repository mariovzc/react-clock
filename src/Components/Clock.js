import React, {useEffect, useState} from 'react'
import "nes.css/css/nes.min.css";
import "../styles/clock.css"

export default () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timerID = setInterval( () => tick(), 1000 );
    return () =>  clearInterval(timerID);
  });

  const tick = () => setDate(new Date())

  return (
    <div className="container">
      <section class="nes-container">
        <section class="message-list">
          <section class="message -left">
            <div class="nes-balloon from-left">
              <p>Hola, la hora actual es {date.toLocaleTimeString()}</p>
            </div>
          </section>
          <i className="nes-mario"></i>
        </section>
      </section>
    </div>
  );
}