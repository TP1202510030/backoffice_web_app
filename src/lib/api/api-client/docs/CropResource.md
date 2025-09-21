# CropResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [default to undefined]
**startDate** | **string** |  | [optional] [default to undefined]
**endDate** | **string** |  | [optional] [default to undefined]
**sensorActivationFrequency** | **string** |  | [optional] [default to undefined]
**growRoomId** | **number** |  | [optional] [default to undefined]
**phases** | [**Array&lt;CropPhaseResource&gt;**](CropPhaseResource.md) |  | [optional] [default to undefined]
**currentPhase** | [**CropPhaseResource**](CropPhaseResource.md) |  | [optional] [default to undefined]
**totalProduction** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { CropResource } from './api';

const instance: CropResource = {
    id,
    startDate,
    endDate,
    sensorActivationFrequency,
    growRoomId,
    phases,
    currentPhase,
    totalProduction,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
