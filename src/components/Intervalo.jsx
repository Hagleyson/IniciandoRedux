import React from "react";
import "./Intervalo.css";
import Card from "./Card";

export default function Intervalo() {
  return (
    <Card title="Intrvalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo</strong>
          <input type="number" value={0} />
        </span>
        <span>
          <strong>Máximo</strong>
          <input type="number" value={10} />
        </span>
      </div>
    </Card>
  );
}
