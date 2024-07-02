<div align="center">
  <img src="https://github.com/speakeasy-sdks/novu-ts/assets/68016351/dabaa829-32c8-451b-b912-0fa1d10300bd" width="500">
  <p>Novu is an open-source notification infrastructure.</p>
  <a href="https://docs.novu.co/api-reference/overview"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000000&style=for-the-badge" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
</div>


<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add @novu/api
```

### PNPM

```bash
pnpm add @novu/api
```

### Bun

```bash
bun add @novu/api
```

### Yarn

```bash
yarn add @novu/api zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Cancel Triggered Event

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await novu.cancel("<value>");

    // Handle the result
    console.log(result);
}

run();

```

### Trigger Notification Event

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await novu.trigger({
        name: "workflow_identifier",
        overrides: {},
        payload: {},
        to: [
            {
                topicKey: "topic_key",
                type: "Topic",
            },
        ],
    });

    // Handle the result
    console.log(result);
}

run();

```

### Broadcast Event to All

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await novu.triggerBroadcast({
        name: "<value>",
        overrides: {},
        payload: {},
    });

    // Handle the result
    console.log(result);
}

run();

```

### Trigger Notification Events in Bulk

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await novu.triggerBulk({
        events: [
            {
                name: "workflow_identifier",
                overrides: {},
                payload: {},
                to: [
                    {
                        topicKey: "topic_key",
                        type: "Topic",
                    },
                ],
            },
        ],
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [Novu SDK](docs/sdks/novu/README.md)

* [cancel](docs/sdks/novu/README.md#cancel) - Cancel triggered event
* [trigger](docs/sdks/novu/README.md#trigger) - Trigger event
* [triggerBroadcast](docs/sdks/novu/README.md#triggerbroadcast) - Broadcast event to all
* [triggerBulk](docs/sdks/novu/README.md#triggerbulk) - Bulk trigger event

### [changes](docs/sdks/changes/README.md)

* [apply](docs/sdks/changes/README.md#apply) - Apply change
* [applyBulk](docs/sdks/changes/README.md#applybulk) - Apply changes
* [count](docs/sdks/changes/README.md#count) - Get changes count
* [retrieve](docs/sdks/changes/README.md#retrieve) - Get changes

### [environments](docs/sdks/environments/README.md)

* [list](docs/sdks/environments/README.md#list) - Get environments
* [retrieve](docs/sdks/environments/README.md#retrieve) - Get current environment

### [environments.apiKeys](docs/sdks/apikeys/README.md)

* [list](docs/sdks/apikeys/README.md#list) - Get api keys
* [regenerate](docs/sdks/apikeys/README.md#regenerate) - Regenerate api keys

### [executionDetails](docs/sdks/executiondetails/README.md)

* [retrieve](docs/sdks/executiondetails/README.md#retrieve) - Get execution details

### [feeds](docs/sdks/feeds/README.md)

* [create](docs/sdks/feeds/README.md#create) - Create feed
* [delete](docs/sdks/feeds/README.md#delete) - Delete feed
* [retrieve](docs/sdks/feeds/README.md#retrieve) - Get feeds

### [integrations](docs/sdks/integrations/README.md)

* [create](docs/sdks/integrations/README.md#create) - Create integration
* [delete](docs/sdks/integrations/README.md#delete) - Delete integration
* [list](docs/sdks/integrations/README.md#list) - Get integrations
* [listActive](docs/sdks/integrations/README.md#listactive) - Get active integrations
* [setAsPrimary](docs/sdks/integrations/README.md#setasprimary) - Set integration as primary
* [update](docs/sdks/integrations/README.md#update) - Update integration

### [integrations.webhooks](docs/sdks/webhooks/README.md)

* [retrieve](docs/sdks/webhooks/README.md#retrieve) - Get webhook support status for provider

### [layouts](docs/sdks/layouts/README.md)

* [create](docs/sdks/layouts/README.md#create) - Layout creation
* [delete](docs/sdks/layouts/README.md#delete) - Delete layout
* [list](docs/sdks/layouts/README.md#list) - Filter layouts
* [retrieve](docs/sdks/layouts/README.md#retrieve) - Get layout
* [setAsDefault](docs/sdks/layouts/README.md#setasdefault) - Set default layout
* [update](docs/sdks/layouts/README.md#update) - Update a layout

### [messages](docs/sdks/messages/README.md)

* [delete](docs/sdks/messages/README.md#delete) - Delete message
* [deleteByTransactionId](docs/sdks/messages/README.md#deletebytransactionid) - Delete messages by transactionId
* [retrieve](docs/sdks/messages/README.md#retrieve) - Get messages

### [workflowGroups](docs/sdks/workflowgroups/README.md)

* [create](docs/sdks/workflowgroups/README.md#create) - Create workflow group
* [delete](docs/sdks/workflowgroups/README.md#delete) - Delete workflow group
* [list](docs/sdks/workflowgroups/README.md#list) - Get workflow groups
* [retrieve](docs/sdks/workflowgroups/README.md#retrieve) - Get workflow group
* [update](docs/sdks/workflowgroups/README.md#update) - Update workflow group

### [notifications](docs/sdks/notifications/README.md)

* [list](docs/sdks/notifications/README.md#list) - Get notifications
* [retrieve](docs/sdks/notifications/README.md#retrieve) - Get notification

### [notifications.stats](docs/sdks/stats/README.md)

* [graph](docs/sdks/stats/README.md#graph) - Get notification graph statistics
* [retrieve](docs/sdks/stats/README.md#retrieve) - Get notification statistics

### [organizations](docs/sdks/organizations/README.md)

* [create](docs/sdks/organizations/README.md#create) - Create an organization
* [list](docs/sdks/organizations/README.md#list) - Fetch all organizations
* [rename](docs/sdks/organizations/README.md#rename) - Rename organization name
* [retrieve](docs/sdks/organizations/README.md#retrieve) - Fetch current organization details

### [organizations.branding](docs/sdks/branding/README.md)

* [update](docs/sdks/branding/README.md#update) - Update organization branding details

### [organizations.members](docs/sdks/members/README.md)

* [delete](docs/sdks/members/README.md#delete) - Remove a member from organization using memberId
* [list](docs/sdks/members/README.md#list) - Fetch all members of current organizations

### [subscribers](docs/sdks/subscribers/README.md)

* [create](docs/sdks/subscribers/README.md#create) - Create subscriber
* [createBulk](docs/sdks/subscribers/README.md#createbulk) - Bulk create subscribers
* [delete](docs/sdks/subscribers/README.md#delete) - Delete subscriber
* [list](docs/sdks/subscribers/README.md#list) - Get subscribers
* [retrieve](docs/sdks/subscribers/README.md#retrieve) - Get subscriber
* [update](docs/sdks/subscribers/README.md#update) - Update subscriber

### [subscribers.credentials](docs/sdks/credentials/README.md)

* [append](docs/sdks/credentials/README.md#append) - Modify subscriber credentials
* [delete](docs/sdks/credentials/README.md#delete) - Delete subscriber credentials by providerId
* [update](docs/sdks/credentials/README.md#update) - Update subscriber credentials

### [subscribers.authentication](docs/sdks/authentication/README.md)

* [chatAccessOauth](docs/sdks/authentication/README.md#chataccessoauth) - Handle chat oauth
* [chatAccessOauthCallBack](docs/sdks/authentication/README.md#chataccessoauthcallback) - Handle providers oauth redirect

### [subscribers.messages](docs/sdks/novumessages/README.md)

* [markAll](docs/sdks/novumessages/README.md#markall) - Marks all the subscriber messages as read, unread, seen or unseen. Optionally you can pass feed id (or array) to mark messages of a particular feed.
* [markAllAs](docs/sdks/novumessages/README.md#markallas) - Mark a subscriber messages as seen, read, unseen or unread
* [updateAsSeen](docs/sdks/novumessages/README.md#updateasseen) - Mark message action as seen

### [subscribers.notifications](docs/sdks/novunotifications/README.md)

* [retrieve](docs/sdks/novunotifications/README.md#retrieve) - Get in-app notification feed for a particular subscriber
* [unseenCount](docs/sdks/novunotifications/README.md#unseencount) - Get the unseen in-app notifications count for subscribers feed

### [subscribers.properties](docs/sdks/properties/README.md)

* [updateOnlineFlag](docs/sdks/properties/README.md#updateonlineflag) - Update subscriber online status

### [subscribers.preferences](docs/sdks/preferences/README.md)

* [list](docs/sdks/preferences/README.md#list) - Get subscriber preferences
* [retrieveByLevel](docs/sdks/preferences/README.md#retrievebylevel) - Get subscriber preferences by level
* [update](docs/sdks/preferences/README.md#update) - Update subscriber preference
* [updateGlobal](docs/sdks/preferences/README.md#updateglobal) - Update subscriber global preferences

### [tenants](docs/sdks/tenants/README.md)

* [create](docs/sdks/tenants/README.md#create) - Create tenant
* [delete](docs/sdks/tenants/README.md#delete) - Delete tenant
* [list](docs/sdks/tenants/README.md#list) - Get tenants
* [retrieve](docs/sdks/tenants/README.md#retrieve) - Get tenant
* [update](docs/sdks/tenants/README.md#update) - Update tenant

### [topics](docs/sdks/topics/README.md)

* [create](docs/sdks/topics/README.md#create) - Topic creation
* [delete](docs/sdks/topics/README.md#delete) - Delete topic
* [list](docs/sdks/topics/README.md#list) - Filter topics
* [rename](docs/sdks/topics/README.md#rename) - Rename a topic
* [retrieve](docs/sdks/topics/README.md#retrieve) - Get topic

### [topics.subscribers](docs/sdks/novusubscribers/README.md)

* [assign](docs/sdks/novusubscribers/README.md#assign) - Subscribers addition
* [delete](docs/sdks/novusubscribers/README.md#delete) - Subscribers removal
* [retrieve](docs/sdks/novusubscribers/README.md#retrieve) - Check topic subscriber

### [workflows](docs/sdks/workflows/README.md)

* [create](docs/sdks/workflows/README.md#create) - Create workflow
* [delete](docs/sdks/workflows/README.md#delete) - Delete workflow
* [list](docs/sdks/workflows/README.md#list) - Get workflows
* [retrieve](docs/sdks/workflows/README.md#retrieve) - Get workflow
* [update](docs/sdks/workflows/README.md#update) - Update workflow

### [workflows.variables](docs/sdks/variables/README.md)

* [retrieve](docs/sdks/variables/README.md#retrieve) - Get available variables

### [workflows.status](docs/sdks/status/README.md)

* [update](docs/sdks/status/README.md#update) - Update workflow status
<!-- End Available Resources and Operations [operations] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await novu.subscribers.list(7685.78, 10);

    for await (const page of result) {
        // handle page
    }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { Novu } from "@novu/api";
import { SDKValidationError } from "@novu/api/models/errors";

const novu = new Novu({
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    let result;
    try {
        result = await novu.cancel("<value>");
    } catch (err) {
        switch (true) {
            case err instanceof SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.novu.co` | None |
| 1 | `https://eu.api.novu.co` | None |

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
    serverIdx: 1,
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await novu.cancel("<value>");

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
    serverURL: "https://api.novu.co",
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await novu.cancel("<value>");

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Novu } from "@novu/api";
import { HTTPClient } from "@novu/api/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Novu({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type     | Scheme   |
| -------- | -------- | -------- |
| `apiKey` | apiKey   | API key  |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await novu.cancel("<value>");

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await novu.cancel("<value>", {
        retries: {
            strategy: "backoff",
            backoff: {
                initialInterval: 1,
                maxInterval: 50,
                exponent: 1.1,
                maxElapsedTime: 100,
            },
            retryConnectionErrors: false,
        },
    });

    // Handle the result
    console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
    retryConfig: {
        strategy: "backoff",
        backoff: {
            initialInterval: 1,
            maxInterval: 50,
            exponent: 1.1,
            maxElapsedTime: 100,
        },
        retryConnectionErrors: false,
    },
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await novu.cancel("<value>");

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
