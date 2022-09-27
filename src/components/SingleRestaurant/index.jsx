import React, { useEffect, useState } from "react";
import Accordion from "../Accordion";
import ItemDetailsRow from "../ItemDetailsRow";
import ResturantDetailsHeader from "../RestaurantDetailsHeader";
import RestaurantInfoList from "../RestaurantInfoList";
import RestaurantCategoriesList from "../RestaurantCategoriesList";
import { connect } from "react-redux";
import AccordionItem from "../AccordionItem";
import RestaurantMealCard from "../RestaurantMealCard";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function SingleRestaurant({ restaurantDetails }) {
  const [currentActive, setCurrentActive] = useState(null);
  const [content, setContent] = useState("details");
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [startSearch, setStartSearch] = useState(false);

  useEffect(() => {
    const data = []
    restaurantDetails.categories.map(c => {
      c.items.map(i => data.push({...i}))
    });
    setItems(data);
    setFilteredItems(data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <ResturantDetailsHeader 
        item={restaurantDetails?.restaurant}
        setFilteredItems={setFilteredItems}
        items={items}
        setStartSearch={setStartSearch}
        setCurrentActive={setCurrentActive}
      />
      <div className="row">
        <div className="d-xl-none">
          <ItemDetailsRow content={content} setContent={setContent} />
        </div>
        {content === "details" ? (
          <>
            <div className="order-2 order-xl-1 col-12 col-xl-8 pe-lg-4">
            <div className="pt-4 pt-lg-0">
                <div div className="d-none d-xl-block">
                  <ItemDetailsRow content={content} setContent={setContent} />
                </div>
                {restaurantDetails.categories.length ? (
                  startSearch ? (
                    filteredItems.length ? (
                      <Accordion id={"UNIQUEID"}>
                      <AccordionItem
                        title='Search result'
                        id={`search__accordion`}
                        parentID={"UNIQUEID"}
                        currentActive={currentActive}
                        setCurrentActive={setCurrentActive}
                      >
                        {filteredItems.map((item, i) => (
                          <RestaurantMealCard key={i} item={item} />
                        ))}
                      </AccordionItem>
                    </Accordion>
                    ) : (
                      <>NO RESULT AVAILABLE</>
                    )
                  ) : (
                    <Accordion id={"UNIQUEID"}>
                    {restaurantDetails.categories.map((item, i) => (
                      <AccordionItem
                        index={i}
                        key={i}
                        items={item}
                        id={`ID${i}`}
                        parentID={"UNIQUEID"}
                        currentActive={currentActive}
                        setCurrentActive={setCurrentActive}
                      >
                        {item.items.map((item, i) => (
                          <RestaurantMealCard key={i} item={item} />
                        ))}
                      </AccordionItem>
                    ))}
                  </Accordion>
                  )
                ) : (
                  <>NO RESTAURANT CATEGORIES AVAILABLE</>
                )}
              </div>
              {/* <div className="pt-4 pt-lg-0">
                <div div className="d-none d-xl-block">
                  <ItemDetailsRow content={content} setContent={setContent} />
                </div>
                {restaurantDetails.categories.length ? (
                  <Accordion id={"UNIQUEID"}>
                    {restaurantDetails.categories.map((item, i) => (
                      <AccordionItem
                        index={i}
                        key={i}
                        items={item}
                        id={`ID${i}`}
                        parentID={"UNIQUEID"}
                        currentActive={currentActive}
                        setCurrentActive={setCurrentActive}
                      >
                        {item.items
                          .filter((item) => item.is_active)
                          .map((item, i) => (
                            <RestaurantMealCard key={i} item={item} />
                          ))}
                      </AccordionItem>
                    ))}
                  </Accordion>
                ) : (
                  <>NO RESTAURANT CATEGORIES AVAILABLE</>
                )}
              </div> */}
            </div>
            <div className="order-1 order-xl-2 col-12 col-xl-4 ps-lg-4">
              <div className="pt-1 pb-4 pb-xl-0 pt-xl-5">
                {restaurantDetails.categories.length ? (
                  <RestaurantCategoriesList
                    categories={restaurantDetails.categories}
                    setCurrentActive={setCurrentActive}
                    currentActive={currentActive}
                    setStartSearch={setStartSearch}
                  />
                ) : (
                  <>NO RESTAURANT CATEGORIES AVAILABLE</>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="d-none d-xl-block">
              <ItemDetailsRow content={content} setContent={setContent} />
            </div>
            <RestaurantInfoList item={restaurantDetails.restaurant} />
          </>
        )}
      </div>
    </>
  );
});
