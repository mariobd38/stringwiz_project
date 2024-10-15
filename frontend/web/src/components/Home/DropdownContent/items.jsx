import {Icons} from '../../icons/icons';

function items(property) {
    let items = null;
    switch(property) {
        case "priority":
            items =  [
                {icon: Icons('IconFlag3Filled',14,14,'#bf1212'), name: 'Critical'},
                {icon: Icons('IconFlag3Filled',14,14,'#26a9dc'), name: 'High'},
                {icon: Icons('IconFlag3Filled',14,14,'yellow'), name: 'Medium'},
                {icon: Icons('IconFlag3Filled',14,14,'gray'), name: 'Low'},
                {icon: Icons('IconCancel',14,14,'#fafafa'), name: 'None'},
            ];
            break;
        case "status":
            items = [
                {icon: Icons('IconCircle',14,14,'#fafafa'), name: 'To Do'},
                {icon: Icons('IconProgress',14,14,'#fafafa'), name: 'In Progress'},
                {icon: Icons('IconCircleCheckFilled',14,14,'#fafafa'), name: 'Completed'},
            ];
            break;
        default:
            break;
    }
    return items;
}
export {items}