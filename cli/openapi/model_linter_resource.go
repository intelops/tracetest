/*
TraceTest

OpenAPI definition for TraceTest endpoint and resources

API version: 0.2.1
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// checks if the LinterResource type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &LinterResource{}

// LinterResource struct for LinterResource
type LinterResource struct {
	Type *string             `json:"type,omitempty"`
	Spec *LinterResourceSpec `json:"spec,omitempty"`
}

// NewLinterResource instantiates a new LinterResource object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewLinterResource() *LinterResource {
	this := LinterResource{}
	return &this
}

// NewLinterResourceWithDefaults instantiates a new LinterResource object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewLinterResourceWithDefaults() *LinterResource {
	this := LinterResource{}
	return &this
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *LinterResource) GetType() string {
	if o == nil || isNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LinterResource) GetTypeOk() (*string, bool) {
	if o == nil || isNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *LinterResource) HasType() bool {
	if o != nil && !isNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *LinterResource) SetType(v string) {
	o.Type = &v
}

// GetSpec returns the Spec field value if set, zero value otherwise.
func (o *LinterResource) GetSpec() LinterResourceSpec {
	if o == nil || isNil(o.Spec) {
		var ret LinterResourceSpec
		return ret
	}
	return *o.Spec
}

// GetSpecOk returns a tuple with the Spec field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *LinterResource) GetSpecOk() (*LinterResourceSpec, bool) {
	if o == nil || isNil(o.Spec) {
		return nil, false
	}
	return o.Spec, true
}

// HasSpec returns a boolean if a field has been set.
func (o *LinterResource) HasSpec() bool {
	if o != nil && !isNil(o.Spec) {
		return true
	}

	return false
}

// SetSpec gets a reference to the given LinterResourceSpec and assigns it to the Spec field.
func (o *LinterResource) SetSpec(v LinterResourceSpec) {
	o.Spec = &v
}

func (o LinterResource) MarshalJSON() ([]byte, error) {
	toSerialize, err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o LinterResource) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !isNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	if !isNil(o.Spec) {
		toSerialize["spec"] = o.Spec
	}
	return toSerialize, nil
}

type NullableLinterResource struct {
	value *LinterResource
	isSet bool
}

func (v NullableLinterResource) Get() *LinterResource {
	return v.value
}

func (v *NullableLinterResource) Set(val *LinterResource) {
	v.value = val
	v.isSet = true
}

func (v NullableLinterResource) IsSet() bool {
	return v.isSet
}

func (v *NullableLinterResource) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableLinterResource(val *LinterResource) *NullableLinterResource {
	return &NullableLinterResource{value: val, isSet: true}
}

func (v NullableLinterResource) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableLinterResource) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}