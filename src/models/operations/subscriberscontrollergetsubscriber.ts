/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type SubscribersControllerGetSubscriberRequest = {
    subscriberId: string;
};

/** @internal */
export namespace SubscribersControllerGetSubscriberRequest$ {
    export const inboundSchema: z.ZodType<
        SubscribersControllerGetSubscriberRequest,
        z.ZodTypeDef,
        unknown
    > = z.object({
        subscriberId: z.string(),
    });

    export type Outbound = {
        subscriberId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        SubscribersControllerGetSubscriberRequest
    > = z.object({
        subscriberId: z.string(),
    });
}