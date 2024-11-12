import { Action, GestureHandlers, UserGestureConfig } from '@use-gesture/core/types';
import { Recognizer } from "./Recognizer.js";
export declare function createGesture(actions: Action[]): (target: EventTarget, _handlers: GestureHandlers, _config?: UserGestureConfig) => Recognizer<undefined>;
