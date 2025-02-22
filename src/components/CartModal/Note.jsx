import { useRef, useState } from "react";
import PropTypes from "prop-types";
import TextArea from "../TextArea";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import Button from "../button";

const Note = ({ isOpen, onClose }) => {
  const [note, setNote] = useState("");
  const ref = useRef();
  useOnClickOutside(ref, onClose);

  return (
    <>
      <div
        className={`bg-black/30 fixed inset-0 transition-opacity duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>
      <div
        ref={ref}
        className={`fixed bottom-0 bg-white p-6 w-full transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="max-w-sm mx-auto">
          <TextArea
            id="message"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Type something..."
            rows={6}
            className="border-gray-300"
          />
          <Button className="mt-4 w-full">Apply</Button>
        </div>
      </div>
    </>
  );
};

Note.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Note;
