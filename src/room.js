class Room {
    constructor(){
        this.name='room 1';
        this.isAvailable = true;

    }

    isRoomAvailable() {
        return this.isAvailable;
    }

    roomName() {
        return this.name;
    }

    enterRoom() {
        return this.isAvailable = false;
    }

    leaveRoom() {
        return this.isAvailable = true;
    }



   


};