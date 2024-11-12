import { EventTypes, UserHoverConfig, Handler } from '@use-gesture/core/types';
import { Recognizer } from "./Recognizer.js";
interface HoverGestureConstructor {
    new <EventType = EventTypes['hover']>(target: EventTarget, handler: Handler<'hover', EventType>, config?: UserHoverConfig): HoverGesture;
}
export interface HoverGesture extends Recognizer<'hover'> {
}
export declare const HoverGesture: HoverGestureConstructor;
export {};
