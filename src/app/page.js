import Link from "next/link";
import Counter from "@/app/Components/Counter";

export default function Home() {
  return (
    <div>
      <h2 className="m-5 font-bold">useReducer</h2>
      <Counter />
    </div>
  );
}
