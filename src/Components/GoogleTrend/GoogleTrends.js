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



{/* <script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2790_RC01/embed_loader.js">

</script> <script type="text/javascript">
   trends.embed.renderExploreWidget("TIMESERIES",
    {"comparisonItem":[{"keyword":"crypto currency","geo":"US","time":"today 12-m"}],"category":0,"property":""},
     {"exploreQuery":"q=crypto%20currency&geo=US&date=today 12-m","guestPath":"https://trends.google.com:443/trends/embed/"}); </script>


<script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2790_RC01/embed_loader.js">

</script> <script type="text/javascript">
   trends.embed.renderExploreWidget("RELATED_TOPICS",
    {"comparisonItem":[{"keyword":"crypto currency","geo":"US","time":"today 12-m"}],"category":0,"property":""}, 
    {"exploreQuery":"q=crypto%20currency&geo=US&date=today 12-m","guestPath":"https://trends.google.com:443/trends/embed/"}); </script> */}