import { menus } from '../router/router.config';
const findParentPath = (path: string) => {
    return menus.find(outItem => {
        if (outItem.children) {
            const childrenItem = outItem.children.find(innerItem => {
                return innerItem.path === path;
            });
            return childrenItem ? true : false;
        }
        return false;
    })?.path;
};
export default findParentPath;
