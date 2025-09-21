# GrowRoomResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**imageUrl** | **string** |  | [optional] [default to undefined]
**hasActiveCrop** | **boolean** |  | [optional] [default to undefined]
**latestMeasurements** | [**Array&lt;MeasurementResource&gt;**](MeasurementResource.md) |  | [optional] [default to undefined]
**actuatorStates** | **{ [key: string]: string; }** |  | [optional] [default to undefined]
**activeCropId** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { GrowRoomResource } from './api';

const instance: GrowRoomResource = {
    id,
    name,
    imageUrl,
    hasActiveCrop,
    latestMeasurements,
    actuatorStates,
    activeCropId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
