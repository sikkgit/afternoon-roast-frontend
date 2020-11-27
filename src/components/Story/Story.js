import React from "react";
import parse from "html-react-parser";
import "./Story.css";

export default function Story({ title, tag, content }) {
  return (
    <div>
      <table
        {...{
          width: "100%",
          cellPadding: "0",
          cellSpacing: "0",
          border: "0",
          style: { borderCollapse: "collapse" },
        }}
      >
        <tbody>
          <tr>
            <td className="section body-copy">
              <table
                {...{
                  width: "100%",
                  cellPadding: "0",
                  cellSpacing: "0",
                  border: "0",
                  style: { borderCollapse: "collapse" },
                }}
              >
                <tr>
                  <td className="tag-outer">
                    <table
                      {...{
                        align: "left",
                        cellPadding: "0",
                        cellSpacing: "0",
                        border: "0",
                        style: {
                          display: "inline-block",
                          borderCollapse: "collapse",
                        },
                      }}
                    >
                      <tr>
                        <td className="tag-inner" style={{ color: "#ffffff" }}>
                          {tag}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <h1 style={{ color: "#000000" }}>{title}</h1>
              {parse(content)}
              <p className="p_btn-social">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.createsend1.com/ei/j/30/B40/C56/csimport/facebook_icon.png"
                    style={{ display: "inline", maxWidth: 20 }}
                    alt=""
                  />
                </a>
                &nbsp;&nbsp;
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.createsend1.com/ei/j/30/B40/C56/csimport/twitter_icon.png"
                    style={{ display: "inline", maxWidth: 20 }}
                    alt=""
                  />
                </a>
                &nbsp;&nbsp;
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.createsend1.com/ei/j/30/B40/C56/csimport/linkedin_icon.png"
                    style={{ display: "inline", maxWidth: 20 }}
                    alt=""
                  />
                </a>
                &nbsp;&nbsp;
                <a
                  href="mailto:?subject=Check%20out%20this%20story%20from%20Morning%20Brew!&amp;body=www.morningbrew.com%0A%0AWant%20more%20great%20content%3F%20Subscribe%20to%20Morning%20Brew%27s%20daily%20newsletter%20for%20all%20the%20latest%20news%20from%20Wall%20Street%20to%20Silicon%20Valley%20%40%20www.morningbrew.com."
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.createsend1.com/ei/j/30/B40/C56/csimport/mail_icon.png"
                    style={{ display: "inline", maxWidth: 20 }}
                    alt=""
                  />
                </a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
