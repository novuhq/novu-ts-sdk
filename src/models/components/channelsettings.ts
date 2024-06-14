/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import { ClosedEnum } from "../../types";
import { ChannelCredentials, ChannelCredentials$ } from "./channelcredentials";
import * as z from "zod";

/**
 * The provider identifier for the credentials
 */
export const ChannelSettingsProviderId = {
    Slack: "slack",
    Discord: "discord",
    Msteams: "msteams",
    Mattermost: "mattermost",
    Ryver: "ryver",
    Zulip: "zulip",
    GrafanaOnCall: "grafana-on-call",
    Getstream: "getstream",
    RocketChat: "rocket-chat",
    WhatsappBusiness: "whatsapp-business",
    Fcm: "fcm",
    Apns: "apns",
    Expo: "expo",
    OneSignal: "one-signal",
    Pushpad: "pushpad",
    PushWebhook: "push-webhook",
    PusherBeams: "pusher-beams",
} as const;
/**
 * The provider identifier for the credentials
 */
export type ChannelSettingsProviderId = ClosedEnum<typeof ChannelSettingsProviderId>;

export type ChannelSettings = {
    /**
     * Id of the integration that is used for this channel
     */
    integrationId: string;
    /**
     * Credentials payload for the specified provider
     */
    credentials: ChannelCredentials;
    /**
     * The integration identifier
     */
    integrationIdentifier?: string | undefined;
    /**
     * The provider identifier for the credentials
     */
    providerId: ChannelSettingsProviderId;
};

/** @internal */
export namespace ChannelSettingsProviderId$ {
    export const inboundSchema = z.nativeEnum(ChannelSettingsProviderId);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ChannelSettings$ {
    export const inboundSchema: z.ZodType<ChannelSettings, z.ZodTypeDef, unknown> = z
        .object({
            _integrationId: z.string(),
            credentials: ChannelCredentials$.inboundSchema,
            integrationIdentifier: z.string().optional(),
            providerId: ChannelSettingsProviderId$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                _integrationId: "integrationId",
            });
        });

    export type Outbound = {
        _integrationId: string;
        credentials: ChannelCredentials$.Outbound;
        integrationIdentifier?: string | undefined;
        providerId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ChannelSettings> = z
        .object({
            integrationId: z.string(),
            credentials: ChannelCredentials$.outboundSchema,
            integrationIdentifier: z.string().optional(),
            providerId: ChannelSettingsProviderId$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                integrationId: "_integrationId",
            });
        });
}
