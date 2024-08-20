import { rem } from '@mantine/core';
import { IconCircle, IconProgress, IconCircleCheckFilled } from '@tabler/icons-react'; // Adjust imports as necessary

const getStatusProperty = (statusName) => {
    switch (statusName) {
        case 'To Do':
            return {icon: <IconCircle style={{ width: rem(14), height: rem(14) }} />, color: '#68696a'};
        case 'In Progress':
            return {icon: <IconProgress style={{ width: rem(14), height: rem(14) }} />, color: '#23a6da'};
        case 'Completed':
            return {icon: <IconCircleCheckFilled style={{ width: rem(14), height: rem(14) }} />, color: '#23a099'};
        default:
            return null;
    }
};

export default getStatusProperty;