const createActionType = (name: string): string => {
  return '@ReduxModel/' + name;
};

const ACTION_TYPES = {
  persist: createActionType('persist'),
  metaRestore: createActionType('meta/restore'),
  httpRequest: createActionType('http/request'),
};

export default ACTION_TYPES;
