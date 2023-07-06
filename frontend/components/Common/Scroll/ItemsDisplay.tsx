import { Product } from "@/types/types";
import Item from "../Item";
import ItemLoading from "../ItemLoading";

interface ItemsDisplayProps {
  items: Product[];
  fetching: boolean;
  end: boolean;
  categorySlugUpperCase: string | null;
  type: "myproducts" | "categories" | "all" | "search";
}

export default function ItemsDisplay({
  items,
  fetching,
  end,
  type,
  categorySlugUpperCase,
}: ItemsDisplayProps) {
  return (
    <>
      {categorySlugUpperCase ? (
        <div className="m-auto py-4 px-4 group">
          {items.length >= 1 && (
            <h3 className="font-semibold text-2xl mb-6">
              Items by your search: {categorySlugUpperCase}
            </h3>
          )}
          <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
            {items.map((item) => (
              <Item product={item} key={item._id} />
            ))}
            {fetching &&
              Array.from({ length: 5 }).map((_, i) => <ItemLoading key={i} />)}
          </div>
          {end && items.length !== 0 && (
            <h3 className="text-center my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              That's All
            </h3>
          )}
          {items.length <= 0 && !fetching && (
            <h3 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Nothing was found
            </h3>
          )}
        </div>
      ) : (
        <>
          <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
            {items.map((item) => (
              <Item
                product={item}
                key={item._id}
                itemForEdit={type === "myproducts" ? true : false}
              />
            ))}
            {fetching &&
              Array.from({ length: 5 }).map((_, i) => <ItemLoading key={i} />)}
          </div>
          {end && items.length !== 0 && (
            <h3 className="text-center my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              That's All
            </h3>
          )}
          {items.length <= 0 && !fetching && (
            <h3 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Nothing was found
            </h3>
          )}
        </>
      )}
    </>
  );
}
