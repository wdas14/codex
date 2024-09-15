import Counter from "@/components/counter";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <Link href="/">Back to homepage</Link>
      <h1>Counter</h1>
      <Counter />
    </>
  );
};

export default Page;
