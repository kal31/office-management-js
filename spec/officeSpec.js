'use strict';
describe('Office', () => {
    let office;
    let room;
    beforeEach(() => {
        office = new Office();
        room = jasmine.createSpy('room',['roomName']);
    });

    it('has no rooms by default', () => {
        expect(office.roomsToBook()).toEqual([])
    })

    it('would like to add a room to the office', () => {
        office.addRoom(room);
        expect(office.roomsToBook()).toEqual([room])

    })
})