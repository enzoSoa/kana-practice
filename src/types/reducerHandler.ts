type ReducerEventData<EventsMap> = {
    [K in keyof EventsMap]: {
        type: K,
        data: EventsMap[K],
    };
}[keyof EventsMap];

export type ReducerHandler<StateType, EventsMap> = (state: StateType, eventData:ReducerEventData<EventsMap>) => StateType;