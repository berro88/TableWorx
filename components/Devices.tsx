export function HeroDevices() {
  return (
    <div className="devices" aria-hidden="true">
      <div className="phone waiter">
        <WaiterScreen />
      </div>
      <div className="tablet">
        <KdsScreen />
      </div>
      <div className="phone guest">
        <GuestScreen />
      </div>
    </div>
  );
}

export function KdsScreen() {
  return (
    <div className="screen">
      <div className="kds-top">
        <span>TableWorx KDS</span>
        <span>Grill · Expo</span>
      </div>
      <div className="tickets">
        <div className="col queue">
          <h4>
            <span className="dot" />
            Queue
          </h4>
          <article className="ticket">
            <b>#108 Chocolate cake</b>
            Table 7 · 2m
          </article>
          <article className="ticket">
            <b>#109 Caesar salad</b>
            Table 2 · 4m
          </article>
        </div>
        <div className="col prep">
          <h4>
            <span className="dot" />
            Preparing
          </h4>
          <article className="ticket">
            <b>#105 Truffle pasta</b>
            Table 4 · 8m
          </article>
          <article className="ticket">
            <b>#106 Grilled salmon</b>
            Table 12 · 5m
          </article>
        </div>
        <div className="col ready">
          <h4>
            <span className="dot" />
            Ready
          </h4>
          <article className="ticket">
            <b>#107 Margherita</b>
            Table 9 · pass
          </article>
        </div>
      </div>
    </div>
  );
}

export function WaiterScreen() {
  return (
    <div className="screen">
      <div className="phone-top">
        <span>Section A</span>
        <span>Live</span>
      </div>
      <div className="tables">
        <div className="table open">
          T2 Occupied <span>3 courses</span>
        </div>
        <div className="table">
          T4 Fire mains <span>Now</span>
        </div>
        <div className="table open">
          T7 Ready <span>Dessert</span>
        </div>
        <div className="table">
          T9 Paid <span>Turn</span>
        </div>
      </div>
    </div>
  );
}

export function GuestScreen() {
  return (
    <div className="screen">
      <div className="phone-top">
        <span>Table 12</span>
        <span>QR menu</span>
      </div>
      <div className="menu-list">
        <div className="item">
          Truffle pasta <span>R185</span>
        </div>
        <div className="item">
          Grilled salmon <span>R210</span>
        </div>
        <div className="item">
          Margherita <span>R95</span>
        </div>
        <div className="item">
          Split bill <span>Pay</span>
        </div>
      </div>
    </div>
  );
}
