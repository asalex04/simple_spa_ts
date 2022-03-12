import {filterType} from "../store/reducers/UserSlice";
import {IUser} from "../../types/types";

export const useSortDate = (sortedField: filterType, users: IUser[]) => {
    let sortedUsers = [...users];
    if (sortedField !== 'company') {
        sortedUsers.sort((a, b) => {
            return a.address[sortedField] <= b.address[sortedField] ? -1 : 1
        });
    } else {
        sortedUsers.sort((a, b) => {
            return a[sortedField].name <= b[sortedField].name ? -1 : 1
        });
    }
    return sortedUsers
}
