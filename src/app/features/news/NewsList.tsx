import { useGetNewsQuery } from "./newsApiSlice"
import { Link } from "react-router-dom"

export const NewsList = () => {

    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error
        /* @ts-ignore */
    } = useGetUsersQuery()

    let content;

    if (isLoading) {
        content = <p>"Loading..."</p>
    } else if (isSuccess) {
        content = (
            <section className="users">
                <h1>News List</h1>
                <ul>
                    {
                        users.map((user: any, i: number) => {
                            return <li key={i}>{user.username}</li>
                        })
                    }
                </ul>
                <Link to='/welcome'>Back to Welcome</Link>
            </section>
        )
    } else if (isError) {
        content = <p>{JSON.stringify(error)}</p>
    } 

    return content
}
