"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const links = [
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Blogs",
            path: "/blogs"
        }
    ]

    const handler = () =>{
        router.push("/services")
    }

    if(pathName.includes("dashboard"))
      return <div className="bg-red-500">Dashboard Layout</div>

  return (
    <div>
      <nav className="bg-green-500 flex justify-between">
        <h6>Logo</h6>
        <ul className="flex gap-4">
          {
            links.map(link=><Link className={`${pathName===link.path && "text-red-500"}`} key={link.title} href={link.path}>{link.title}</Link>)
          }
        </ul>
          <button onClick={handler} className="bg-blue-500 text-white">Login</button>
      </nav>
    </div>
  );
};

export default Navbar;
