import React from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadSeaAnemonePreset } from "tsparticles-preset-sea-anemone";
import "./ParticlesComponent.css";

interface IProps {
  // onSubmit(e:React.FormEvent<HTMLInputElement>):void
}

export class ParticlesContainer extends React.PureComponent<IProps> {
  // this customizes the component tsParticles installation
  async customInit(engine: Engine): Promise<void> {
    // this adds the preset to tsParticles, you can safely use the
    await loadSeaAnemonePreset(engine);
  }

  render() {
    const options = {
      preset: "seaAnemone",
      fullScreen: { enable: false, zIndex: 0 },
    };

    return (
      <div className={"container-sea-style"}>
        <Particles options={options} init={this.customInit} id="unrelated1" />
      </div>
    );
  }
}

export default ParticlesContainer;
