import React from "react";
import "../History/History.css";
import { renderParagraphs } from "../../Utils/textUtils";

const History = ({ field_ish_history }) => {
  return (
    <>
      <section className="sectionHistory">
        <div className="history">
          <div className="text-history">
            <h1 className="text-history-h1">ISH</h1>
            <h3 className="text-history-h3">History</h3>
          </div>
        </div>

        <div className="marca"></div>
        <div className="body-history">
          {/* {    field_ish_history} */}

          {renderParagraphs(field_ish_history)}
        </div>
      </section>
    </>
  );
};

export default History;
