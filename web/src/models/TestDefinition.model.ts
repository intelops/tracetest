import {TRawTestDefinition, TTestDefinition} from '../types/TestDefinition.types';
import Assertion from './Assertion.model';

const TestDefinition = ({definitions = []}: TRawTestDefinition): TTestDefinition => {
  return {
    definitionList: definitions.map(({selector = '', assertions = []}) => ({
      selector,
      assertionList: assertions.map(rawAssertion => Assertion(rawAssertion)),
    })),
  };
};

export default TestDefinition;