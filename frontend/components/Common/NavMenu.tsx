import Link from "next/link";

const NavMenu: React.FC = () => {
  return (
    <div className="flex ml-[96px]">
      <ul className="mr-[80px]">
        <li className="mt-6 mb-8">
          <Link
            href="category/womanfashion"
            as={`/category/womanfashion`}
            shallow
          >
            Woman’s Fashion
          </Link>
        </li>
        <li className="mb-8">
          <Link href="category/menfashion" as={`/category/menfashion`} shallow>
            Men’s Fashion
          </Link>
        </li>
        <li className="mb-8">
          <Link
            href="category/electronics"
            as={`/category/electronics`}
            shallow
          >
            Electronics
          </Link>
        </li>
        <li className="mb-8">
          <Link
            href="category/accessories"
            as={`/category/accessories`}
            shallow
          >
            Accessories
          </Link>
        </li>
        <li className="mb-8">
          <Link href="category/furniture" as={`/category/furniture`} shallow>
            Furniture
          </Link>
        </li>
        <li className="mb-8">
          <Link href="category/football" as={`/category/football`} shallow>
            Football
          </Link>
        </li>
        <li className="mb-8">
          <Link href="category/groceries" as={`/category/groceries`} shallow>
            Groceries
          </Link>
        </li>
        <li className="mb-8">
          <Link href="category/other" as={`/category/other`} shallow>
            Other
          </Link>
        </li>
      </ul>
      <div className=" h-[500px] w-px bg-gray-400"></div>
    </div>
  );
};

export default NavMenu;
