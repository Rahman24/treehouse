import {useEffect, useState} from "react";

import l1 from "assets/images/lct1.png";
import l2 from "assets/images/lct2.png";
import l3 from "assets/images/lct3.png";
import close from "assets/images/icon_close.png";

const LogoPage = () => {
  const mediaMatch = window.matchMedia('(min-width: 1000px)');
  const [matches, setMatches] = useState(mediaMatch.matches);
  useEffect(() => {
    const handler = e => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });
	const style = {
		img: ismob => ({
	    width: ismob ? '75%' : "100%"
	  })
  }
  const back = window
  return (
    <div className="m-0 p-0" style={{ textAlign: "center", backgroundColor: "#213141" }}>
    	<div style={{ position: "fixed", right: "1rem", top: "1rem", cursor: "pointer" }} onClick={()=>{window.history.back()}}>
    		<img src={close} style={{ opacity: "0.7" }} />
    	</div>
			<img src={l1} style={{ width: "100%" }} />
			<img src={l2} style={style.img(matches)} />
			<img src={l3} style={{ width: "100%" }} />
    </div>
  );
};

export default LogoPage;
