/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types";
import * as z from "zod";

export const Direction = {
    Ltr: "ltr",
    Trl: "trl",
} as const;
export type Direction = ClosedEnum<typeof Direction>;

export type OrganizationBrandingResponseDto = {
    color: string;
    contentBackground: string;
    direction?: Direction | undefined;
    fontColor: string;
    fontFamily?: string | undefined;
    logo: string;
};

/** @internal */
export namespace Direction$ {
    export const inboundSchema = z.nativeEnum(Direction);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace OrganizationBrandingResponseDto$ {
    export const inboundSchema: z.ZodType<OrganizationBrandingResponseDto, z.ZodTypeDef, unknown> =
        z.object({
            color: z.string(),
            contentBackground: z.string(),
            direction: Direction$.inboundSchema.optional(),
            fontColor: z.string(),
            fontFamily: z.string().optional(),
            logo: z.string(),
        });

    export type Outbound = {
        color: string;
        contentBackground: string;
        direction?: string | undefined;
        fontColor: string;
        fontFamily?: string | undefined;
        logo: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        OrganizationBrandingResponseDto
    > = z.object({
        color: z.string(),
        contentBackground: z.string(),
        direction: Direction$.outboundSchema.optional(),
        fontColor: z.string(),
        fontFamily: z.string().optional(),
        logo: z.string(),
    });
}
