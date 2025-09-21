# AuthenticationApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**signIn**](#signin) | **POST** /api/v1/authentication/sign-in | Sign in a user|
|[**signOut**](#signout) | **POST** /api/v1/authentication/sign-out | Sign out a user|

# **signIn**
> AuthenticatedUserResource signIn(signInResource)

Sign in a user with the provided username and password.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    SignInResource
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let signInResource: SignInResource; //

const { status, data } = await apiInstance.signIn(
    signInResource
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signInResource** | **SignInResource**|  | |


### Return type

**AuthenticatedUserResource**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User signed in successfully. |  -  |
|**404** | User not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signOut**
> signOut()

Signs out the current user by invalidating the authentication cookie.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

const { status, data } = await apiInstance.signOut();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User signed out successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

