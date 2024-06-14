/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types";
import * as z from "zod";

export const On = {
    Subscriber: "subscriber",
    Payload: "payload",
} as const;
export type On = ClosedEnum<typeof On>;

export const Operator = {
    Larger: "LARGER",
    Smaller: "SMALLER",
    LargerEqual: "LARGER_EQUAL",
    SmallerEqual: "SMALLER_EQUAL",
    Equal: "EQUAL",
    NotEqual: "NOT_EQUAL",
    AllIn: "ALL_IN",
    AnyIn: "ANY_IN",
    NotIn: "NOT_IN",
    Between: "BETWEEN",
    NotBetween: "NOT_BETWEEN",
    Like: "LIKE",
    NotLike: "NOT_LIKE",
    In: "IN",
} as const;
export type Operator = ClosedEnum<typeof Operator>;

export type FieldFilterPart = {
    field: string;
    on: On;
    operator: Operator;
    value: string;
};

/** @internal */
export namespace On$ {
    export const inboundSchema = z.nativeEnum(On);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Operator$ {
    export const inboundSchema = z.nativeEnum(Operator);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace FieldFilterPart$ {
    export const inboundSchema: z.ZodType<FieldFilterPart, z.ZodTypeDef, unknown> = z.object({
        field: z.string(),
        on: On$.inboundSchema,
        operator: Operator$.inboundSchema,
        value: z.string(),
    });

    export type Outbound = {
        field: string;
        on: string;
        operator: string;
        value: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FieldFilterPart> = z.object({
        field: z.string(),
        on: On$.outboundSchema,
        operator: Operator$.outboundSchema,
        value: z.string(),
    });
}
