const checkValidData = (fullName, email, phone) => {
  const isFullName =
    /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
      fullName
    );
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  if (isFullName !== undefined && !isFullName) return Error(1);
  if (isEmailValid !== undefined && !isEmailValid) return Error(2);

  return null;
};

export default checkValidData;
