/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SubscriberChannelDto, SubscriberChannelDto$ } from "./subscriberchanneldto";
import * as z from "zod";

export type CreateSubscriberRequestDtoData = {};

export type CreateSubscriberRequestDto = {
    /**
     * The internal identifier you used to create this subscriber, usually correlates to the id the user in your systems
     */
    subscriberId: string;
    email?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    phone?: string | undefined;
    /**
     * An http url to the profile image of your subscriber
     */
    avatar?: string | undefined;
    locale?: string | undefined;
    data?: CreateSubscriberRequestDtoData | undefined;
    channels?: Array<SubscriberChannelDto> | undefined;
};

/** @internal */
export namespace CreateSubscriberRequestDtoData$ {
    export const inboundSchema: z.ZodType<CreateSubscriberRequestDtoData, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateSubscriberRequestDtoData> =
        z.object({});
}

/** @internal */
export namespace CreateSubscriberRequestDto$ {
    export const inboundSchema: z.ZodType<CreateSubscriberRequestDto, z.ZodTypeDef, unknown> =
        z.object({
            subscriberId: z.string(),
            email: z.string().optional(),
            firstName: z.string().optional(),
            lastName: z.string().optional(),
            phone: z.string().optional(),
            avatar: z.string().optional(),
            locale: z.string().optional(),
            data: z.lazy(() => CreateSubscriberRequestDtoData$.inboundSchema).optional(),
            channels: z.array(SubscriberChannelDto$.inboundSchema).optional(),
        });

    export type Outbound = {
        subscriberId: string;
        email?: string | undefined;
        firstName?: string | undefined;
        lastName?: string | undefined;
        phone?: string | undefined;
        avatar?: string | undefined;
        locale?: string | undefined;
        data?: CreateSubscriberRequestDtoData$.Outbound | undefined;
        channels?: Array<SubscriberChannelDto$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateSubscriberRequestDto> =
        z.object({
            subscriberId: z.string(),
            email: z.string().optional(),
            firstName: z.string().optional(),
            lastName: z.string().optional(),
            phone: z.string().optional(),
            avatar: z.string().optional(),
            locale: z.string().optional(),
            data: z.lazy(() => CreateSubscriberRequestDtoData$.outboundSchema).optional(),
            channels: z.array(SubscriberChannelDto$.outboundSchema).optional(),
        });
}
