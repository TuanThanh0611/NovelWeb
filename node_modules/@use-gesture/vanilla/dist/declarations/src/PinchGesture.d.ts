import { UserPinchConfig, Handler, EventTypes } from '@use-gesture/core/types';
import { Recognizer } from "./Recognizer.js";
interface PinchGestureConstructor {
    new <EventType = EventTypes['pinch']>(target: EventTarget, handler: Handler<'pinch', EventType>, config?: UserPinchConfig): PinchGesture;
}
export interface PinchGesture extends Recognizer<'pinch'> {
}
export declare const PinchGesture: PinchGestureConstructor;
export {};
