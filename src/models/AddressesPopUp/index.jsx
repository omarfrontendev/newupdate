/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { connect } from "react-redux";
import { Form, Field } from "react-final-form";
import ModalPopUp from "../../components/Modal";
import PopUpWrapper from "../../components/PopUpWrapper";
import styles from "./.module.scss";
import validators from "../../validators";
import SubmitBtn from "../../components/SubmitBtn";
import FormInput from "../../components/FormInput";

import { addUserAddress, getUserAddreses } from "../../redux/actions";

const registerFormElements = [
  {
    type: "text",
    name: "area",
    placeholder: "Area",
    validate: validators.composeValidators(
      validators.required("Area"),
      validators.minLength("Area", 3)
    ),
  },
  {
    type: "text",
    name: "street_name",
    placeholder: "Street Name",
    validate: validators.composeValidators(
      validators.required("Street Name"),
      validators.minLength("Street Name", 3)
    ),
  },
  {
    type: "text",
    name: "building_type",
    placeholder: "Building Type",
    validate: validators.composeValidators(
      validators.required("Building Type"),
      validators.minLength("Building Type", 3)
    ),
  },
  {
    type: "text",
    name: "building_name",
    placeholder: "Building Name",
    validate: validators.composeValidators(
      validators.required("Building Name"),
      validators.minLength("Building Name", 3)
    ),
  },
  {
    type: "text",
    name: "apartment_number",
    placeholder: "Apartment Number",
    validate: validators.composeValidators(
      validators.required("Apartment Number"),
      validators.minLength("Apartment Number", 3)
    ),
  },
  {
    type: "text",
    name: "address_name",
    placeholder: "Address Name",
    validate: validators.composeValidators(
      validators.required("Address Name"),
      validators.minLength("Address Name", 3)
    ),
  },
  {
    type: "number",
    name: "mobile_number",
    icon: "mobile_number",
    placeholder: "Mobile Number",
    validate: validators.composeValidators(
      validators.required("Mobile Number"),
      validators.phoneNumber
    ),
  },
  {
    type: "text",
    name: "floor_number",
    placeholder: "Floor Number",
  },
  {
    type: "text",
    name: "landmark",
    placeholder: "Landmark",
  },
];

const mapStateToProps = (state) => state;
const mapDispatchToProps = { addUserAddress, getUserAddreses };

export const AddressesPopUp = ({
  location,
  addUserAddress,
  getUserAddreses,
}) => {
  const onSubmit = async (values) => {
    await addUserAddress({
      ...values,
      lat: location.lat,
      long: location.lng,
      mobile_number: `009710${
        values.mobile_number.startsWith("0")
          ? values.mobile_number.slice(1)
          : values.mobile_number
      }`,
    });
    getUserAddreses();
  };

  return (
    <ModalPopUp maxWidth={"600px"} id={"add__address__model"}>
      <div className={styles.member__area__modal}>
        <PopUpWrapper
          textStart={true}
          id={"add__address__model"}
          title={"Add Address"}
        >
          <>
            <div className={styles.sign__form__container}>
              <div className={styles.Sign__form__content}>
                {/* ///////////////////////////////////////////////////////////////////// */}
                {/* /////////////////////////////////////////////////////////////////////// */}
                {/* /////////////////////////////////////////////////////////////////////// */}

                <Form
                  onSubmit={onSubmit}
                  validate={(values) => {
                    const errors = {};
                    if (values.password_confirmation) {
                      if (values.password_confirmation !== values.password) {
                        errors.password_confirmation =
                          "Password and confirmation must be matched";
                      }
                    }
                    return errors;
                  }}
                >
                  {({ handleSubmit, submitting, form }) => {
                    return (
                      <form
                        id="user__register__form"
                        className={styles.form__sign}
                        onSubmit={(e) =>
                          handleSubmit(e)
                            // }
                            .then(form.reset)
                        }
                      >
                        <div
                          className={`${styles.inputs__container} d-flex flex-column`}
                        >
                          {registerFormElements.map((item, i) => (
                            <Field
                              key={i}
                              component={FormInput}
                              placeholder={item.placeholder}
                              icon={item.icon}
                              type={item.type}
                              name={item.name}
                              validate={item.validate}
                            />
                          ))}
                        </div>

                        <div className="pt-5">
                          <SubmitBtn
                            onClick={form.reset}
                            solidStyle={false}
                            type="submit"
                            disabled={submitting}
                          >
                            Submit
                          </SubmitBtn>
                        </div>
                      </form>
                    );
                  }}
                </Form>
                {/* /////////////////////////////////////////////////////////////////////*/}
                {/* /////////////////////////////////////////////////////////////////////*/}
                {/* /////////////////////////////////////////////////////////////////////*/}
              </div>
            </div>
          </>
        </PopUpWrapper>
      </div>
    </ModalPopUp>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressesPopUp);
