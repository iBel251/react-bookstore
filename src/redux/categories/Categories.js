const CATEGORY = 'CATEGORY';
const initialCategoryState = [];

const categoryReducer = (state = initialCategoryState, action) => {
  switch (action.type) {
    case CATEGORY:
      return 'Null';
    default:
      return state;
  }
};

const checkCategory = () => ({
  type: CATEGORY,
});

export { checkCategory };
export default categoryReducer;
