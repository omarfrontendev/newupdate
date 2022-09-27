import React from "react";
import ModalPopUp from "../../components/Modal";
import PopUpWrapper from "../../components/PopUpWrapper";
import FilterOptions from "../../components/FilterOptions";

export default function SearchFilterPopUp() {
  return (
    <ModalPopUp maxWidth="600px" id={"search__filters__modal"}>
      <div className={"search__filter__wrapper"}>
        <PopUpWrapper
          textStart={true}
          title={"Filters"}
          id={"search__filters__modal"}
        >
          <FilterOptions />
        </PopUpWrapper>
      </div>
    </ModalPopUp>
  );
}
