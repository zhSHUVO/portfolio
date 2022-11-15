import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: "#000",
                    },
                    detectRetina: false,
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: "canvas",
                        events: {
                            resize: true,
                        },
                    },
                    particles: {
                        color: {
                            value: "#fff",
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1080,
                            },
                            limit: 0,
                            value: 400,
                        },
                        opacity: {
                            animation: {
                                enable: true,
                                minimumValue: 0.05,
                                speed: 1,
                                sync: false,
                            },
                            random: {
                                enable: true,
                                minimumValue: 0.05,
                            },
                            value: 1,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: {
                                enable: true,
                                minimumValue: 0.5,
                            },
                            value: 1,
                        },
                    },
                }}
            />
        </div>
    );
};

export default Particle;
