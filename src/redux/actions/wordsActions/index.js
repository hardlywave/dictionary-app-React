export const CALL_WORDS_METHOD = "CALL_WORDS_METHOD";

export const callWordsMethods = (methodName, methodArguments) => ({
  type: CALL_WORDS_METHOD,
  payload: {
    methodName,
    methodArguments,
  },
});
