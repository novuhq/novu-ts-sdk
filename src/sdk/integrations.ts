/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as retries$ from "../lib/retries";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as components from "../models/components";
import * as operations from "../models/operations";
import { Webhooks } from "./webhooks";
import * as z from "zod";

export class Integrations extends ClientSDK {
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

    private _webhooks?: Webhooks;
    get webhooks(): Webhooks {
        return (this._webhooks ??= new Webhooks(this.options$));
    }

    /**
     * Create integration
     *
     * @remarks
     * Create an integration for the current environment the user is based on the API key provided
     */
    async create(
        request: components.CreateIntegrationRequestDto,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<components.IntegrationResponseDto> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => components.CreateIntegrationRequestDto$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/v1/integrations")();

        const query$ = "";

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "IntegrationsController_createIntegration",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["409", "429", "4XX", "503", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 500,
                    maxInterval: 30000,
                    exponent: 1.5,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request$.clone();
                return this.do$(cloned, doOptions);
            },
            { config: retryConfig, statusCodes: ["408", "409", "429", "5XX"] }
        );

        const [result$] = await this.matcher<components.IntegrationResponseDto>()
            .json(201, components.IntegrationResponseDto$)
            .fail([409, 429, "4XX", 503, "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Delete integration
     */
    async delete(
        integrationId: string,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<Array<components.IntegrationResponseDto>> {
        const input$: operations.IntegrationsControllerRemoveIntegrationRequest = {
            integrationId: integrationId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.IntegrationsControllerRemoveIntegrationRequest$.outboundSchema.parse(
                    value$
                ),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            integrationId: encodeSimple$("integrationId", payload$.integrationId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v1/integrations/{integrationId}")(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "IntegrationsController_removeIntegration",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["409", "429", "4XX", "503", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 500,
                    maxInterval: 30000,
                    exponent: 1.5,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request$.clone();
                return this.do$(cloned, doOptions);
            },
            { config: retryConfig, statusCodes: ["408", "409", "429", "5XX"] }
        );

        const [result$] = await this.matcher<Array<components.IntegrationResponseDto>>()
            .json(200, z.array(components.IntegrationResponseDto$.inboundSchema))
            .fail([409, 429, "4XX", 503, "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Get integrations
     *
     * @remarks
     * Return all the integrations the user has created for that organization. Review v.0.17.0 changelog for a breaking change
     */
    async list(
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<Array<components.IntegrationResponseDto>> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/v1/integrations")();

        const query$ = "";

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "IntegrationsController_listIntegrations",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["409", "429", "4XX", "503", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
            },
            options
        );

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 500,
                    maxInterval: 30000,
                    exponent: 1.5,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request$.clone();
                return this.do$(cloned, doOptions);
            },
            { config: retryConfig, statusCodes: ["408", "409", "429", "5XX"] }
        );

        const [result$] = await this.matcher<Array<components.IntegrationResponseDto>>()
            .json(200, z.array(components.IntegrationResponseDto$.inboundSchema))
            .fail([409, 429, "4XX", 503, "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Get active integrations
     *
     * @remarks
     * Return all the active integrations the user has created for that organization. Review v.0.17.0 changelog for a breaking change
     */
    async listActive(
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<Array<components.IntegrationResponseDto>> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/v1/integrations/active")();

        const query$ = "";

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "IntegrationsController_getActiveIntegrations",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["409", "429", "4XX", "503", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
            },
            options
        );

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 500,
                    maxInterval: 30000,
                    exponent: 1.5,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request$.clone();
                return this.do$(cloned, doOptions);
            },
            { config: retryConfig, statusCodes: ["408", "409", "429", "5XX"] }
        );

        const [result$] = await this.matcher<Array<components.IntegrationResponseDto>>()
            .json(200, z.array(components.IntegrationResponseDto$.inboundSchema))
            .fail([409, 429, "4XX", 503, "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Set integration as primary
     */
    async setAsPrimary(
        integrationId: string,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<components.IntegrationResponseDto> {
        const input$: operations.IntegrationsControllerSetIntegrationAsPrimaryRequest = {
            integrationId: integrationId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.IntegrationsControllerSetIntegrationAsPrimaryRequest$.outboundSchema.parse(
                    value$
                ),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            integrationId: encodeSimple$("integrationId", payload$.integrationId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v1/integrations/{integrationId}/set-primary")(
            pathParams$
        );

        const query$ = "";

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "IntegrationsController_setIntegrationAsPrimary",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["404", "409", "429", "4XX", "503", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 500,
                    maxInterval: 30000,
                    exponent: 1.5,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request$.clone();
                return this.do$(cloned, doOptions);
            },
            { config: retryConfig, statusCodes: ["408", "409", "429", "5XX"] }
        );

        const [result$] = await this.matcher<components.IntegrationResponseDto>()
            .json([200, 201], components.IntegrationResponseDto$)
            .fail([404, 409, 429, "4XX", 503, "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Update integration
     */
    async update(
        integrationId: string,
        updateIntegrationRequestDto: components.UpdateIntegrationRequestDto,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<components.IntegrationResponseDto> {
        const input$: operations.IntegrationsControllerUpdateIntegrationByIdRequest = {
            integrationId: integrationId,
            updateIntegrationRequestDto: updateIntegrationRequestDto,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.IntegrationsControllerUpdateIntegrationByIdRequest$.outboundSchema.parse(
                    value$
                ),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.UpdateIntegrationRequestDto, { explode: true });

        const pathParams$ = {
            integrationId: encodeSimple$("integrationId", payload$.integrationId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v1/integrations/{integrationId}")(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "IntegrationsController_updateIntegrationById",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["404", "409", "429", "4XX", "503", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PUT",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 500,
                    maxInterval: 30000,
                    exponent: 1.5,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request$.clone();
                return this.do$(cloned, doOptions);
            },
            { config: retryConfig, statusCodes: ["408", "409", "429", "5XX"] }
        );

        const [result$] = await this.matcher<components.IntegrationResponseDto>()
            .json(200, components.IntegrationResponseDto$)
            .fail([404, 409, 429, "4XX", 503, "5XX"])
            .match(response);

        return result$;
    }
}
