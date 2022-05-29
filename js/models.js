'use strict'

class Employee {
    constructor(name, days){
        this.name = name;
        this.days = days;
    }
}

class Day {
    constructor(day, arrival_time, departure_time){
        this.day = day;
        this.arrival_time = arrival_time;
        this.departure_time = departure_time;
    }
}