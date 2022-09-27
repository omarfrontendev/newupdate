const required = (type) => (value) =>
  value || typeof value === "number" ? undefined : `${type} Is Required`;

const maxLength = (type, max) => (value) =>
  value && value.length > max
    ? `${type} must be ${max} characters or less`
    : undefined;

const minLength = (type, min) => (value) =>
  value && value.length < min
    ? `${type} must be ${min} characters or more`
    : undefined;

const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

const alphaNumeric = (value) =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters are allowed"
    : undefined;

const phoneNumber = (value) =>
  value &&
  !/[^0-9 ]/i.test(value) &&
  (value.startsWith("0") ? value.length !== 10 : value.length !== 9)
    ? // !/^(0|[0-9][0-9]{8})$/i.test(value.startsWith("0") ? value.slice(1) : value)
      "Invalid phone number"
    : undefined;

const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

const validators = {
  required,
  maxLength,
  minLength,
  email,
  alphaNumeric,
  phoneNumber,
  composeValidators,
};
export default validators;
