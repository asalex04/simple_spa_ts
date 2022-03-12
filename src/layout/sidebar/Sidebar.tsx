import { SidebarProps } from "./Sidebar.props";
import {Button} from "../../components/button/Button";
import styles from './Sidebar.module.css'
import {useAppDispatch} from "../../components/hooks/redux";
import {filterType, setFilter} from "../../components/store/reducers/UserSlice";

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
    const dispatch = useAppDispatch()

    const handleFilter = (item: filterType) => {
        dispatch(setFilter(item))
    }

    return (
        <div {...props} className={styles.title}>
            <div>Сортировка</div>
            <Button onClick={() => {handleFilter('city')}} appearance='primary'>по городу</Button>
            <Button onClick={() => (handleFilter('company'))} appearance='primary'>по компании</Button>
        </div>
    )
}