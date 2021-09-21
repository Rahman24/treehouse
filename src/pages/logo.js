import lct from "assets/images/lct.png";
import close from "assets/images/icon_close.png";

const LogoPage = () => {
	return (
		<div className="m-0 p-0">
			<div style={{ position: "fixed", right: "1rem", top: "1rem", cursor: "pointer" }} onClick={()=>{window.history.back()}}>
    		<img src={close} style={{ opacity: "0.7" }} />
    	</div>
			<img src={lct} style={{ width:"100%" }} />
		</div>
  );
};

export default LogoPage;
