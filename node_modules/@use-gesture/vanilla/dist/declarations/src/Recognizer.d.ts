import { GestureKey, InternalHandlers, NativeHandlers, UserGestureConfig } from '@use-gesture/core/types';
export declare class Recognizer<GK extends GestureKey | undefined = undefined> {
    private _gestureKey?;
    private _ctrl;
    private _target;
    constructor(target: EventTarget, handlers: InternalHandlers, config: GK extends keyof UserGestureConfig ? UserGestureConfig[GK] : UserGestureConfig, gestureKey?: GK, nativeHandlers?: NativeHandlers);
    destroy(): void;
    setConfig(config: GK extends keyof UserGestureConfig ? UserGestureConfig[GK] : UserGestureConfig): void;
}
