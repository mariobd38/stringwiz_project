import { rem } from '@mantine/core';
import { IconCircle, IconProgress, IconCircleCheckFilled } from '@tabler/icons-react'; // Adjust imports as necessary

const getStatusProperty = (statusName) => {
    switch (statusName) {
        case 'To Do':
            return {icon: <IconCircle style={{ width: rem(14), height: rem(14) }} />, background: '#3a3b3d'};
        case 'In Progress':
            return {icon: <IconProgress style={{ width: rem(14), height: rem(14) }} />, background: '#03669a'};
        case 'Completed':
            return {icon: <IconCircleCheckFilled style={{ width: rem(14), height: rem(14) }} />, background: '#036059'};
        default:
            return null;
    }
};

export default getStatusProperty;