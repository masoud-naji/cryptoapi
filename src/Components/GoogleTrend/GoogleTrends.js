import React from "react";
import Script from "react-load-script";


export default function GoogleTrends({ type, keyword, url }) {

  console.log(keyword)

  const handleScriptLoad = (_) => {
    window.trends.embed.renderExploreWidgetTo(
      document.getElementById("widget"),
      type,
      {
        comparisonItem: [{ keyword, geo: "US", time: "today 12-m" }],
        category: 0,
        property: "",
      },
      {
        exploreQuery: `q=${encodeURI(keyword)}&geo=US&date=today 12-m`,
        guestPath: "https://trends.google.com:443/trends/embed/",
      }
    );
  };

  const renderGoogleTrend = (_) => {
    return <Script url={url} onLoad={handleScriptLoad} />;
  };

  return <div className="googleTrend">{renderGoogleTrend()}</div>;
}


// <script type="text/javascript" 
// src="https://ssl.gstatic.com/trends_nrtr/2790_RC04/embed_loader.js">
// </script> <script type="text/javascript">
//    trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"/m/012l1vxv","geo":"US","time":"today 12-m"},
//    {"keyword":"/g/11c6w0ddw9","geo":"US","time":"today 12-m"},{"keyword":"/g/11c0vmgx5d","geo":"US","time":"today 12-m"},
//    {"keyword":"/m/060kv","geo":"US","time":"today 12-m"},{"keyword":"/m/02_qnn","geo":"US","time":"today 12-m"}],
//    "category":5,"property":""},
//     {"exploreQuery":"cat=5&geo=US&q=%2Fm%2F012l1vxv,%2Fg%2F11c6w0ddw9,%2Fg%2F11c0vmgx5d,%2Fm%2F060kv,%2Fm%2F02_qnn&date=today 12-m,today 12-m,today 12-m,today 12-m,today 12-m","guestPath":"https://trends.google.com:443/trends/embed/"}); 
//     </script>


/* <script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2790_RC01/embed_loader.js">

</script> <script type="text/javascript">
   trends.embed.renderExploreWidget("TIMESERIES",
    {"comparisonItem":[{"keyword":"crypto currency","geo":"US","time":"today 12-m"}],"category":0,"property":""},
     {"exploreQuery":"q=crypto%20currency&geo=US&date=today 12-m","guestPath":"https://trends.google.com:443/trends/embed/"}); </script>


<script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2790_RC01/embed_loader.js">

</script> <script type="text/javascript">
   trends.embed.renderExploreWidget("RELATED_TOPICS",
    {"comparisonItem":[{"keyword":"crypto currency","geo":"US","time":"today 12-m"}],"category":0,"property":""}, 
    {"exploreQuery":"q=crypto%20currency&geo=US&date=today 12-m","guestPath":"https://trends.google.com:443/trends/embed/"}); </script> */