import Lottie from "lottie-react";
import * as smile from "./../assets/lotties/smile.json";
import "./modal.css";
import { useModal } from "@saimin/react-modal-manager";

function SmileModal({ id }: { id: string }) {
  const { close } = useModal();

  const handleClose = () => {
    close(id);
  };

  return (
    <div className="modal">
      <div className="close" onClick={handleClose}>
        <svg
          height="20"
          viewBox="0 0 20 20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
            fill="rgb(228, 50, 140)"
          ></path>
        </svg>
      </div>

      <div className="modal-content">
        <Lottie
          animationData={smile}
          style={{
            width: 200,
            height: 200,
          }}
        />

        <div className="message">Have a good day</div>
      </div>
    </div>
  );
}

export default SmileModal;
