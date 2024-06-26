/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type TenantControllerGetTenantByIdRequest = {
    identifier: string;
};

/** @internal */
export namespace TenantControllerGetTenantByIdRequest$ {
    export const inboundSchema: z.ZodType<
        TenantControllerGetTenantByIdRequest,
        z.ZodTypeDef,
        unknown
    > = z.object({
        identifier: z.string(),
    });

    export type Outbound = {
        identifier: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        TenantControllerGetTenantByIdRequest
    > = z.object({
        identifier: z.string(),
    });
}
