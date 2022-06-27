import {createSelector} from '@reduxjs/toolkit';
import {RootState} from 'redux/store';

const createTestSelectorsStateSelector = (state: RootState) => state.createTest;

const CreateTestSelectors = () => ({
  selectStepList: createSelector(createTestSelectorsStateSelector, ({stepList}) => stepList),
  selectPlugin: createSelector(createTestSelectorsStateSelector, ({pluginName}) => pluginName),
  selectStepNumber: createSelector(createTestSelectorsStateSelector, ({stepNumber}) => stepNumber),
  selectDraftTest: createSelector(createTestSelectorsStateSelector, ({draftTest}) => draftTest),
  selectActiveStep: createSelector(
    createTestSelectorsStateSelector,
    ({stepList, stepNumber}) => stepList[stepNumber]?.id || ''
  ),
});

export default CreateTestSelectors();
