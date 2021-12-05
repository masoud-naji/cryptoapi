import React from "react";
import GoogleTrends from "./GoogleTrends";

const googleTrendShow = (Keyword) => {
  return (
    <div id="widget">
      <GoogleTrends
        type="TIMESERIES"
        keyword={Keyword}
        url="https://ssl.gstatic.com/trends_nrtr/2051_RC11/embed_loader.js"
      />
      {/* <GoogleTrends
        type="GEO_MAP"
        keyword={Keyword}
        url="https://ssl.gstatic.com/trends_nrtr/2051_RC11/embed_loader.js"
      /> */}
    </div>
  );
};

export default googleTrendShow;
