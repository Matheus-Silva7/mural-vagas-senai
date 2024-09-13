// src/components/ParticlesBackground.js
import React from 'react';
import Particles from 'react-tsparticles';

const ParticlesBackground = () => {
  const particlesInit = (main) => {
    // You can initiate the tsParticles instance (main) here, adding custom shapes or presets if needed
  };

  const particlesLoaded = (container) => {
    // You can use the container here if needed
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 3,
          },
          opacity: {
            value: 0.5,
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesBackground;
