import { useState, useEffect } from "react";
import Container from "../../components/Container";
import { Image } from "../../components/Image";
import Text from "../../components/Text";
import { Date, Hour } from '../../components/Date'

interface Props {
  lockScreen: boolean;
  setLockScreen: any;
}
interface AppStateProps {
  animateScreen: { className: string; up: boolean };
  date: {
    hour: any
  }
}

export default function LockScreen({ lockScreen, setLockScreen }: Props) {
  const [animateScreen, setAnimateScreen] = useState<
    AppStateProps["animateScreen"]
  >({
    className: "",
    up: false,
  });


  const handleUpLockScreen = () => {
    console.log("Lock Screen Up");
    setAnimateScreen({ className: "lockScreenAnimatedUp", up: true });
    setTimeout(() => {
      console.log("Lock Screen None");
      setAnimateScreen({ className: "display_none", up: true });
      setLockScreen(false);
    }, 4000);
  };

  return (
    <Container className={`container_lockScreen ${animateScreen.className}`}>
      <Image name="windows10_1" className="img_wallpapers" />
      <Container className="container_lockScreen_date">
        <Hour className="hour"/>
        <Date className="date"/>
      </Container>
      <div onClick={handleUpLockScreen} className={"handleLockScreen"}></div>
    </Container>
  );
}
