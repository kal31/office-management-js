'use strict';
describe('Room', () => {
    let room;
    beforeEach(() => {
        room = new Room();
    });

    it('would like to have a name', () => {
        expect(room.roomName()).toEqual('room 1')

    })
})