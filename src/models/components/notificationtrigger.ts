/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types";
import {
    NotificationTriggerVariable,
    NotificationTriggerVariable$,
} from "./notificationtriggervariable";
import * as z from "zod";

export const NotificationTriggerType = {
    Event: "event",
} as const;
export type NotificationTriggerType = ClosedEnum<typeof NotificationTriggerType>;

export type NotificationTrigger = {
    identifier: string;
    subscriberVariables?: Array<NotificationTriggerVariable> | undefined;
    type: NotificationTriggerType;
    variables: Array<NotificationTriggerVariable>;
};

/** @internal */
export namespace NotificationTriggerType$ {
    export const inboundSchema = z.nativeEnum(NotificationTriggerType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace NotificationTrigger$ {
    export const inboundSchema: z.ZodType<NotificationTrigger, z.ZodTypeDef, unknown> = z.object({
        identifier: z.string(),
        subscriberVariables: z.array(NotificationTriggerVariable$.inboundSchema).optional(),
        type: NotificationTriggerType$.inboundSchema,
        variables: z.array(NotificationTriggerVariable$.inboundSchema),
    });

    export type Outbound = {
        identifier: string;
        subscriberVariables?: Array<NotificationTriggerVariable$.Outbound> | undefined;
        type: string;
        variables: Array<NotificationTriggerVariable$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NotificationTrigger> = z.object({
        identifier: z.string(),
        subscriberVariables: z.array(NotificationTriggerVariable$.outboundSchema).optional(),
        type: NotificationTriggerType$.outboundSchema,
        variables: z.array(NotificationTriggerVariable$.outboundSchema),
    });
}
