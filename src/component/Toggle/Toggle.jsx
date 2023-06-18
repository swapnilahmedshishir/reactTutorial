import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const Toggle = () => {
  const [toggle, setToggle] = useState(true);
  
  const btnToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div
      style={{
        margin: "1rem",
        background: "pink",
        padding: "1rem",
        textAlign: "justify",
        fontWeight: "500",
      }}
    >
      {toggle && (
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
          veniam eligendi voluptatum quo reiciendis non nihil, aperiam qui saepe
          velit molestiae. Ipsam non voluptatibus, fugit dolorum ad accusantium,
          qui recusandae odit aut earum fuga rem provident expedita aperiam!
          Numquam, maiores saepe. Iure dolorum porro quaerat itaque,
          reprehenderit vitae numquam mollitia beatae eligendi eaque illo quos
          nemo inventore unde dolor blanditiis libero nulla aliquam? Amet cum
          harum hic id possimus debitis, laborum ipsa recusandae? Dolores
          doloremque ipsum quas vel assumenda exercitationem ad velit, repellat
          temporibus dicta id, mollitia accusamus nesciunt, quos amet ullam est
          aliquid. Architecto aliquid voluptatem nisi repellat impedit.
        </p>
      )}
      <div style={{ textAlign: "center" }}>
        {toggle ? (
          <Button variant="danger" onClick={btnToggle}>
            Hide
          </Button>
        ) : (
          <Button variant="success" onClick={btnToggle}>
            show
          </Button>
        )}
      </div>
    </div>
  );
};
