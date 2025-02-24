import { useState } from "react";
import PropTypes from "prop-types";
import TextArea from "../TextArea";
import Button from "../button";
import Drawer from "../Drawer";

const Note = ({ isOpen, onClose }) => {
  const [note, setNote] = useState("");

  return (
    <Drawer isOpen={isOpen} onClose={onClose} position="bottom">
      <div className="max-w-sm mx-auto p-4">
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
    </Drawer>
  );
};

Note.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Note;
