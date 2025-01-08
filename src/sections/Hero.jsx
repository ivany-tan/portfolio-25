import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../components/CanvasLoader.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import { useMediaQuery } from "react-responsive";
// import { Leva, useControls } from "leva";
import { PerspectiveCamera } from "@react-three/drei";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Workbench } from "../components/Workbench.jsx";

const ScrollDown = () => {
  return (
    <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
      <a href="#about">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-blue-100 flex justify-center items-start p-2">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1 bg-blue"
          />
        </div>
      </a>
    </div>
  );
};

const WorkbenchCanvas = () => {
  // const x = useControls("Workbench", {
  //   positionX: { value: 0.5, min: -10, max: 10 },
  //   positionY: { value: 0.5, min: -10, max: 10 },
  //   positionZ: { value: 0.5, min: -10, max: 10 },

  //   rotationX: { value: 0, min: -10, max: 10 },
  //   rotationY: { value: 0, min: -10, max: 10 },
  //   rotationZ: { value: 0, min: -10, max: 10 },

  //   scale: { value: 1, min: 0.05, max: 5 },
  // });

  const model = {
    positionX: -0.3,
    positionY: -3.9,
    positionZ: 0.3,
    rotationX: 0.4,
    rotationY: -1.8,
    rotationZ: 0.2,
    sacle: 3,
  };

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="w-full h-full absolute inset-0">
      {/* <Leva /> */}
      <Canvas className="w-full h-full">
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />
          <HeroCamera isMobile={isMobile}>
            {/* <Workbench
              scale={x.scale}
              position={[x.positionX, x.positionY, x.positionZ]}
              rotation={[x.rotationX, x.rotationY, x.rotationZ]}
            /> */}
            <Workbench
              scale={isMobile ? 2.5 : model.sacle}
              position={[model.positionX, model.positionY, model.positionZ]}
              rotation={[model.rotationX, model.rotationY, model.rotationZ]}
            />
          </HeroCamera>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="hero"
      className={`relative w-full h-screen mx-auto overflow-hidden`}
    >
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center text-center sm:text-left align-middle">
          <h1 className={`${styles.heroHeadText} text-blue-100`}>
            Hi, I'm <span className="text-navy">Yujie</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-blue-100`}>
            I build seamless and <br className="sm:block hidden" />
            responsive web applications.
          </p>
        </div>
      </div>

      <WorkbenchCanvas />
      <ScrollDown />
    </section>
  );
};

export default Hero;
