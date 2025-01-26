import { IncomingMessage, ServerResponse } from 'node:http';
import { Http2ServerRequest, Http2ServerResponse } from 'node:http2';
import { L as ListenOptions, a as Listener } from './shared/listhen.a192ecbb.cjs';
export { b as Certificate, C as CrossWSOptions, G as GetURLOptions, H as HTTPSOptions, d as ListenURL, S as Server, c as ShowURLOptions } from './shared/listhen.a192ecbb.cjs';
import { ConsolaInstance } from 'consola';
import * as crossws_adapters_node from 'crossws/adapters/node';
import 'node:https';
import 'node:net';
import 'get-port-please';

type RequestListenerHttp1x<Request extends typeof IncomingMessage = typeof IncomingMessage, Response extends typeof ServerResponse<IncomingMessage> = typeof ServerResponse<IncomingMessage>> = (req: InstanceType<Request>, res: InstanceType<Response> & {
    req: InstanceType<Request>;
}) => void;
type RequestListenerHttp2<Request extends typeof Http2ServerRequest = typeof Http2ServerRequest, Response extends typeof Http2ServerResponse = typeof Http2ServerResponse> = (request: InstanceType<Request>, response: InstanceType<Response>) => void;
type RequestListener = RequestListenerHttp1x | RequestListenerHttp2;
declare function listen(handle: RequestListener, _options?: Partial<ListenOptions>): Promise<Listener>;

interface DevServerOptions {
    cwd?: string;
    staticDirs?: string[];
    logger?: ConsolaInstance;
    ws?: ListenOptions["ws"];
}
type NodeListener = (req: IncomingMessage | Http2ServerRequest, res: ServerResponse | Http2ServerResponse) => void;
declare function createDevServer(entry: string, options: DevServerOptions): Promise<{
    cwd: string;
    resolver: {
        relative: (path: string) => string;
        formateRelative: (path: string) => string;
        import: (id: string) => Promise<any>;
        resolve: (id: string) => string;
        tryResolve: (id: string) => string | undefined;
    };
    nodeListener: NodeListener;
    reload: (_initial?: boolean) => Promise<void>;
    _ws: false | crossws_adapters_node.NodeOptions | ((req: IncomingMessage, head: Buffer) => void) | undefined;
    _entry: string | undefined;
}>;

interface WatchOptions extends DevServerOptions {
    cwd?: string;
    logger?: ConsolaInstance;
    ignore?: string[];
    publicDirs?: string[];
}
declare function listenAndWatch(entry: string, options: Partial<ListenOptions & WatchOptions>): Promise<Listener>;

export { type DevServerOptions, ListenOptions, Listener, type WatchOptions, createDevServer, listen, listenAndWatch };
