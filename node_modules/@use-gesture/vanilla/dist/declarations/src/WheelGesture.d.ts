import { UserWheelConfig, Handler, EventTypes } from '@use-gesture/core/types';
import { Recognizer } from "./Recognizer.js";
interface WheelGestureConstructor {
    new <EventType = EventTypes['wheel']>(target: EventTarget, handler: Handler<'wheel', EventType>, config?: UserWheelConfig): WheelGesture;
}
export interface WheelGesture extends Recognizer<'wheel'> {
}
export declare const WheelGesture: WheelGestureConstructor;
export {};
