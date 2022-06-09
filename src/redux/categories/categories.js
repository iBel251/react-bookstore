const CHECK_STATUS = 'react-bookstore/categories/CHECK_STATUS';
const initialCategoryState = [];

const categoryReducer = (state = initialCategoryState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'UNDER CONSTRUCTION';
    default:
      return state;
  }
};

const checkCategory = () => ({
  type: CHECK_STATUS,
});

export { checkCategory };
export default categoryReducer;
