import React from "react";

function Footer({ func }) {
  return (
    <footer className="list-property-footer">
      <div>
        <button>Back</button>
        <button onClick={() => func()}>Proceed</button>
      </div>
    </footer>
  );
}

export default Footer;
