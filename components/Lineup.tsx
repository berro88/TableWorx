import { Icon } from "./Icons";
import { heroNodes } from "@/lib/site";

export function Lineup() {
  return (
    <div className="lineup" aria-hidden="true">
      <svg className="wires" viewBox="0 0 100 100" preserveAspectRatio="none">
        {heroNodes.map((node) => (
          <path
            key={node.label}
            d={`M ${node.x + 2} ${node.y + 12} C ${node.x + 2} ${node.y + 30}, 50 ${node.y + 28}, 50 46`}
            fill="none"
            stroke="rgba(180, 206, 226, 0.35)"
            strokeWidth="0.25"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      <div className="nodes">
        {heroNodes.map((node) => (
          <span
            className="node"
            key={node.label}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <i>
              <Icon name={node.icon} size={15} />
            </i>
            {node.label}
          </span>
        ))}
      </div>

      <div className="stage">
        <div className="dev p5">
          <div className="bezel">
            <div className="slot" />
            <div className="screen">
              <div className="apps">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <p className="amount">R 210.00</p>
            </div>
          </div>
          <span className="dev-label" style={{ left: 0, top: "-2.6rem" }}>
            <b>P5</b>
            Mobile POS
            <br />& Payments
          </span>
        </div>

        <div className="dev pos">
          <div className="bezel">
            <div className="screen">
              <div className="ui">
                <div className="ui-side">
                  <b>TableWorx</b>
                  <span className="on">Home</span>
                  <span>Orders</span>
                  <span>Reservations</span>
                  <span>Payments</span>
                  <span>Menu</span>
                  <span>Inventory</span>
                  <span>Staff</span>
                  <span>Customers</span>
                  <span>Reports</span>
                </div>
                <div className="ui-main">
                  <div className="ui-head">
                    <span>Active Orders</span>
                    <span>Item</span>
                    <span>Table</span>
                    <span>Status</span>
                    <span>Time</span>
                  </div>
                  <div className="ui-row">
                    <span>#104</span>
                    <span>Truffle Pasta</span>
                    <span>6</span>
                    <span className="tag p">Preparing</span>
                    <span>2m</span>
                  </div>
                  <div className="ui-row">
                    <span>#105</span>
                    <span>Caesar Salad</span>
                    <span>3</span>
                    <span className="tag r">Ready</span>
                    <span>5m</span>
                  </div>
                  <div className="ui-row">
                    <span>#106</span>
                    <span>Grilled Salmon</span>
                    <span>8</span>
                    <span className="tag p">Preparing</span>
                    <span>8m</span>
                  </div>
                  <div className="ui-row">
                    <span>#107</span>
                    <span>Margherita Pizza</span>
                    <span>12</span>
                    <span className="tag r">Served</span>
                    <span>13m</span>
                  </div>
                  <div className="ui-row">
                    <span>#108</span>
                    <span>Chocolate Cake</span>
                    <span>7</span>
                    <span className="tag q">Queue</span>
                    <span>1m</span>
                  </div>

                  <div className="stats">
                    <div className="stat">
                      <small>Today’s Sales</small>
                      <b>R 4,892</b>
                      <span className="up">▲ 12%</span>
                    </div>
                    <div className="stat">
                      <small>Total Orders</small>
                      <b>128</b>
                      <span className="up">▲ 8%</span>
                    </div>
                    <div className="stat">
                      <small>New Guests</small>
                      <b>24</b>
                      <span className="up">▲ 20%</span>
                    </div>
                  </div>
                  <div className="spark">
                    {[38, 52, 44, 66, 58, 74, 62, 86, 70, 94].map((h, i) => (
                      <i key={i} style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="stand">TableWorx</div>
        </div>

        <div className="dev printer">
          <div className="receipt">
            <b>TableWorx</b>
            Good Food
            <br />
            Great Experiences
            <div className="qr" />
            Thank You
          </div>
          <div className="box">
            <span />
          </div>
          <span className="dev-label" style={{ left: "0.2rem", bottom: "-2.4rem" }}>
            <b>D80B</b>
            Receipt Printer
          </span>
        </div>

        <div className="dev t2">
          <div className="bezel">
            <div className="screen">
              <h5>Our Menu</h5>
              <div className="chips">
                <i>Starters</i>
                <i>Mains</i>
                <i>Desserts</i>
              </div>
              <div className="dishes">
                <div className="dish">
                  <i />
                  <span>Truffle Pasta · R185</span>
                </div>
                <div className="dish two">
                  <i />
                  <span>Grilled Salmon · R210</span>
                </div>
              </div>
            </div>
          </div>
          <span className="dev-label" style={{ right: "0.4rem", bottom: "-2.4rem" }}>
            <b>T2</b>
            Tableside Tablet
          </span>
        </div>
      </div>
    </div>
  );
}
