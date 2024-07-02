<!-- Start SDK Example Usage [usage] -->
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