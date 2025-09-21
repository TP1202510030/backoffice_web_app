# MeasurementsApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addMeasurementsToCurrentPhase**](#addmeasurementstocurrentphase) | **POST** /api/v1/crops/{cropId}/measurements | Add multiple measurements to the current phase of a crop|
|[**getMeasurementsByCropPhaseId**](#getmeasurementsbycropphaseid) | **GET** /api/v1/crop-phases/{phaseId}/measurements | Get measurements by crop phase ID|
|[**getMeasurementsForCurrentPhase**](#getmeasurementsforcurrentphase) | **GET** /api/v1/crops/{cropId}/measurements/current | Get measurements for the current phase of a crop|

# **addMeasurementsToCurrentPhase**
> addMeasurementsToCurrentPhase(addMeasurementsToCurrentPhaseResource)

Adds multiple measurements to the current phase of the specified crop and returns a success message.

### Example

```typescript
import {
    MeasurementsApi,
    Configuration,
    AddMeasurementsToCurrentPhaseResource
} from './api';

const configuration = new Configuration();
const apiInstance = new MeasurementsApi(configuration);

let cropId: number; // (default to undefined)
let addMeasurementsToCurrentPhaseResource: AddMeasurementsToCurrentPhaseResource; //

const { status, data } = await apiInstance.addMeasurementsToCurrentPhase(
    cropId,
    addMeasurementsToCurrentPhaseResource
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addMeasurementsToCurrentPhaseResource** | **AddMeasurementsToCurrentPhaseResource**|  | |
| **cropId** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Measurements added successfully |  -  |
|**400** | Invalid input or unable to add measurements |  -  |
|**404** | Crop not found or no current phase set |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMeasurementsByCropPhaseId**
> CropResource getMeasurementsByCropPhaseId()

Retrieves a paginated list of measurements associated with a given crop phase ID.

### Example

```typescript
import {
    MeasurementsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MeasurementsApi(configuration);

let phaseId: number; // (default to undefined)
let page: number; //Zero-based page index (0..N) (optional) (default to 0)
let size: number; //The size of the page to be returned (optional) (default to 20)
let sort: Array<string>; //Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. (optional) (default to undefined)

const { status, data } = await apiInstance.getMeasurementsByCropPhaseId(
    phaseId,
    page,
    size,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **phaseId** | [**number**] |  | defaults to undefined|
| **page** | [**number**] | Zero-based page index (0..N) | (optional) defaults to 0|
| **size** | [**number**] | The size of the page to be returned | (optional) defaults to 20|
| **sort** | **Array&lt;string&gt;** | Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. | (optional) defaults to undefined|


### Return type

**CropResource**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Measurements retrieved successfully |  -  |
|**204** | No measurements found for the grow room |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMeasurementsForCurrentPhase**
> PageMeasurementResource getMeasurementsForCurrentPhase()

Retrieve all measurements for the current phase of a crop by its ID.

### Example

```typescript
import {
    MeasurementsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MeasurementsApi(configuration);

let cropId: number; // (default to undefined)
let page: number; //Zero-based page index (0..N) (optional) (default to 0)
let size: number; //The size of the page to be returned (optional) (default to 20)
let sort: Array<string>; //Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. (optional) (default to undefined)

const { status, data } = await apiInstance.getMeasurementsForCurrentPhase(
    cropId,
    page,
    size,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cropId** | [**number**] |  | defaults to undefined|
| **page** | [**number**] | Zero-based page index (0..N) | (optional) defaults to 0|
| **size** | [**number**] | The size of the page to be returned | (optional) defaults to 20|
| **sort** | **Array&lt;string&gt;** | Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. | (optional) defaults to undefined|


### Return type

**PageMeasurementResource**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Measurements retrieved successfully |  -  |
|**404** | Crop not found or no current phase available |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

