import lct from "assets/images/lct.png";
import close from "assets/images/icon_close.png";

const LogoPage = () => {
	const redirect = window.sessionStorage.prev == "logo" ? "/" : window.sessionStorage.prev;
	return (
		<div className="m-0 p-0">
			<a href={redirect}>
				<div style={{ position: "fixed", right: "1rem", top: "1rem", cursor: "pointer" }}>
    			<img src={close} style={{ opacity: "0.7" }} />
    		</div>
    	</a>
			<img src={lct} style={{ width:"100%" }} />
		</div>
  );
};

export default LogoPage;
