/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UpdateBrandingDetailsDto = {
    logo: string;
    color: string;
    fontColor: string;
    contentBackground: string;
    fontFamily?: string | undefined;
};

/** @internal */
export namespace UpdateBrandingDetailsDto$ {
    export const inboundSchema: z.ZodType<UpdateBrandingDetailsDto, z.ZodTypeDef, unknown> =
        z.object({
            logo: z.string(),
            color: z.string(),
            fontColor: z.string(),
            contentBackground: z.string(),
            fontFamily: z.string().optional(),
        });

    export type Outbound = {
        logo: string;
        color: string;
        fontColor: string;
        contentBackground: string;
        fontFamily?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateBrandingDetailsDto> =
        z.object({
            logo: z.string(),
            color: z.string(),
            fontColor: z.string(),
            contentBackground: z.string(),
            fontFamily: z.string().optional(),
        });
}
