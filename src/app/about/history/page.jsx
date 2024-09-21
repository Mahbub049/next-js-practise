import Link from "next/link";

const page = () => {
    return (
        <div>
            History Page
            <Link className="block text-lg " href={"/about/history/vision"}>Vision Page</Link>
        </div>
    );
};

export default page;