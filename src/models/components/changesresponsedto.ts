/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ChangeResponseDto, ChangeResponseDto$ } from "./changeresponsedto";
import * as z from "zod";

export type ChangesResponseDto = {
    data: Array<ChangeResponseDto>;
    page: number;
    pageSize: number;
    totalCount: number;
};

/** @internal */
export namespace ChangesResponseDto$ {
    export const inboundSchema: z.ZodType<ChangesResponseDto, z.ZodTypeDef, unknown> = z.object({
        data: z.array(ChangeResponseDto$.inboundSchema),
        page: z.number(),
        pageSize: z.number(),
        totalCount: z.number(),
    });

    export type Outbound = {
        data: Array<ChangeResponseDto$.Outbound>;
        page: number;
        pageSize: number;
        totalCount: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ChangesResponseDto> = z.object({
        data: z.array(ChangeResponseDto$.outboundSchema),
        page: z.number(),
        pageSize: z.number(),
        totalCount: z.number(),
    });
}
