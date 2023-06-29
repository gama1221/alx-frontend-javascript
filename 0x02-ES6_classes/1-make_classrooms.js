import ClassRoom from './0-classroom';

export default function initializeRooms() {
  /* eslint-disable */
  const r19 = new ClassRoom(19);
  const r20 = new ClassRoom(20);
  const r34 = new ClassRoom(34);
  const ClassRoomList = [];
  ClassRoomList.push(r19, r20, r34);
  return ClassRoomList;
}