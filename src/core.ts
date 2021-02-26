import { chatRoomService } from './index'
const test1 = async() => {
    const data = await chatRoomService.getChatRooms();
    console.log(data);
}

test1();
