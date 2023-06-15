/*
 * TraceTest
 *
 * OpenAPI definition for TraceTest endpoint and resources
 *
 * API version: 0.2.1
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi

type LinterResult struct {
	MinimumScore int32 `json:"minimumScore,omitempty"`

	Passed bool `json:"passed,omitempty"`

	Score int32 `json:"score,omitempty"`

	Plugins []LinterResultPlugin `json:"plugins,omitempty"`
}

// AssertLinterResultRequired checks if the required fields are not zero-ed
func AssertLinterResultRequired(obj LinterResult) error {
	for _, el := range obj.Plugins {
		if err := AssertLinterResultPluginRequired(el); err != nil {
			return err
		}
	}
	return nil
}

// AssertRecurseLinterResultRequired recursively checks if required fields are not zero-ed in a nested slice.
// Accepts only nested slice of LinterResult (e.g. [][]LinterResult), otherwise ErrTypeAssertionError is thrown.
func AssertRecurseLinterResultRequired(objSlice interface{}) error {
	return AssertRecurseInterfaceRequired(objSlice, func(obj interface{}) error {
		aLinterResult, ok := obj.(LinterResult)
		if !ok {
			return ErrTypeAssertionError
		}
		return AssertLinterResultRequired(aLinterResult)
	})
}