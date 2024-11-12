import { EventTypes, Handler, UserDragConfig } from '@use-gesture/core/types';
import { Recognizer } from "./Recognizer.js";
interface DragGestureConstructor {
    new <EventType = EventTypes['drag']>(target: EventTarget, handler: Handler<'drag', EventType>, config?: UserDragConfig): DragGesture;
}
export interface DragGesture extends Recognizer<'drag'> {
}
export declare const DragGesture: DragGestureConstructor;
export {};
