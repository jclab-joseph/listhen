import { Server as Server$1, IncomingMessage } from 'node:http';
import { Server as Server$2 } from 'node:https';
import { Http2Server, Http2SecureServer } from 'node:http2';
import { Server as Server$3, AddressInfo } from 'node:net';
import { GetPortInput } from 'get-port-please';
import { NodeOptions } from 'crossws/adapters/node';

type CrossWSOptions = NodeOptions;
type Server = Server$1 | Server$2 | Http2Server | Http2SecureServer | Server$3;
interface Certificate {
    key: string;
    cert: string;
    passphrase?: string;
}
interface HTTPSOptions {
    cert?: string;
    key?: string;
    pfx?: string;
    passphrase?: string;
    validityDays?: number;
    domains?: string[];
}
interface ListenOptions {
    name: string;
    port: GetPortInput;
    hostname: string;
    showURL: boolean;
    baseURL: string;
    open: boolean;
    https: boolean | HTTPSOptions;
    http2: boolean;
    clipboard: boolean;
    isTest: boolean;
    isProd: boolean;
    autoClose: boolean;
    _entry?: string;
    /**
     * Used as main public url to display
     * @default The first public IPV4 address listening to
     */
    publicURL?: string;
    /**
     * Print QR Code for public IPv4 address
     *
     * @default true
     */
    qr?: boolean;
    /**
     * When enabled, listhen tries to listen to all network interfaces
     *
     * @default `false` for development and `true` for production
     */
    public: boolean;
    /**
     * Open a tunnel using https://github.com/unjs/untun
     */
    tunnel?: boolean;
    /**
     * WebSocket Upgrade Handler
     *
     * Input can be an upgrade handler or CrossWS options
     *
     * @experimental CrossWS usage is subject to change
     * @see https://github.com/unjs/crossws
     */
    ws?: boolean | CrossWSOptions | ((req: IncomingMessage, head: Buffer) => void);
}
type GetURLOptions = Pick<Partial<ListenOptions>, "baseURL" | "publicURL">;
type ShowURLOptions = Pick<Partial<ListenOptions>, "baseURL" | "name" | "publicURL" | "qr">;
interface ListenURL {
    url: string;
    type: "local" | "network" | "tunnel";
}
interface Listener {
    url: string;
    address: AddressInfo;
    server: Server;
    https: false | Certificate;
    close: () => Promise<void>;
    open: () => Promise<void>;
    showURL: (options?: ShowURLOptions) => Promise<void>;
    getURLs: (options?: GetURLOptions) => Promise<ListenURL[]>;
}

export type { CrossWSOptions as C, GetURLOptions as G, HTTPSOptions as H, ListenOptions as L, Server as S, Listener as a, Certificate as b, ShowURLOptions as c, ListenURL as d };
