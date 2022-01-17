export const CALL_PHONETICS_METHOD = "CALL_PHONETICS_METHOD";

export const callPhoneticsMethods = (methodName, methodArguments) => ({
  type: CALL_PHONETICS_METHOD,
  payload: {
    methodName,
    methodArguments,
  },
});
