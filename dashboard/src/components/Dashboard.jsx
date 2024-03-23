import Search from './Search'
import Menu from './Menu'
import Content from './Content'

export default function Dashboard (){
    return (
        <div className="dashboard">
        <Search/>
        <Menu/>
        <Content/>
        </div>
    )
}
