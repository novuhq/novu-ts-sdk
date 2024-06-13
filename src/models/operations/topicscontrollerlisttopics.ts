/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type TopicsControllerListTopicsRequest = {
    /**
     * Number of page for the pagination
     */
    page?: number | undefined;
    /**
     * Size of page for the pagination
     */
    pageSize?: number | undefined;
    /**
     * Topic key
     */
    key?: string | undefined;
};

/** @internal */
export namespace TopicsControllerListTopicsRequest$ {
    export const inboundSchema: z.ZodType<
        TopicsControllerListTopicsRequest,
        z.ZodTypeDef,
        unknown
    > = z.object({
        page: z.number().default(0),
        pageSize: z.number().default(10),
        key: z.string().optional(),
    });

    export type Outbound = {
        page: number;
        pageSize: number;
        key?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        TopicsControllerListTopicsRequest
    > = z.object({
        page: z.number().default(0),
        pageSize: z.number().default(10),
        key: z.string().optional(),
    });
}