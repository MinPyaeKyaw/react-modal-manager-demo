import { useModal } from "@saimin/react-modal-manager";
import "./style.css";
import SmileModal from "../modals/SmileModal";
import FullScreenModal from "../modals/FullScreenModal";

function Home() {
  const { open } = useModal();

  const handleDefaultOpen = () => {
    open("default", {
      content: <SmileModal id="default" />,
    });
  };

  const handleZoomOpen = () => {
    open("zoom", {
      content: <SmileModal id="zoom" />,
      animationType: "zoom",
    });
  };

  const handleFadeOpen = () => {
    open("fade", {
      content: <SmileModal id="fade" />,
      animationType: "fade",
    });
  };

  const handleSlideTopOpen = () => {
    open("slide-from-top", {
      content: <SmileModal id="slide-from-top" />,
      animationType: "slide-from-top",
    });
  };

  const handleSlideBottomOpen = () => {
    open("slide-from-bottom", {
      content: <SmileModal id="slide-from-bottom" />,
      animationType: "slide-from-bottom",
    });
  };

  const handleSlideLeftOpen = () => {
    open("slide-from-left", {
      content: <SmileModal id="slide-from-left" />,
      animationType: "slide-from-left",
    });
  };

  const handleSlideRightOpen = () => {
    open("slide-from-right", {
      content: <SmileModal id="slide-from-right" />,
      animationType: "slide-from-right",
    });
  };

  const handleTopLeftOpen = () => {
    open("top-left", {
      content: <SmileModal id="top-left" />,
      position: "top-left",
    });
  };

  const handleTopRightOpen = () => {
    open("top-right", {
      content: <SmileModal id="top-right" />,
      position: "top-right",
    });
  };

  const handleTopCenterOpen = () => {
    open("top-center", {
      content: <SmileModal id="top-center" />,
      position: "top-center",
    });
  };

  const handleBottomLeftOpen = () => {
    open("bottom-left", {
      content: <SmileModal id="bottom-left" />,
      position: "bottom-left",
    });
  };

  const handleBottomRightOpen = () => {
    open("bottom-right", {
      content: <SmileModal id="bottom-right" />,
      position: "bottom-right",
    });
  };

  const handleBottomCenterOpen = () => {
    open("bottom-center", {
      content: <SmileModal id="bottom-center" />,
      position: "bottom-center",
    });
  };

  const handleCenterRightOpen = () => {
    open("center-right", {
      content: <SmileModal id="center-right" />,
      position: "center-right",
    });
  };

  const handleCenterLeftOpen = () => {
    open("center-left", {
      content: <SmileModal id="center-left" />,
      position: "center-left",
    });
  };

  const handleFullscreenOpen = () => {
    open("fullscreen", {
      content: <FullScreenModal />,
      fullscreen: true,
    });
  };

  const handleBackdropColorOpen = () => {
    open("backdrop-color", {
      content: <SmileModal id="backdrop-color" />,
      backdropColor: "pink",
    });
  };

  const handleBackdropOpacityOpen = () => {
    open("backdrop-opacity", {
      content: <SmileModal id="backdrop-opacity" />,
      backdropColor: "pink",
      backdropOpacity: 0.8,
    });
  };

  return (
    <div className="home">
      <div className="links">
        <a
          href="https://github.com/MinPyaeKyaw/react-modal-manager"
          target="_blank"
        >
          Documentation
        </a>

        <a
          href="https://github.com/MinPyaeKyaw/react-modal-manager"
          target="_blank"
        >
          Source Code
        </a>
      </div>

      <h1>Animation Types</h1>
      <div className="buttons">
        <button onClick={handleDefaultOpen}>Default</button>

        <button onClick={handleZoomOpen}>Zoom</button>

        <button onClick={handleFadeOpen}>Fade</button>

        <button onClick={handleSlideTopOpen}>Slide from top</button>

        <button onClick={handleSlideBottomOpen}>Slide from bottom</button>

        <button onClick={handleSlideLeftOpen}>Slide from left</button>

        <button onClick={handleSlideRightOpen}>Slide from right</button>
      </div>

      <h1>Positions</h1>
      <div className="buttons">
        <button onClick={handleDefaultOpen}>Default</button>

        <button onClick={handleTopLeftOpen}>Top Left</button>

        <button onClick={handleTopRightOpen}>Top Right</button>

        <button onClick={handleTopCenterOpen}>Top Center</button>

        <button onClick={handleBottomLeftOpen}>Bottom Left</button>

        <button onClick={handleBottomRightOpen}>Bottom Right</button>

        <button onClick={handleBottomCenterOpen}>Bottom Center</button>

        <button onClick={handleCenterRightOpen}>Center Right</button>

        <button onClick={handleCenterLeftOpen}>Center Left</button>
      </div>

      <h1>Fullscreen</h1>
      <div className="buttons">
        <button onClick={handleFullscreenOpen}>Fullscreen</button>
      </div>

      <h1>Customize Backdrop</h1>
      <div className="buttons">
        <button onClick={handleBackdropColorOpen}>Pink Backdrop</button>
        <button onClick={handleBackdropOpacityOpen}>0.8 Opacity</button>
      </div>
    </div>
  );
}

export default Home;
