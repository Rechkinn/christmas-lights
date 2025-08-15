import { useState } from "react";
import Light from "../Light/Light";
import "./Lights.scss";

export default function Lights() {
  const widthLight = 100;

  const [isActive, setIsActive] = useState(true);
  const [buttonText, setButtonText] = useState("OFF");
  const [updateCountLights, setUpdateCountLights] = useState(
    Math.ceil(document.documentElement.scrollWidth / widthLight)
  );

  function renderLights(on) {
    let isRed = on ? true : false;
    let isGreen = false;
    let isBlue = false;
    let isPurple = false;

    const isColors = [isRed, isGreen, isBlue, isPurple];
    const lightsForRender = [];

    for (
      let i = 0;
      i < Math.ceil(document.documentElement.scrollWidth / widthLight);
      i++
    ) {
      let lightObj = {
        id: `${Math.random()}`.split(".")[1],
        isRed: isColors[0],
        isGreen: isColors[1],
        isBlue: isColors[2],
        isPurple: isColors[3],
      };

      lightsForRender.push(lightObj);

      if (on) {
        for (let j = 0; j < isColors.length; j++) {
          if (isColors[j]) {
            isColors[j] = false;
            isColors[(j + 1) % isColors.length] = true;
            break;
          }
        }
      }
    }

    return lightsForRender.map((_, k) => {
      return (
        <Light
          key={lightsForRender[k].id}
          isRed={lightsForRender[k].isRed}
          isGreen={lightsForRender[k].isGreen}
          isBlue={lightsForRender[k].isBlue}
          isPurple={lightsForRender[k].isPurple}
        />
      );
    });
  }

  window.addEventListener("resize", () => {
    setUpdateCountLights(
      Math.ceil(document.documentElement.scrollWidth / widthLight)
    );
  });

  return (
    <article className="christmas-light">
      <div className="christmas-light__lights">{renderLights(isActive)}</div>
      <button
        className="christmas-light__button"
        onClick={() => {
          buttonText === "OFF" ? setButtonText("ON") : setButtonText("OFF");
          setIsActive((prev) => !prev);
        }}
      >
        {buttonText}
      </button>
    </article>
  );
}
