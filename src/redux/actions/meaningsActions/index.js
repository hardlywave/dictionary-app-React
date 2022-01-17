export const CALL_MEANINGS_METHOD = "CALL_MEANINGS_METHOD";

export const callMeaningsMethod = (methodName, methodArguments) => ({
  type: CALL_MEANINGS_METHOD,
  payload: {
    methodName,
    methodArguments,
  },
});
