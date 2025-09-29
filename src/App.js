import React, { useEffect, useState } from "react";
import { Treemap, Tooltip } from "recharts";

function App() {
  const [data, setData] = useState([]);

  // Загружаем данные с backend
  useEffect(() => {
    fetch("https://density-backend-yqap.onrender.com/data")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", background: "#111", color: "#fff" }}>
      <h2 style={{ textAlign: "center", padding: "10px" }}>Карта плотностей</h2>
      <Treemap
        width={800}
        height={600}
        data={data}
        dataKey="value"
        stroke="#333"
        content={({ x, y, width, height, name, color }) => (
          <g>
            <rect
              x={x}
              y={y}
              width={width}
              height={height}
              style={{ fill: color, stroke: "#111" }}
              rx={6}
            />
            <text
              x={x + 10}
              y={y + 20}
              fill="white"
              fontSize={12}
              fontWeight="bold"
            >
              {name}
            </text>
          </g>
        )}
      >
        <Tooltip />
      </Treemap>
    </div>
  );
}

export default App;
