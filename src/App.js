import { useRef } from "react";

import Navtop from "./Components/nav-top";
import FirstColumn from "./Components/firstColumn";
import SecondColumn from "./Components/secondColumn";
import ThirdColumn from "./Components/thirdColumn";
import FourthColumn from "./Components/fourthColumn";
import FifthColumn from "./Components/fifthColumn";
import SixthColumn from "./Components/sixthColumn";

function App() {
  const productRef = useRef(null);
  return (
    <>
      <Navtop />
      <FirstColumn />
      <SecondColumn product={productRef} />
      <ThirdColumn />
      <FourthColumn ref={productRef} />
      <FifthColumn />
      <SixthColumn />
    </>
  );
}

export default App;
