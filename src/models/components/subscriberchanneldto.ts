/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ChannelCredentialsDto, ChannelCredentialsDto$ } from "./channelcredentialsdto";
import * as z from "zod";

export type ProviderId = {};

export type SubscriberChannelDto = {
    integrationIdentifier?: string | undefined;
    providerId: ProviderId;
    credentials: ChannelCredentialsDto;
};

/** @internal */
export namespace ProviderId$ {
    export const inboundSchema: z.ZodType<ProviderId, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ProviderId> = z.object({});
}

/** @internal */
export namespace SubscriberChannelDto$ {
    export const inboundSchema: z.ZodType<SubscriberChannelDto, z.ZodTypeDef, unknown> = z.object({
        integrationIdentifier: z.string().optional(),
        providerId: z.lazy(() => ProviderId$.inboundSchema),
        credentials: ChannelCredentialsDto$.inboundSchema,
    });

    export type Outbound = {
        integrationIdentifier?: string | undefined;
        providerId: ProviderId$.Outbound;
        credentials: ChannelCredentialsDto$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SubscriberChannelDto> = z.object(
        {
            integrationIdentifier: z.string().optional(),
            providerId: z.lazy(() => ProviderId$.outboundSchema),
            credentials: ChannelCredentialsDto$.outboundSchema,
        }
    );
}
