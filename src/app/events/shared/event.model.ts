export interface IEvent {
    id: number;
    name: string;
    date: Date;
    time: string;
    price: number;
    location?: {
        address: string
        city: string
        country: string
    };
    onlineUrl?: string;
    sessions: ISession[];
}

export interface ISession {
    id: number;
    name: string;
    presenter: string;
    duration: string;
    level: string;
    abstract: string;
    voters: string[];
}
