import FilterTags from "./FilterTags";
const SecondaryHeader = ({ setRestaurants, tag, setTag }) => {
  console.log("Secondary Header rendered");
  return (
    <div className="SecondaryHeaderContainer sm:mx-[11%] px-8 mb-8">
      <FilterTags setRestaurants={setRestaurants} tag={tag} setTag={setTag} />
    </div>
  );
};
export default SecondaryHeader;
