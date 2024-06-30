/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * Partner Type Enum
 */
export const PartnerType = {
    Vercel: "vercel",
} as const;
/**
 * Partner Type Enum
 */
export type PartnerType = ClosedEnum<typeof PartnerType>;

export type IPartnerConfigurationResponseDto = {
    accessToken: string;
    configurationId: string;
    /**
     * Partner Type Enum
     */
    partnerType: PartnerType;
    projectIds?: Array<string> | undefined;
    teamId?: string | undefined;
};

/** @internal */
export namespace PartnerType$ {
    export const inboundSchema: z.ZodNativeEnum<typeof PartnerType> = z.nativeEnum(PartnerType);
    export const outboundSchema: z.ZodNativeEnum<typeof PartnerType> = inboundSchema;
}

/** @internal */
export namespace IPartnerConfigurationResponseDto$ {
    export const inboundSchema: z.ZodType<IPartnerConfigurationResponseDto, z.ZodTypeDef, unknown> =
        z.object({
            accessToken: z.string(),
            configurationId: z.string(),
            partnerType: PartnerType$.inboundSchema,
            projectIds: z.array(z.string()).optional(),
            teamId: z.string().optional(),
        });

    export type Outbound = {
        accessToken: string;
        configurationId: string;
        partnerType: string;
        projectIds?: Array<string> | undefined;
        teamId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        IPartnerConfigurationResponseDto
    > = z.object({
        accessToken: z.string(),
        configurationId: z.string(),
        partnerType: PartnerType$.outboundSchema,
        projectIds: z.array(z.string()).optional(),
        teamId: z.string().optional(),
    });
}
