/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { NotificationStep, NotificationStep$ } from "./notificationstep";
import { PreferenceChannels, PreferenceChannels$ } from "./preferencechannels";
import * as z from "zod";

export type CreateWorkflowRequestDtoData = {};

export type CreateWorkflowRequestDtoNotificationGroup = {};

export type CreateWorkflowRequestDto = {
    active?: boolean | undefined;
    blueprintId?: string | undefined;
    critical?: boolean | undefined;
    data?: CreateWorkflowRequestDtoData | undefined;
    description?: string | undefined;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    draft?: boolean | undefined;
    name: string;
    notificationGroup?: CreateWorkflowRequestDtoNotificationGroup | undefined;
    notificationGroupId: string;
    preferenceSettings?: PreferenceChannels | undefined;
    steps: Array<NotificationStep>;
    tags?: Array<string> | undefined;
};

/** @internal */
export namespace CreateWorkflowRequestDtoData$ {
    export const inboundSchema: z.ZodType<CreateWorkflowRequestDtoData, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateWorkflowRequestDtoData> =
        z.object({});
}

/** @internal */
export namespace CreateWorkflowRequestDtoNotificationGroup$ {
    export const inboundSchema: z.ZodType<
        CreateWorkflowRequestDtoNotificationGroup,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CreateWorkflowRequestDtoNotificationGroup
    > = z.object({});
}

/** @internal */
export namespace CreateWorkflowRequestDto$ {
    export const inboundSchema: z.ZodType<CreateWorkflowRequestDto, z.ZodTypeDef, unknown> =
        z.object({
            active: z.boolean().optional(),
            blueprintId: z.string().optional(),
            critical: z.boolean().optional(),
            data: z.lazy(() => CreateWorkflowRequestDtoData$.inboundSchema).optional(),
            description: z.string().optional(),
            draft: z.boolean().optional(),
            name: z.string(),
            notificationGroup: z
                .lazy(() => CreateWorkflowRequestDtoNotificationGroup$.inboundSchema)
                .optional(),
            notificationGroupId: z.string(),
            preferenceSettings: PreferenceChannels$.inboundSchema.optional(),
            steps: z.array(NotificationStep$.inboundSchema),
            tags: z.array(z.string()).optional(),
        });

    export type Outbound = {
        active?: boolean | undefined;
        blueprintId?: string | undefined;
        critical?: boolean | undefined;
        data?: CreateWorkflowRequestDtoData$.Outbound | undefined;
        description?: string | undefined;
        draft?: boolean | undefined;
        name: string;
        notificationGroup?: CreateWorkflowRequestDtoNotificationGroup$.Outbound | undefined;
        notificationGroupId: string;
        preferenceSettings?: PreferenceChannels$.Outbound | undefined;
        steps: Array<NotificationStep$.Outbound>;
        tags?: Array<string> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateWorkflowRequestDto> =
        z.object({
            active: z.boolean().optional(),
            blueprintId: z.string().optional(),
            critical: z.boolean().optional(),
            data: z.lazy(() => CreateWorkflowRequestDtoData$.outboundSchema).optional(),
            description: z.string().optional(),
            draft: z.boolean().optional(),
            name: z.string(),
            notificationGroup: z
                .lazy(() => CreateWorkflowRequestDtoNotificationGroup$.outboundSchema)
                .optional(),
            notificationGroupId: z.string(),
            preferenceSettings: PreferenceChannels$.outboundSchema.optional(),
            steps: z.array(NotificationStep$.outboundSchema),
            tags: z.array(z.string()).optional(),
        });
}
