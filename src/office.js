class Office {
    constructor() {
        this.rooms = [];

    }

    roomsToBook() {
        return this.rooms;
    }

    addRoom(room) {
        return this.rooms.push(room);
    }
}