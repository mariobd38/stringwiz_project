import { rem } from '@mantine/core';
import { IconFlag3Filled,IconCancel,IconUser,IconCircle,IconProgress,IconCircleCheckFilled } from '@tabler/icons-react';

function items(property) {
    let items = null;
    switch(property) {
        case "priority":
            items =  [
                {icon: <IconFlag3Filled style={{ width: rem(14), height: rem(14),color: '#bf1212' }} />, name: 'Critical'},
                {icon: <IconFlag3Filled style={{ width: rem(14), height: rem(14),color: '#26a9dc' }} />,name: 'High'},
                {icon: <IconFlag3Filled style={{ width: rem(14), height: rem(14),color: 'yellow' }} />,name: 'Medium'},
                {icon: <IconFlag3Filled style={{ width: rem(14), height: rem(14),color: 'gray' }} />, name: 'Low'},
                {icon: <IconCancel style={{ width: rem(14), height: rem(14),color: '#fafafa' }} />, name: 'None'},
            ];
            break;
        case "status":
            items = [
                {icon: <IconCircle style={{ width: rem(14), height: rem(14) }} />, name: 'To Do'},
                {icon: <IconProgress style={{ width: rem(14), height: rem(14) }} />, name: 'In Progress'},
                {icon: <IconCircleCheckFilled style={{ width: rem(14), height: rem(14) }} />, name: 'Completed'},
            ];
            break;
        default:
            break;
    }
    return items;
}
export {items}