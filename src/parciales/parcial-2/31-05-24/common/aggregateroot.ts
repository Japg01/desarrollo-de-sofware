import { Entity } from "./entity";
import { ValueObject } from "./valueobject";
import { DomainEvent } from './domainevent';

export abstract class AgregateRoot <T extends ValueObject <T>> extends Entity<T>{

    events: DomainEvent[] = []

    constructor(id:T, event: DomainEvent) {
        super(id)
        this.apply(event)
    }

    apply(event: DomainEvent){
        this.events.push(event)
        this.when(event)
    }

    abstract when(event: DomainEvent): void

    pullDomain():DomainEvent[]{
        let events=this.events
        this.events=[]
        return events
    }
}