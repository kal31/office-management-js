'use strict';
describe('Room', () => {
    let room;
    beforeEach(() => {
        room = new Room();
    });

    it('would like to have a name', () => {
        expect(room.roomName()).toEqual('room 1')

    })

    it('would return true if available', () => {
        expect(room.isRoomAvailable()).toBe (true)

    })

    it('would like to enter room which makes it unavailable', () => {
        room.enterRoom();
        expect(room.isRoomAvailable()).toBe (false)

    })

    it('would like to leave room which makes it available', () => {
        room.enterRoom();
        room.leaveRoom();
        expect(room.isRoomAvailable()).toBe (true)

    })
})