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
        <>
          <div className="group m-auto px-4 py-4">
            {items.length >= 1 && (
              <h3 className="mb-6 text-2xl font-semibold">
                Items by your search: {categorySlugUpperCase}
              </h3>
            )}
            <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              {items.map((item) => (
                <Item product={item} key={item._id} />
              ))}
              {fetching &&
                Array.from({ length: 5 }).map((_, i) => (
                  <ItemLoading key={i} />
                ))}
            </div>
            {end && items.length !== 0 && (
              <h3 className="my-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                That's All
              </h3>
            )}
            {items.length <= 0 && !fetching && (
              <h3 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                Nothing was found
              </h3>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
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
            <h3 className="my-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              That's All
            </h3>
          )}
          {items.length <= 0 && !fetching && (
            <h3 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Nothing was found
            </h3>
          )}
        </>
      )}
    </>
  );
}
