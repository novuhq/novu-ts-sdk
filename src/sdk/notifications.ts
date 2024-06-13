/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import { SecurityInput } from "../lib/security";
import * as components from "../models/components";
import * as operations from "../models/operations";
import { Stats } from "./stats";

export class Notifications extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    private _stats?: Stats;
    get stats(): Stats {
        return (this._stats ??= new Stats(this.options$));
    }

    /**
     * Get notifications
     */
    async list(
        request: operations.ListNotificationsRequest,
        security: operations.ListNotificationsSecurity,
        options?: RequestOptions
    ): Promise<components.ActivitiesResponseDto> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ListNotificationsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/notifications")();

        const query$ = encodeFormQuery$({
            emails: payload$.emails,
            search: payload$.search,
            subscriberIds: payload$.subscriberIds,
            page: payload$.page,
            transactionId: payload$.transactionId,
            channels: payload$.channels,
            templates: payload$.templates,
        });

        const security$: SecurityInput[][] = [
            [
                {
                    fieldName: "Authorization",
                    type: "apiKey:header",
                    value: security?.apiKey,
                },
            ],
            [
                {
                    fieldName: "Authorization",
                    type: "http:bearer",
                    value: security?.bearer,
                },
            ],
        ];
        const securitySettings$ = this.resolveSecurity(...security$);
        const context = {
            operationID: "listNotifications",
            oAuth2Scopes: [],
            securitySource: security$,
        };

        const doOptions = { context, errorCodes: ["409", "429", "4XX", "503", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const [result$] = await this.matcher<components.ActivitiesResponseDto>()
            .json(200, components.ActivitiesResponseDto$)
            .fail([409, 429, "4XX", 503, "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Get notification
     */
    async retrieve(
        security: operations.GetNotificationSecurity,
        notificationId: string,
        options?: RequestOptions
    ): Promise<components.ActivityNotificationResponseDto> {
        const input$: operations.GetNotificationRequest = {
            notificationId: notificationId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetNotificationRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            notificationId: encodeSimple$("notificationId", payload$.notificationId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/notifications/{notificationId}")(pathParams$);

        const query$ = "";

        const security$: SecurityInput[][] = [
            [
                {
                    fieldName: "Authorization",
                    type: "apiKey:header",
                    value: security?.apiKey,
                },
            ],
            [
                {
                    fieldName: "Authorization",
                    type: "http:bearer",
                    value: security?.bearer,
                },
            ],
        ];
        const securitySettings$ = this.resolveSecurity(...security$);
        const context = {
            operationID: "getNotification",
            oAuth2Scopes: [],
            securitySource: security$,
        };

        const doOptions = { context, errorCodes: ["409", "429", "4XX", "503", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const [result$] = await this.matcher<components.ActivityNotificationResponseDto>()
            .json(200, components.ActivityNotificationResponseDto$)
            .fail([409, 429, "4XX", 503, "5XX"])
            .match(response);

        return result$;
    }
}
