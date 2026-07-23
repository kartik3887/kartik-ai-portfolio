import { NAV_LINKS } from "@/constants/navigation";

const NavLinks = () => {
  return (
    <ul className="flex items-center gap-8">
      {NAV_LINKS.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="text-gray-700 transition-colors duration-300 hover:text-blue-600"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;