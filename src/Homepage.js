//import Fibo from "./Fibo";
import PairSporesComponent from "./components/PairSporesComponent";
import FiboComponent from "./components/FiboComponent";
import Fibo from "./Fibo";
import PairSpores from "./PairSpores";

export default function Homepage() {
  return (
    <div>
      <div className="body">
        <h2>Nicol Mouton</h2>
        <h1>BioScout Technical Challenge</h1>
        <h3 style={{ color: "red" }}>Open the console to see test cases</h3>
        <PairSporesComponent />
        <FiboComponent />
      </div>
    </div>
  );
}
