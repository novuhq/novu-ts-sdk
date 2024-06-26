/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DataNumberDto = {
    data: number;
};

/** @internal */
export namespace DataNumberDto$ {
    export const inboundSchema: z.ZodType<DataNumberDto, z.ZodTypeDef, unknown> = z.object({
        data: z.number(),
    });

    export type Outbound = {
        data: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DataNumberDto> = z.object({
        data: z.number(),
    });
}
