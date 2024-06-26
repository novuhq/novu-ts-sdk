/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const TopicPayloadDtoType = {
    Subscriber: "Subscriber",
    Topic: "Topic",
} as const;
export type TopicPayloadDtoType = ClosedEnum<typeof TopicPayloadDtoType>;

export type TopicPayloadDto = {
    topicKey: string;
    type: TopicPayloadDtoType;
};

/** @internal */
export namespace TopicPayloadDtoType$ {
    export const inboundSchema: z.ZodNativeEnum<typeof TopicPayloadDtoType> =
        z.nativeEnum(TopicPayloadDtoType);
    export const outboundSchema: z.ZodNativeEnum<typeof TopicPayloadDtoType> = inboundSchema;
}

/** @internal */
export namespace TopicPayloadDto$ {
    export const inboundSchema: z.ZodType<TopicPayloadDto, z.ZodTypeDef, unknown> = z.object({
        topicKey: z.string(),
        type: TopicPayloadDtoType$.inboundSchema,
    });

    export type Outbound = {
        topicKey: string;
        type: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TopicPayloadDto> = z.object({
        topicKey: z.string(),
        type: TopicPayloadDtoType$.outboundSchema,
    });
}
