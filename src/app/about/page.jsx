import Link from "next/link";

const page = () => {
  return (
    <div>
      About Page
      <ul className="flex text-lg justify-center gap-6">
        <li>
          <Link href={"/about/history"}>History</Link>
        </li>
        <li>
          <Link href={"/about/mission"}>Mission</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
