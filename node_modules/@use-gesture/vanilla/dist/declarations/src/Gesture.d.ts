import { AnyHandlerEventTypes, EventTypes, GestureHandlers, UserGestureConfig } from '@use-gesture/core/types';
import { Recognizer } from "./Recognizer.js";
interface GestureConstructor {
    new <HandlerTypes extends AnyHandlerEventTypes = EventTypes>(target: EventTarget, handlers: GestureHandlers<HandlerTypes>, config?: UserGestureConfig): Gesture;
}
export interface Gesture extends Recognizer {
}
export declare const Gesture: GestureConstructor;
export {};
