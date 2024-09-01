import { useModal } from "@saimin/react-modal-manager";
import * as cat from "./../assets/lotties/cat.json";
import Lottie from "lottie-react";
import ChildOneModal from "./ChildOneModal";

function ParentModal({ id }: { id: string }) {
  const { close, open } = useModal();

  const handleClose = () => {
    close(id);
  };

  const handleChildOpen = () => {
    open("child", {
      content: <ChildOneModal id="child" />,
    });
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
          animationData={cat}
          style={{
            width: 200,
            height: 200,
          }}
        />
        <div className="message">This is parent modal</div>
        <button onClick={handleChildOpen}>Open child one</button>
      </div>
    </div>
  );
}

export default ParentModal;
