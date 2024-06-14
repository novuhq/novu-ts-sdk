/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import {
    ActivityNotificationExecutionDetailResponseDto,
    ActivityNotificationExecutionDetailResponseDto$,
} from "./activitynotificationexecutiondetailresponsedto";
import {
    ActivityNotificationStepResponseDto,
    ActivityNotificationStepResponseDto$,
} from "./activitynotificationstepresponsedto";
import * as z from "zod";

export type Digest = {};

export type Payload = {};

export type ActivityNotificationJobResponseDtoProviderId = {};

export type ActivityNotificationJobResponseDto = {
    id: string;
    digest?: Digest | undefined;
    executionDetails: Array<ActivityNotificationExecutionDetailResponseDto>;
    payload?: Payload | undefined;
    providerId: ActivityNotificationJobResponseDtoProviderId;
    status: string;
    step: ActivityNotificationStepResponseDto;
    type: string;
};

/** @internal */
export namespace Digest$ {
    export const inboundSchema: z.ZodType<Digest, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Digest> = z.object({});
}

/** @internal */
export namespace Payload$ {
    export const inboundSchema: z.ZodType<Payload, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Payload> = z.object({});
}

/** @internal */
export namespace ActivityNotificationJobResponseDtoProviderId$ {
    export const inboundSchema: z.ZodType<
        ActivityNotificationJobResponseDtoProviderId,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ActivityNotificationJobResponseDtoProviderId
    > = z.object({});
}

/** @internal */
export namespace ActivityNotificationJobResponseDto$ {
    export const inboundSchema: z.ZodType<
        ActivityNotificationJobResponseDto,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            _id: z.string(),
            digest: z.lazy(() => Digest$.inboundSchema).optional(),
            executionDetails: z.array(
                ActivityNotificationExecutionDetailResponseDto$.inboundSchema
            ),
            payload: z.lazy(() => Payload$.inboundSchema).optional(),
            providerId: z.lazy(() => ActivityNotificationJobResponseDtoProviderId$.inboundSchema),
            status: z.string(),
            step: ActivityNotificationStepResponseDto$.inboundSchema,
            type: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                _id: "id",
            });
        });

    export type Outbound = {
        _id: string;
        digest?: Digest$.Outbound | undefined;
        executionDetails: Array<ActivityNotificationExecutionDetailResponseDto$.Outbound>;
        payload?: Payload$.Outbound | undefined;
        providerId: ActivityNotificationJobResponseDtoProviderId$.Outbound;
        status: string;
        step: ActivityNotificationStepResponseDto$.Outbound;
        type: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ActivityNotificationJobResponseDto
    > = z
        .object({
            id: z.string(),
            digest: z.lazy(() => Digest$.outboundSchema).optional(),
            executionDetails: z.array(
                ActivityNotificationExecutionDetailResponseDto$.outboundSchema
            ),
            payload: z.lazy(() => Payload$.outboundSchema).optional(),
            providerId: z.lazy(() => ActivityNotificationJobResponseDtoProviderId$.outboundSchema),
            status: z.string(),
            step: ActivityNotificationStepResponseDto$.outboundSchema,
            type: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                id: "_id",
            });
        });
}
